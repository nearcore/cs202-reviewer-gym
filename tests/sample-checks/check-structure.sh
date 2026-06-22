#!/usr/bin/env bash
set -euo pipefail

for path in index.html styles/main.css scripts/app.js scripts/quiz-engine.js data/topics.json java-practice/README.md; do
  test -f "$path"
done

for folder in java-practice/01-basics java-practice/02-conditionals-loops java-practice/03-arrays-arraylists java-practice/04-methods java-practice/05-classes-objects java-practice/06-constructors java-practice/07-inheritance-polymorphism java-practice/08-interfaces-keylistener java-practice/09-equals-tostring java-practice/10-exceptions-files java-practice/11-static-final-memory java-practice/12-graphics java-practice/13-records-classes; do
  test -f "$folder/README.md"
  test -d "$folder/starter"
  test -d "$folder/solution"
  test -d "$folder/trace"
  test -d "$folder/debug"
  test -d "$folder/build"
done

echo "Core reviewer structure is present."
