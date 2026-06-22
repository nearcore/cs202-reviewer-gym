(function () {
  const escapeHtml = (value = '') => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

  const codeBlock = code => code ? `<pre><code>${escapeHtml(code)}</code></pre>` : '';
  const titleCase = value => String(value).replaceAll('-', ' ').replace(/\b\w/g, char => char.toUpperCase());

  function shuffle(items, random = Math.random) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index--) {
      const swap = Math.floor(random() * (index + 1));
      [copy[index], copy[swap]] = [copy[swap], copy[index]];
    }
    return copy;
  }

  function prepareQuestionForSession(question, random = Math.random) {
    const prepared = { ...question };
    if (Array.isArray(question.choices)) {
      prepared.choices = shuffle(question.choices, random);
    }
    return prepared;
  }

  function prepareSessionQuestions(questions, random = Math.random) {
    return questions.map(question => prepareQuestionForSession(question, random));
  }

  class QuizSession {
    constructor({ root, questions, source = 'practice', exam = false, label = 'Practice', onComplete }) {
      this.root = root;
      this.questions = prepareSessionQuestions(questions);
      this.source = source;
      this.exam = exam;
      this.label = label;
      this.onComplete = onComplete;
      this.index = 0;
      this.results = [];
    }

    start() {
      if (!this.questions.length) {
        this.root.innerHTML = `<div class="empty">No questions match those filters. Try a broader topic, type, or difficulty.</div>`;
        return;
      }
      this.render();
    }

    current() { return this.questions[this.index]; }

    render() {
      const question = this.current();
      const isSelf = Boolean(question.selfCheck);
      const choices = question.choices?.map((choice, index) => `
        <label class="choice"><input type="radio" name="answer" value="${escapeHtml(choice)}"> <span class="choice-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(choice)}</span></label>`).join('') || '';
      const answerInput = question.choices ? `<div class="choice-list">${choices}</div>` : `<label>Your answer<textarea id="text-answer" placeholder="Write your answer or corrected code here."></textarea></label>`;
      const action = isSelf
        ? (this.exam
          ? `<button id="self-correct" class="success">I got it</button><button id="self-wrong" class="secondary">I need review</button>`
          : `<button id="reveal-answer">Reveal model answer</button>`)
        : `<button id="check-answer">${this.exam ? 'Save answer & next' : 'Check answer'}</button>`;
      this.root.innerHTML = `
        <section class="question-shell">
          <div class="page-head">
            <p class="eyebrow">${this.exam ? 'Exam in progress · no hints' : 'Active practice'}</p>
            <div class="topic-topline"><h1>${escapeHtml(this.label)}</h1><span class="question-counter">Question ${this.index + 1} of ${this.questions.length}</span></div>
            <div class="progress-track"><div class="progress-bar" style="width:${Math.round(((this.index + 1) / this.questions.length) * 100)}%"></div></div>
          </div>
          <article class="card question-card">
            <div class="question-meta"><span class="tag">${escapeHtml(question.topic)}</span><span class="tag">${escapeHtml(titleCase(question.type))}</span><span class="tag">${escapeHtml(titleCase(question.difficulty))}</span></div>
            <p class="question-prompt">${escapeHtml(question.prompt)}</p>
            ${codeBlock(question.code)}
            ${answerInput}
            <div class="button-row">${action}</div>
            <div id="feedback"></div>
          </article>
        </section>`;
      this.bind(question, isSelf);
    }

    bind(question, isSelf) {
      const selected = () => this.root.querySelector('input[name="answer"]:checked')?.value || this.root.querySelector('#text-answer')?.value.trim() || '';
      const record = (correct, answer) => {
        this.results.push({ question, correct, answer });
        ProgressStore.recordAnswer(question, correct, this.source);
      };
      const next = () => {
        this.index += 1;
        if (this.index >= this.questions.length) this.finish();
        else this.render();
      };
      const feedback = this.root.querySelector('#feedback');

      if (isSelf) {
        const reveal = this.root.querySelector('#reveal-answer');
        if (reveal) reveal.addEventListener('click', () => {
          feedback.innerHTML = `<div class="feedback"><strong>Model answer</strong>${codeBlock(question.answer)}<p>${escapeHtml(question.explanation)}</p><div class="button-row"><button id="self-correct" class="success">I got it</button><button id="self-wrong" class="secondary">I need review</button></div></div>`;
          feedback.querySelector('#self-correct').addEventListener('click', () => { record(true, selected()); next(); });
          feedback.querySelector('#self-wrong').addEventListener('click', () => { record(false, selected()); next(); });
        });
        this.root.querySelector('#self-correct')?.addEventListener('click', () => { record(true, selected()); next(); });
        this.root.querySelector('#self-wrong')?.addEventListener('click', () => { record(false, selected()); next(); });
        return;
      }

      this.root.querySelector('#check-answer').addEventListener('click', () => {
        const answer = selected();
        if (!answer) {
          feedback.innerHTML = '<div class="notice warning">Choose or write an answer before continuing.</div>';
          return;
        }
        const normalize = value => String(value).trim().replaceAll(/\s+/g, ' ').toLowerCase();
        const acceptedAnswers = [question.answer, ...(question.shortAnswerAliases || [])].map(normalize);
        const correct = acceptedAnswers.includes(normalize(answer));
        record(correct, answer);
        if (this.exam) { next(); return; }
        feedback.innerHTML = `<div class="feedback ${correct ? 'correct' : 'incorrect'}"><strong>${correct ? 'Correct.' : 'Not quite.'}</strong> ${escapeHtml(question.explanation)}${!correct ? `<p><strong>Correct answer:</strong> ${escapeHtml(question.answer)}</p>` : ''}<div class="button-row"><button id="next-question">${this.index + 1 === this.questions.length ? 'See results' : 'Next question'}</button></div></div>`;
        this.root.querySelector('#check-answer').disabled = true;
        this.root.querySelectorAll('input, textarea').forEach(input => input.disabled = true);
        feedback.querySelector('#next-question').addEventListener('click', next);
      });
    }

    finish() {
      const correct = this.results.filter(result => result.correct).length;
      const score = Math.round((correct / this.questions.length) * 100);
      const missed = this.results.filter(result => !result.correct);
      this.root.innerHTML = `
        <section class="question-shell">
          <div class="card">
            <p class="eyebrow">${this.exam ? 'Exam complete' : 'Practice complete'}</p>
            <h1>${escapeHtml(this.label)}</h1>
            <p class="result-score">${score}%</p>
            <p>${correct} of ${this.questions.length} answer${this.questions.length === 1 ? '' : 's'} marked correct.</p>
            ${missed.length ? `<div class="notice warning"><strong>Review next:</strong> ${[...new Set(missed.map(item => item.question.topic))].join(', ')}.</div>` : '<div class="notice success">No missed questions in this set. Try a harder mix or exam mode.</div>'}
            <div class="button-row"><a class="button" href="#practice">New practice set</a>${this.exam ? '<a class="button secondary" href="#exam">Retake exam mode</a>' : ''}</div>
          </div>
          ${missed.length ? `<section class="stack" style="margin-top:1rem"><h2>Answer review</h2>${missed.map(({question}) => `<article class="card"><span class="tag">${escapeHtml(question.topic)}</span><p class="question-prompt">${escapeHtml(question.prompt)}</p>${codeBlock(question.code)}<p><strong>Answer:</strong></p>${codeBlock(question.answer)}<p class="muted">${escapeHtml(question.explanation)}</p></article>`).join('')}</section>` : ''}
        </section>`;
      if (this.onComplete) this.onComplete({ score, correct, total: this.questions.length, missed });
    }
  }

  window.QuizEngine = { QuizSession, escapeHtml, codeBlock, prepareQuestionForSession, prepareSessionQuestions };
})();
