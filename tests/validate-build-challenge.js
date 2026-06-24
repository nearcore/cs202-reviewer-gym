#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const vm = require('vm');

const dataFile = path.join(__dirname, '..', 'scripts', 'build-challenge-data.js');
const code = fs.readFileSync(dataFile, 'utf8');
const context = { window: {} };
vm.createContext(context);
vm.runInContext(code, context, { filename: dataFile });
const data = context.window.BUILD_CHALLENGE_DATA;

function fail(message) {
  console.error(JSON.stringify({ status: 'error', message }, null, 2));
  process.exit(1);
}

if (!data || typeof data !== 'object') fail('BUILD_CHALLENGE_DATA is missing.');
const base = data.base || [];
const level1Extra = data.extras?.level1 || [];
const level2Extra = data.extras?.level2 || [];
const level3Solo = data.extras?.level3 || [];
const all = [...base, ...level1Extra, ...level2Extra, ...level3Solo];

if (base.length !== 15) fail(`Expected 15 base builds, found ${base.length}.`);
if (level1Extra.length !== 15) fail(`Expected 15 Level 1 extras, found ${level1Extra.length}.`);
if (level2Extra.length !== 15) fail(`Expected 15 Level 2 extras, found ${level2Extra.length}.`);
if (level3Solo.length !== 15) fail(`Expected 15 Level 3 solo builds, found ${level3Solo.length}.`);
if (all.length !== 60) fail(`Expected 60 total build challenges, found ${all.length}.`);

const ids = new Set();
const required = ['id', 'level', 'topic', 'skill', 'title', 'scenario', 'goal', 'starter', 'deliverables', 'modelPlan', 'modelAnswer', 'explanation', 'commonMistake', 'extension', 'concepts'];
for (const item of all) {
  for (const field of required) {
    if (item[field] === undefined || item[field] === null || item[field] === '') fail(`${item.id || 'unknown'} missing ${field}.`);
  }
  if (ids.has(item.id)) fail(`Duplicate build id ${item.id}.`);
  ids.add(item.id);
  if (!Array.isArray(item.deliverables) || item.deliverables.length < 3) fail(`${item.id} needs at least 3 deliverables.`);
  if (!Array.isArray(item.concepts) || item.concepts.length < 2) fail(`${item.id} needs concept tags.`);
  if (!String(item.starter).includes('\n')) fail(`${item.id} starter should be multiline.`);
  if (!String(item.modelAnswer).includes('\n')) fail(`${item.id} model answer should be multiline.`);
}
for (const item of level1Extra) {
  if (!Array.isArray(item.milestones) || item.milestones.length < 3) fail(`${item.id} needs Level 1 milestones.`);
  if (!Array.isArray(item.hints) || item.hints.length < 2) fail(`${item.id} needs Level 1 hints.`);
}
for (const item of level2Extra) {
  if (!Array.isArray(item.hints) || item.hints.length < 2) fail(`${item.id} needs Level 2 hints.`);
}
for (const item of level3Solo) {
  if ((item.hints || []).length) fail(`${item.id} should not have hints in solo mode.`);
}

console.log(JSON.stringify({
  status: 'ok',
  buildChallenges: all.length,
  base: base.length,
  level1Extra: level1Extra.length,
  level2Extra: level2Extra.length,
  level3Solo: level3Solo.length,
}, null, 2));
