#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const readJson = relativePath => JSON.parse(fs.readFileSync(path.join(root, relativePath), 'utf8'));
const requiredFields = ['id', 'topic', 'subtopic', 'type', 'difficulty', 'prompt', 'answer', 'explanation', 'examTags'];

for (const file of ['data/topics.json', 'data/questions.json', 'data/expanded-questions.json', 'data/vocabulary.json', 'data/exam-pools.json', 'data/study-paths.json']) {
  readJson(file);
}

const context = { window: { location: { protocol: 'file:' } }, Promise, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'scripts/data-loader.js'), 'utf8'), context, { filename: 'scripts/data-loader.js' });

const data = context.window.REVIEWER_DATA;
const config = readJson('data/questions.json');
const expandedBank = readJson('data/expanded-questions.json');
const topicManifest = readJson('data/topics.json');
const vocabularyManifest = readJson('data/vocabulary.json');
const errors = [];
const supportedTypes = new Set(config.supportedQuestionTypes);
const topicNames = new Set(data.topics.map(topic => topic.name));
const seenIds = new Set();

if (expandedBank.formatVersion !== 1) errors.push('Expanded question bank has an unsupported formatVersion.');
if (expandedBank.configVersion !== config.version) errors.push('data/questions.json and data/expanded-questions.json have different config versions. Regenerate the expanded bank.');
if (expandedBank.questionCount !== expandedBank.questions?.length) errors.push('Expanded question bank questionCount does not match its questions array.');
if (!Array.isArray(expandedBank.questions)) errors.push('Expanded question bank must contain a questions array.');
if (JSON.stringify(data.questions) !== JSON.stringify(expandedBank.questions)) {
  errors.push('data/expanded-questions.json is out of sync with scripts/data-loader.js. Regenerate it with node scripts/export-expanded-questions.js data/expanded-questions.json.');
}

if (!Array.isArray(topicManifest.topics) || topicManifest.topics.length !== 15) errors.push('Topic manifest must contain all 15 topic groups.');
if (!Array.isArray(vocabularyManifest.terms) || vocabularyManifest.terms.length < 45) errors.push('Vocabulary manifest must contain at least 45 terms.');
const seenTerms = new Set();
for (const item of vocabularyManifest.terms || []) {
  for (const field of ['term', 'definition', 'topic', 'examTags']) {
    if (!item[field] || (Array.isArray(item[field]) && !item[field].length)) errors.push(`Vocabulary item is missing ${field}`);
  }
  const key = `${item.topic}::${item.term}`.toLowerCase();
  if (seenTerms.has(key)) errors.push(`Duplicate vocabulary term: ${item.term} in ${item.topic}`);
  seenTerms.add(key);
  if (!topicNames.has(item.topic)) errors.push(`Vocabulary term ${item.term} has unknown topic: ${item.topic}`);
}

for (const question of data.questions) {
  for (const field of requiredFields) {
    if (question[field] === undefined || question[field] === null || question[field] === '') {
      errors.push(`${question.id || '(missing id)'} is missing ${field}`);
    }
  }
  if (seenIds.has(question.id)) errors.push(`Duplicate question id: ${question.id}`);
  seenIds.add(question.id);
  if (!topicNames.has(question.topic)) errors.push(`${question.id} has unknown topic: ${question.topic}`);
  if (!supportedTypes.has(question.type)) errors.push(`${question.id} has unsupported type: ${question.type}`);
  if (!Array.isArray(question.examTags) || question.examTags.length === 0) errors.push(`${question.id} needs exam tags`);
  if (['multiple-choice', 'trace', 'vocabulary', 'matching', 'uml', 'mixed'].includes(question.type) && (!Array.isArray(question.choices) || question.choices.length < 2)) {
    errors.push(`${question.id} needs choices for ${question.type}`);
  }
  if (question.relatedJavaFile && !fs.existsSync(path.join(root, question.relatedJavaFile))) {
    errors.push(`${question.id} points to missing Java file: ${question.relatedJavaFile}`);
  }
}

const expandedIds = new Set();
for (const question of expandedBank.questions || []) {
  for (const field of requiredFields) {
    if (question[field] === undefined || question[field] === null || question[field] === '') errors.push(`Expanded ${question.id || '(missing id)'} is missing ${field}`);
  }
  if (expandedIds.has(question.id)) errors.push(`Expanded bank has duplicate id: ${question.id}`);
  expandedIds.add(question.id);
  if (!topicNames.has(question.topic)) errors.push(`Expanded ${question.id} has unknown topic: ${question.topic}`);
  if (!supportedTypes.has(question.type)) errors.push(`Expanded ${question.id} has unsupported type: ${question.type}`);
  if (question.relatedJavaFile && !fs.existsSync(path.join(root, question.relatedJavaFile))) errors.push(`Expanded ${question.id} points to missing Java file: ${question.relatedJavaFile}`);
}

for (const [topic, target] of Object.entries(config.targets)) {
  const actual = data.questions.filter(question => question.topic === topic).length;
  if (actual < target) errors.push(`${topic} has ${actual} questions; target is ${target}`);
}

const targetedTotal = Object.values(config.targets).reduce((sum, count) => sum + count, 0);
if (targetedTotal < 310) errors.push(`Targeted bank has ${targetedTotal}; at least 310 is required.`);

if (errors.length) {
  console.error(`Question data validation failed with ${errors.length} error(s):`);
  errors.forEach(error => console.error(`- ${error}`));
  process.exit(1);
}

const counts = Object.fromEntries(Object.keys(config.targets).map(topic => [topic, data.questions.filter(question => question.topic === topic).length]));
console.log(JSON.stringify({ status: 'ok', runtimeQuestions: data.questions.length, expandedSnapshotQuestions: expandedBank.questions.length, snapshotInSync: true, targetedQuestions: targetedTotal, vocabularyQuestions: data.questions.filter(question => question.topic === 'Vocabulary Bank').length, counts }, null, 2));
