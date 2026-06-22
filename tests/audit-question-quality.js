#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const context = { window: { location: { protocol: 'file:' } }, Promise, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'scripts/data-loader.js'), 'utf8'), context, { filename: 'scripts/data-loader.js' });

const questions = context.window.REVIEWER_DATA.questions;
const normalize = value => String(value || '').replace(/\s+/g, ' ').trim().toLowerCase();
const errors = [];
const typeCounts = {};
const exactKeys = new Map();

for (const question of questions) {
  typeCounts[question.type] = (typeCounts[question.type] || 0) + 1;
  const signature = `${normalize(question.prompt)}|${normalize(question.code)}|${normalize(question.answer)}`;
  const previous = exactKeys.get(signature) || [];
  previous.push(question.id);
  exactKeys.set(signature, previous);
  if (String(question.explanation).trim().length < 25) errors.push(`${question.id} has an explanation that is too short.`);
  if (/\bTODO\b|placeholder/i.test(`${question.prompt}\n${question.code || ''}\n${question.answer}`)) errors.push(`${question.id} contains unfinished placeholder content.`);
  if (question.type === 'code-writing' || question.type === 'debug') {
    if (!question.selfCheck) errors.push(`${question.id} should use self-checking for open-ended work.`);
  }
  if (['multiple-choice', 'trace', 'vocabulary', 'matching', 'uml', 'mixed'].includes(question.type) && !question.choices.includes(question.answer)) {
    errors.push(`${question.id} has an answer that is not one of its choices.`);
  }
}

for (const ids of exactKeys.values()) {
  if (ids.length > 1) errors.push(`Exact duplicate questions: ${ids.join(', ')}`);
}

for (const type of ['multiple-choice', 'trace', 'debug', 'code-writing', 'vocabulary', 'matching', 'uml', 'short-answer', 'mixed']) {
  if (!typeCounts[type]) errors.push(`Missing required question type: ${type}`);
}

const finalMixed = questions.filter(question => question.topic === 'Final Exam Mixed Practice');
const combinedFinal = finalMixed.filter(question => question.type === 'mixed' && question.code && /ArrayList|record|static|extends|parseInt|equals|implements/.test(question.code));
if (combinedFinal.length < 5) errors.push('Final mixed practice needs at least five genuine multi-concept code questions.');

if (errors.length) {
  console.error(`Question quality audit failed with ${errors.length} issue(s):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

console.log(JSON.stringify({ status: 'ok', questionCount: questions.length, typeCounts, finalMixedQuestions: finalMixed.length, genuineCombinedFinalQuestions: combinedFinal.length, exactDuplicateGroups: 0 }, null, 2));
