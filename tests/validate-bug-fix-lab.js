#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'scripts/bug-fix-lab-data.js'), 'utf8'), context, { filename: 'scripts/bug-fix-lab-data.js' });

const data = context.window.BUG_FIX_LAB_DATA;
const errors = [];
const required = ['id', 'title', 'topic', 'skill', 'bugReport', 'actualBehavior', 'expectedBehavior', 'task', 'code', 'officialReview', 'commonMistake', 'selfCheck'];
const groups = {
  base: data?.base || [],
  level1: data?.extras?.level1 || [],
  level2: data?.extras?.level2 || [],
  level3: data?.extras?.level3 || []
};

if (!data || data.version !== 1) errors.push('Bug Fix Lab data must have version 1.');
for (const [group, expected] of Object.entries({ base: 25, level1: 25, level2: 25, level3: 25 })) {
  if (groups[group].length !== expected) errors.push(`${group} must contain ${expected} items; found ${groups[group].length}.`);
}
const seen = new Set();
for (const [group, items] of Object.entries(groups)) {
  for (const item of items) {
    const key = `${group}:${item.id}`;
    if (seen.has(key)) errors.push(`Duplicate bug-fix id: ${key}`);
    seen.add(key);
    for (const field of required) {
      if (item[field] === undefined || item[field] === null || item[field] === '' || (Array.isArray(item[field]) && !item[field].length)) {
        errors.push(`${key} is missing ${field}.`);
      }
    }
    if (!Array.isArray(item.clues)) errors.push(`${key} clues must be an array.`);
    if ((group === 'base' || group === 'level1') && item.clues.length < 1) errors.push(`${key} needs one hidden clue.`);
    if ((group === 'level2' || group === 'level3') && item.clues.length > 0) errors.push(`${key} should not include clues.`);
    if (group === 'level3' && !/review|refactor|design|logic|style|concept|multiple|side effect|state|focus|readability|structure|mutat/i.test(`${item.task} ${item.officialReview} ${item.bugReport}`)) errors.push(`${key} should clearly be review/refactor oriented.`);
    const codeLines = String(item.code || '').split(/\r?\n/);
    const longLines = codeLines.filter(line => line.length > 120);
    if (longLines.length) errors.push(`${key} has code lines longer than 120 characters; format code into readable Java lines.`);
    if (String(item.code || '').trim().split(/\r?\n/).length < 4) errors.push(`${key} code should be formatted across multiple readable lines.`);
  }
}

if (errors.length) {
  console.error(`Bug Fix Lab validation failed with ${errors.length} error(s):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(JSON.stringify({ status: 'ok', bugFixItems: 100, base: 25, level1Extra: 25, level2Extra: 25, level3Review: 25 }, null, 2));
