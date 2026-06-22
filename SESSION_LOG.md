# CS202 Reviewer Gym — Build and QC Log

Last updated: 2026-06-22

## Purpose

This file records the work completed on the CS202 Java Reviewer Gym so the project can be resumed safely after an interruption. The project root is:

```text
/home/nypx/cs202-reviewer-gym
```

## Original Goal

Build a real CS202 Java practice environment from:

```text
/home/nypx/Downloads/CS202_Codex_Reviewer_Gym_Spec.md
```

The project must support active study: explain, trace, fix, build, quiz, retain, run Java labs, take exams, and track weak topics. It must not be only a notes website.

## What Was Built Initially

- Dependency-free HTML/CSS/JavaScript reviewer that opens directly from `index.html` or through a local server.
- Dashboard with readiness score, progress, recommendation, weak topics, history, and study paths.
- All 15 requested topic groups.
- Topic detail pages with explanation, code example, common traps, coverage guide, trace task, debug task, code-writing task, vocabulary, and review checklist.
- Configurable practice engine for topic, question type, difficulty, and question count.
- Flashcards with known/still-learning tracking.
- Exam modes for Midterm 1, Midterm 2, Final, debugging, trace, and vocabulary.
- localStorage-backed progress, weak-topic review, streak, history, exam results, and readiness score.
- Java practice folders for 13 major areas, each with `README.md`, `starter/`, `solution/`, `trace/`, `debug/`, and `build/`.
- All eight required mini projects, including the KeyListener move-square project at the required path.
- README, AGENTS.md, data files, page redirect wrappers, and initial structural checks.

## Content and Data Quality Pass

The initial active bank had 89 runtime questions. A later pass expanded it and added validation.

### Current Question Bank

- **316 active runtime questions** total.
- **310 questions** meet the original required per-topic targets.
- **6 questions** are in the Vocabulary Bank topic.
- All question IDs are unique at runtime.
- The quality audit reports zero exact duplicate question signatures.

Required-topic counts:

| Topic | Count |
| --- | ---: |
| Java Basics | 15 |
| Conditions, Loops, and Operators | 20 |
| Arrays and ArrayLists | 25 |
| Methods | 25 |
| Classes and Objects | 30 |
| Constructors | 25 |
| Inheritance and Polymorphism | 30 |
| Interfaces and KeyListener | 15 |
| equals(), ==, =, and toString() | 20 |
| Exceptions, Files, and Null Pointers | 20 |
| Static, Final, Memory, and Garbage Collection | 15 |
| Graphics | 10 |
| Records vs Classes | 10 |
| Final Exam Mixed Practice | 50 |

Question types currently include trace, multiple-choice, debug, code-writing, vocabulary, matching, UML, short-answer, and mixed questions.

### Important Data Honesty Note

`data/questions.json` is **authoritative expansion configuration**, not a literal file containing all 316 question objects. It defines the required targets and supported question types.

`data/expanded-questions.json` is the checked-in, inspectable snapshot of all 316 active runtime question objects. It must stay synchronized with the configuration and generator; the validator checks this.

`scripts/data-loader.js` creates the active question objects from lesson templates. When the app is served over HTTP, it fetches the JSON configuration. When `index.html` is opened directly, it uses a matching synchronous fallback so the app still works.

The exact active runtime bank is exportable for inspection:

```bash
cd /home/nypx/cs202-reviewer-gym
node scripts/export-expanded-questions.js data/expanded-questions.json
```

To write it directly elsewhere:

```bash
node scripts/export-expanded-questions.js /tmp/cs202-expanded-questions.json
```

## Quality Improvements Made

- Added `tests/validate-question-data.js`.
  - Parses all data JSON.
  - Checks required fields, unique IDs, valid question types, choices, tags, topic counts, vocabulary terms, and related Java-file paths.
- Added `tests/audit-question-quality.js`.
  - Rejects exact duplicate question signatures, weak explanations, unfinished placeholder content, missing choice answers, missing practice types, and insufficient multi-concept final mixed questions.
- Added `scripts/export-expanded-questions.js` to make the runtime bank inspectable.
- Checked in `data/expanded-questions.json` as the deterministic snapshot of all active question objects.
- Reworked generated question scenarios to avoid exact duplicates.
- Rotated vocabulary and short-answer terms.
- Varied UML scenarios by topic and visibility.
- Strengthened final mixed questions to combine topics such as inheritance, object references, interfaces, ArrayLists, parsing, arrays, static/final, records, `==`, and `equals()`.
- Updated README content-status documentation.

## Validation Completed

These checks passed after the final quality-control pass:

```bash
cd /home/nypx/cs202-reviewer-gym

for file in scripts/*.js tests/validate-question-data.js tests/audit-question-quality.js; do
  node --check "$file"
done

node tests/validate-question-data.js
node tests/audit-question-quality.js
bash tests/sample-checks/check-structure.sh
```

All data JSON files parsed successfully.

All non-debug runnable Java files compiled individually, including solutions, starters, traces, builds, mini projects, and `MoveSquareGame.java`.

Sample programs run successfully:

- `BasicsPractice`
- `AnimalLab`
- `GradeAnalyzer`
- `FinalOopChallenge`

Headless-browser verification passed for:

- Direct-file dashboard rendering.
- `#topics` hash navigation rendering all topic cards.
- `#topic/final-mixed` rendering the active-practice page.
- HTTP-served reviewer rendering with its JSON configuration.

## How to Run the Project

### Website

```bash
cd /home/nypx/cs202-reviewer-gym
python3 -m http.server 8000
```

Open:

```text
http://localhost:8000
```

Opening `index.html` directly also works.

### Java Practice

Compile and run from the folder holding the file:

```bash
cd /home/nypx/cs202-reviewer-gym/java-practice/04-methods/solution
javac MethodBasicsSolution.java
java MethodBasicsSolution
```

`debug/` files intentionally contain mistakes. They may fail to compile or fail at runtime until the student fixes them.

## Key Files to Inspect First

1. `README.md` — project use and run instructions.
2. `AGENTS.md` — rules for future coding agents.
3. `index.html` — app shell.
4. `scripts/data-loader.js` — topic content, question generation, direct-file fallback, and HTTP data loading.
5. `data/questions.json` — required question targets and supported types.
6. `scripts/export-expanded-questions.js` — full-bank export utility.
7. `tests/validate-question-data.js` — data validation.
8. `tests/audit-question-quality.js` — content-quality checks.
9. `java-practice/README.md` — Java lab guide.
10. `java-practice/mini-projects/README.md` — mini-project guide.

## Safe Next Steps

There is no acceptance-blocking TODO.

Optional future improvement: export and check in a literal `expanded-questions.json`, then gradually replace template-generated scenarios with fully hand-authored questions. Keep the existing validation scripts and required per-topic counts intact.

## Important Do-Not-Rewrite Guidance

- Do not restart or redesign the app.
- Preserve direct-file support and HTTP-served JSON support.
- Preserve the 15-topic map, question targets, Java lab structure, and localStorage schema.
- Add content or tighten validation in focused changes only.
