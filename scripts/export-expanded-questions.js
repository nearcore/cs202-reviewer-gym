#!/usr/bin/env node
/* Export the exact direct-file runtime question objects for human inspection. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const context = { window: { location: { protocol: 'file:' } }, Promise, console };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'scripts/data-loader.js'), 'utf8'), context, { filename: 'scripts/data-loader.js' });
const config = JSON.parse(fs.readFileSync(path.join(root, 'data/questions.json'), 'utf8'));

const exportData = {
  formatVersion: 1,
  configVersion: config.version,
  source: 'data/questions.json targets + scripts/data-loader.js lesson templates',
  questionCount: context.window.REVIEWER_DATA.questions.length,
  questions: context.window.REVIEWER_DATA.questions
};

const json = `${JSON.stringify(exportData, null, 2)}\n`;
const output = process.argv[2];
if (output) {
  fs.writeFileSync(path.resolve(process.cwd(), output), json);
  console.error(`Wrote ${exportData.questionCount} expanded questions to ${output}`);
} else {
  process.stdout.write(json);
}
