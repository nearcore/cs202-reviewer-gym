#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'scripts/tracing-game-data.js'), 'utf8'), context, { filename: 'scripts/tracing-game-data.js' });

const data = context.window.TRACING_GAME_DATA;
const errors = [];
const required = ['id', 'title', 'topic', 'skill', 'code', 'question', 'answer', 'explanation', 'commonMistake', 'examTags'];
const groups = {
  base: data?.base || [],
  level1: data?.extras?.level1 || [],
  level2: data?.extras?.level2 || [],
  level3: data?.extras?.level3 || []
};

if (!data || data.version !== 1) errors.push('Tracing game data must have version 1.');
for (const [group, expected] of Object.entries({ base: 25, level1: 25, level2: 25, level3: 25 })) {
  if (groups[group].length !== expected) errors.push(`${group} must contain ${expected} problems; found ${groups[group].length}.`);
}

const seen = new Set();
for (const [group, items] of Object.entries(groups)) {
  for (const item of items) {
    const key = `${group}:${item.id}`;
    if (seen.has(key)) errors.push(`Duplicate tracing id: ${key}`);
    seen.add(key);
    for (const field of required) {
      if (item[field] === undefined || item[field] === null || item[field] === '' || (Array.isArray(item[field]) && !item[field].length)) {
        errors.push(`${key} is missing ${field}.`);
      }
    }
    if (!Array.isArray(item.clues)) errors.push(`${key} clues must be an array.`);
    if ((group === 'base' || group === 'level1') && (!Array.isArray(item.clues) || item.clues.length < 2)) errors.push(`${key} needs at least two clues.`);
    if (group === 'level2' && (!Array.isArray(item.clues) || item.clues.length < 1)) errors.push(`${key} needs one clue.`);
    if (group === 'level3' && item.clues.length > 0) errors.push(`${key} should not include clues because Level 3 is solo.`);
  }
}

if (errors.length) {
  console.error(`Tracing game validation failed with ${errors.length} error(s):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(JSON.stringify({ status: 'ok', tracingProblems: 100, base: 25, level1Extra: 25, level2Extra: 25, level3Extra: 25 }, null, 2));
