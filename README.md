# CS202 Java Reviewer Gym

## What This Is

A dependency-free study and practice environment for CS202 Java. It is designed for active work: explain a concept, trace code, fix a bug, write a small solution, quiz yourself, and return to missed topics.

The reviewer covers Midterm 1, Midterm 2, and Final Exam topics, including Java basics, loops, arrays, methods, OOP, constructors, inheritance, interfaces, KeyListener, equality, exceptions/files, static/final, graphics, records, and mixed final practice.

## How to Open the Reviewer

The app can be opened directly by double-clicking `index.html`. A simple local server is more convenient for normal browser navigation:

```bash
cd cs202-reviewer-gym
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

No npm install or framework setup is required.

## How to Use the Reviewer

- **Dashboard** shows progress, readiness, weak topics, a recommendation, and study history.
- **Topics** has all 15 major topic groups. Each page has an explanation, example, trace task, bug fix, build prompt, vocabulary, and related Java file.
- **Practice** builds a question set by topic, type, difficulty, and question count.
- **Flashcards** flips vocabulary cards and records whether a card is known or still learning.
- **Exam Mode** selects random questions, hides explanations while active, and reports missed topics afterward.
- **Progress** shows accuracy, completion, weak/strong topics, history, and a reset control.

Progress uses browser `localStorage`. It stays on this browser until you reset it.

## How to Run Java Practice

Start in the folder of one exercise, compile a solution file, then run its class:

```bash
cd java-practice/04-methods/solution
javac MethodBasicsSolution.java
java MethodBasicsSolution
```

The `starter/` files are meant to be edited. Files in `debug/` intentionally contain mistakes and may not compile until you fix them. Each topic README names a runnable solution.

Mini-project examples are in `java-practice/mini-projects/`:

```bash
cd java-practice/mini-projects
javac GradeAnalyzer.java
java GradeAnalyzer
```

Use Java 21 or newer. The included examples were checked with a newer JDK and stick to CS202-level syntax.

## Recommended Study Routine

1. Review one topic.
2. Trace three code examples before running them.
3. Fix two bugs and explain the cause in one sentence each.
4. Write one small coding task in the Java practice folder.
5. Take a 5- or 10-question quiz.

## Exam Prep Routine

1. Take the appropriate Exam Mode set.
2. Open every missed topic from the final report.
3. Redo the matching Java starter or debug file.
4. Take a new mixed exam.

## Content Status

The reviewer has 316 active runtime questions: 310 questions meeting the required per-topic targets plus six Vocabulary Bank questions. The bank includes multiple choice, trace, debugging, code-writing, vocabulary, matching, UML, short-answer, and final mixed prompts.

The reviewer has three related question-data sources:

- `data/questions.json` is the target/config file: required counts, supported types, and expansion metadata.
- `data/expanded-questions.json` is the checked-in, inspectable snapshot of all active question objects.
- `scripts/data-loader.js` contains the lesson templates and direct-file fallback generator. It expands the bank at runtime; when the site is served over HTTP, it also reads the JSON configuration.

Run the validator after changing content. It checks the served JSON-config result, the direct-file fallback, and the checked-in expanded snapshot for exact synchronization:

```bash
node tests/validate-question-data.js
```

Regenerate the expanded snapshot after intentionally changing question templates or targets:

```bash
node scripts/export-expanded-questions.js data/expanded-questions.json
```

Pass a file path instead to write the export directly:

```bash
node scripts/export-expanded-questions.js /tmp/cs202-expanded-questions.json
```
