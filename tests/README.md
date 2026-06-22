# Quality Checks

Run these from the project root:

```bash
node --check scripts/data-loader.js
node --check scripts/progress-store.js
node --check scripts/review-scheduler.js
node --check scripts/quiz-engine.js
node --check scripts/exam-mode.js
node --check scripts/app.js
node tests/validate-question-data.js
node tests/audit-question-quality.js
bash tests/sample-checks/check-structure.sh
```

`validate-question-data.js` loads the direct-file fallback, verifies all JSON parses, checks required runtime question fields, confirms unique IDs and valid types, verifies related Java paths, enforces the required count per topic, and requires `data/expanded-questions.json` to exactly match the active generated bank.

`audit-question-quality.js` rejects exact duplicate active questions, missing answer choices, weak explanations, unfinished placeholders, missing practice types, and a final-mixed set that does not combine concepts in code.

Compile each Java solution independently from its own folder. The `sample-checks/` directory contains a browser-agnostic structural smoke test.
