#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const vocabularyPath = path.join(__dirname, '..', 'data', 'vocabulary.json');
const appPath = path.join(__dirname, '..', 'scripts', 'app.js');
const vocabulary = JSON.parse(fs.readFileSync(vocabularyPath, 'utf8'));
const appSource = fs.readFileSync(appPath, 'utf8');
const terms = vocabulary.terms || [];
const errors = [];
const requiredFields = ['term', 'definition', 'topic', 'examTags'];
const finalFocusTopics = new Set([
  'Methods',
  'Classes and Objects',
  'Constructors',
  'Inheritance and Polymorphism',
  'Interfaces and KeyListener',
  'equals(), ==, =, and toString()',
  'Exceptions, Files, and Null Pointers',
  'Static, Final, Memory, and Garbage Collection',
  'Graphics',
  'Records vs Classes',
  'Final Exam Mixed Practice',
  'Vocabulary Bank'
]);

const seen = new Set();
for (const [index, term] of terms.entries()) {
  for (const field of requiredFields) {
    if (!(field in term)) errors.push(`term ${index + 1} is missing ${field}`);
  }
  if (!String(term.term || '').trim()) errors.push(`term ${index + 1} has an empty term`);
  if (!String(term.definition || '').trim()) errors.push(`term ${term.term || index + 1} has an empty definition`);
  if (!Array.isArray(term.examTags) || !term.examTags.includes('final')) errors.push(`term ${term.term || index + 1} must include the final exam tag`);
  const key = `${String(term.term).toLowerCase()}::${term.topic}`;
  if (seen.has(key)) errors.push(`duplicate flashcard term/topic: ${term.term} / ${term.topic}`);
  seen.add(key);
}

const counts = terms.reduce((acc, term) => {
  acc.total += 1;
  for (const tag of term.examTags || []) acc[tag] = (acc[tag] || 0) + 1;
  if (finalFocusTopics.has(term.topic) && term.examTags?.includes('final')) acc.finalFocus += 1;
  if (term.examFocus || term.commonTrap || term.checkQuestion) acc.enhanced += 1;
  return acc;
}, { total: 0, midterm1: 0, midterm2: 0, final: 0, finalFocus: 0, enhanced: 0 });

if (counts.total < 75) errors.push(`expected at least 75 flashcards after quality pass, found ${counts.total}`);
if (counts.midterm1 < 15) errors.push(`expected at least 15 Midterm 1 flashcards, found ${counts.midterm1}`);
if (counts.midterm2 < 25) errors.push(`expected at least 25 Midterm 2 flashcards, found ${counts.midterm2}`);
if (counts.finalFocus < 45) errors.push(`expected at least 45 Final focus flashcards, found ${counts.finalFocus}`);
if (counts.enhanced < 30) errors.push(`expected at least 30 enhanced flashcards with focus/trap/check prompts, found ${counts.enhanced}`);

for (const requiredUi of ['flashcard-topic', 'shuffle-cards', 'Final focus', 'Midterm 2 / OOP focus', 'rebuildFlashcardDeck']) {
  if (!appSource.includes(requiredUi)) errors.push(`flashcard UI is missing ${requiredUi}`);
}

if (errors.length) {
  console.error(JSON.stringify({ status: 'error', errors }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: 'ok', ...counts }, null, 2));
