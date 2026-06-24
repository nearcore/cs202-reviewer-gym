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
const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

check(data && typeof data === 'object', 'BUILD_CHALLENGE_DATA is missing.');
check(data?.version === 2, 'Build Challenge data must have version 2 after the quality pass.');
check(Array.isArray(data?.qualityPass?.coverage) && data.qualityPass.coverage.length >= 3, 'Build Challenge needs qualityPass coverage notes.');
const base = data?.base || [];
const level1Extra = data?.extras?.level1 || [];
const level2Extra = data?.extras?.level2 || [];
const level3Solo = data?.extras?.level3 || [];
const all = [...base, ...level1Extra, ...level2Extra, ...level3Solo];

check(base.length === 15, `Expected 15 base builds, found ${base.length}.`);
check(level1Extra.length === 15, `Expected 15 Level 1 extras, found ${level1Extra.length}.`);
check(level2Extra.length === 15, `Expected 15 Level 2 extras, found ${level2Extra.length}.`);
check(level3Solo.length === 15, `Expected 15 Level 3 solo builds, found ${level3Solo.length}.`);
check(all.length === 60, `Expected 60 total build challenges, found ${all.length}.`);

const ids = new Set();
const required = ['id', 'level', 'topic', 'skill', 'title', 'scenario', 'goal', 'starter', 'deliverables', 'modelPlan', 'modelAnswer', 'explanation', 'commonMistake', 'extension', 'concepts', 'studyGuideFocus', 'difficultyReason', 'acceptanceTests', 'rubric', 'reflectionPrompt', 'examHabit'];
for (const item of all) {
  for (const field of required) {
    check(item[field] !== undefined && item[field] !== null && item[field] !== '', `${item.id || 'unknown'} missing ${field}.`);
  }
  check(!ids.has(item.id), `Duplicate build id ${item.id}.`);
  ids.add(item.id);
  check(Array.isArray(item.deliverables) && item.deliverables.length >= 3, `${item.id} needs at least 3 deliverables.`);
  check(Array.isArray(item.concepts) && item.concepts.length >= 2, `${item.id} needs concept tags.`);
  check(Array.isArray(item.acceptanceTests) && item.acceptanceTests.length >= 3, `${item.id} needs at least 3 acceptance tests.`);
  check(Array.isArray(item.rubric) && item.rubric.length >= 3, `${item.id} needs a three-part quality rubric.`);
  check(String(item.studyGuideFocus || '').toLowerCase().includes('focus'), `${item.id} studyGuideFocus should connect to the study guide.`);
  check(String(item.reflectionPrompt || '').toLowerCase().includes('explain'), `${item.id} reflectionPrompt should ask for explanation.`);
  check(String(item.starter || '').includes('\n'), `${item.id} starter should be multiline.`);
  check(String(item.modelAnswer || '').includes('\n'), `${item.id} model answer should be multiline.`);
  check(String(item.modelPlan || '').toLowerCase().includes('test'), `${item.id} modelPlan should mention testing.`);
}
for (const item of level1Extra) {
  check(Array.isArray(item.milestones) && item.milestones.length >= 3, `${item.id} needs Level 1 milestones.`);
  check(Array.isArray(item.hints) && item.hints.length >= 2, `${item.id} needs Level 1 hints.`);
}
for (const item of level2Extra) {
  check(Array.isArray(item.hints) && item.hints.length >= 2, `${item.id} needs Level 2 hints.`);
}
for (const item of level3Solo) {
  check((item.hints || []).length === 0, `${item.id} should not have hints in solo mode.`);
  check((item.milestones || []).length === 0, `${item.id} should not have milestones in solo mode.`);
}

if (errors.length) {
  console.error(`Build Challenge validation failed with ${errors.length} error(s):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(JSON.stringify({
  status: 'ok',
  qualityPass: data.qualityPass.name,
  buildChallenges: all.length,
  base: base.length,
  level1Extra: level1Extra.length,
  level2Extra: level2Extra.length,
  level3Solo: level3Solo.length,
}, null, 2));
