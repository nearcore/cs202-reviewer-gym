#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'scripts/coding-quest-data.js'), 'utf8'), context, { filename: 'scripts/coding-quest-data.js' });

const data = context.window.CODING_QUEST_DATA;
const errors = [];
const required = ['id', 'level', 'title', 'topic', 'skill', 'prompt', 'task', 'starter', 'required', 'modelAnswer', 'explanation', 'commonMistake', 'selfCheck', 'concepts', 'studyGuideFocus', 'levelReason', 'edgeCases', 'rubric', 'reflectionPrompt', 'examHabit'];
const groups = {
  base: data?.base || [],
  level1: data?.extras?.level1 || [],
  level2: data?.extras?.level2 || [],
  level3: data?.extras?.level3 || []
};

if (!data || data.version !== 2) errors.push('Coding Quest data must have version 2 after the quality pass.');
if (!data?.qualityPass?.coverage || data.qualityPass.coverage.length < 3) errors.push('Coding Quest needs qualityPass coverage notes.');
for (const [group, expected] of Object.entries({ base: 25, level1: 25, level2: 25, level3: 25 })) {
  if (groups[group].length !== expected) errors.push(`${group} must contain ${expected} quests; found ${groups[group].length}.`);
}

const seen = new Set();
const genericGuidance = new Set([
  'Identify the return type or output first.',
  'Write the smallest code that satisfies the prompt.',
  'Check the boundary case in the self-check.',
  'Look at the method header before writing code.',
  'Trace one sample input after writing your answer.'
]);
for (const [group, items] of Object.entries(groups)) {
  for (const item of items) {
    const key = `${group}:${item.id}`;
    if (seen.has(item.id)) errors.push(`Duplicate coding quest id: ${item.id}`);
    seen.add(item.id);
    for (const field of required) {
      const value = item[field];
      if (value === undefined || value === null || value === '' || (Array.isArray(value) && !value.length)) {
        errors.push(`${key} is missing ${field}.`);
      }
    }
    if (!Array.isArray(item.required) || item.required.length < 3) errors.push(`${key} needs at least three requirements.`);
    if (!Array.isArray(item.concepts) || item.concepts.length < 2) errors.push(`${key} needs concept tags.`);
    if (!Array.isArray(item.edgeCases) || item.edgeCases.length < 3) errors.push(`${key} needs at least three edge checks.`);
    if (!Array.isArray(item.rubric) || item.rubric.length < 3) errors.push(`${key} needs a three-part quality rubric.`);
    if (!String(item.studyGuideFocus || '').toLowerCase().includes('focus')) errors.push(`${key} studyGuideFocus should connect to the study guide.`);
    if (!String(item.reflectionPrompt || '').toLowerCase().includes('explain')) errors.push(`${key} reflectionPrompt should ask for explanation.`);
    if (!Array.isArray(item.guidelines)) errors.push(`${key} guidelines must be an array.`);
    if (!Array.isArray(item.hints)) errors.push(`${key} hints must be an array.`);
    if ((group === 'base' || group === 'level1') && item.guidelines.length < 3) errors.push(`${key} needs visible Level 1 guidance.`);
    if ((group === 'base' || group === 'level1' || group === 'level2') && item.hints.length < 2) errors.push(`${key} needs at least two optional hints for supported modes.`);
    if (group !== 'level3' && [...item.guidelines, ...item.hints].some(value => genericGuidance.has(value))) errors.push(`${key} still uses old generic guidance.`);
    if (group === 'level3' && item.hints.length > 0) errors.push(`${key} should not include hints because Level 3 is solo.`);
    if (group === 'level3' && item.guidelines.length > 0) errors.push(`${key} should not include guidelines because Level 3 is solo.`);
    for (const field of ['starter', 'modelAnswer']) {
      const lines = String(item[field] || '').trim().split(/\r?\n/);
      const longLines = lines.filter(line => line.length > 120);
      if (longLines.length) errors.push(`${key} ${field} has lines longer than 120 characters; format code into readable Java lines.`);
      if (lines.length < 2) errors.push(`${key} ${field} should be formatted across multiple readable lines.`);
    }
  }
}

if (errors.length) {
  console.error(`Coding Quest validation failed with ${errors.length} error(s):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(JSON.stringify({ status: 'ok', qualityPass: data.qualityPass.name, codingQuestItems: 100, base: 25, level1Extra: 25, level2Extra: 25, level3Solo: 25 }, null, 2));
