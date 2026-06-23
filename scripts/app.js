(function () {
  const { topics, questions, vocabulary, examPools, studyPaths } = window.REVIEWER_DATA;
  const main = document.querySelector('#main');
  const { escapeHtml, codeBlock } = QuizEngine;
  let flashcardState = { filter: 'all', index: 0, flipped: false };

  const route = () => (location.hash.replace(/^#/, '') || 'dashboard').split('/');
  const go = value => { location.hash = value; };
  const topicById = id => topics.find(topic => topic.id === id);
  const topicByName = name => topics.find(topic => topic.name === name);
  const percent = (value, total) => total ? Math.round((value / total) * 100) : 0;
  const titleCase = value => String(value).replaceAll('-', ' ').replace(/\b\w/g, letter => letter.toUpperCase());
  const themeButton = document.querySelector('#theme-toggle');
  const themeStorageKey = 'cs202-reviewer-theme';

  function applyTheme(theme) {
    const safeTheme = theme === 'night' ? 'night' : 'day';
    document.documentElement.dataset.theme = safeTheme;
    localStorage.setItem(themeStorageKey, safeTheme);
    if (!themeButton) return;
    const night = safeTheme === 'night';
    themeButton.setAttribute('aria-pressed', String(night));
    themeButton.setAttribute('aria-label', night ? 'Switch to day mode' : 'Switch to night mode');
    const icon = themeButton.querySelector('.theme-toggle-icon');
    const text = themeButton.querySelector('.theme-toggle-text');
    if (icon) icon.textContent = night ? '🌙' : '☀️';
    if (text) text.textContent = night ? 'Night' : 'Day';
  }

  function setupThemeToggle() {
    const currentTheme = document.documentElement.dataset.theme === 'night' ? 'night' : 'day';
    applyTheme(currentTheme);
    if (!themeButton) return;
    themeButton.addEventListener('click', () => {
      const nextTheme = document.documentElement.dataset.theme === 'night' ? 'day' : 'night';
      applyTheme(nextTheme);
    });
  }



  const thoughtStorageKey = 'cs202-reviewer-hero-thought-index';
  const javaThoughts = [
    {
      icon: '🧠',
      label: 'OOP Tip',
      headline: 'Objects should do something, not just hold things.',
      body: 'Fields describe state. Methods describe behavior. A class starts to make sense when those two belong together.',
      exam: 'Exam connection: identify attributes vs behaviors before writing a class.',
      topic: 'Classes and Objects'
    },
    {
      icon: '⚠️',
      label: 'Common Trap',
      headline: '=, ==, and equals() are three different conversations.',
      body: '= assigns. == compares primitive values or object references. equals() checks logical equality when the class defines it properly.',
      exam: 'Exam connection: String and object comparison questions love this trap.',
      topic: 'equals(), ==, =, and toString()'
    },
    {
      icon: '😂',
      label: 'Java Joke',
      headline: 'I asked my object to explain itself.',
      body: 'It said, “Call toString() first.”',
      exam: 'Exam connection: toString() returns a readable String version of an object’s state.',
      topic: 'equals(), ==, =, and toString()'
    },
    {
      icon: '💡',
      label: 'Java Fact',
      headline: 'A constructor is not a method wearing a disguise.',
      body: 'It has the same name as the class and no return type, not even void.',
      exam: 'Exam connection: constructor headers are easy points if you remember the no-return-type rule.',
      topic: 'Constructors'
    },
    {
      icon: '🎯',
      label: 'Exam Reminder',
      headline: 'Trace slowly. Java does exactly what the code says, not what the variable name suggests.',
      body: 'When a question asks for output, track each assignment and loop update before choosing an answer.',
      exam: 'Exam connection: trace questions reward patience more than guessing.',
      topic: 'Conditions, Loops, and Operators'
    },
    {
      icon: '🧬',
      label: 'OOP Tip',
      headline: 'Inheritance should pass the “is-a” test.',
      body: 'A Dog is an Animal makes sense. A Dog is a Collar does not. extends should model a real subtype relationship.',
      exam: 'Exam connection: use the is-a rule before choosing inheritance.',
      topic: 'Inheritance and Polymorphism'
    },
    {
      icon: '🔌',
      label: 'Interface Tip',
      headline: 'An interface is a promise: “I know how to do this behavior.”',
      body: 'When a class implements an interface, it agrees to provide the required methods.',
      exam: 'Exam connection: KeyListener questions usually test required method headers.',
      topic: 'Interfaces and KeyListener'
    },
    {
      icon: '🧯',
      label: 'Bug Radar',
      headline: 'NullPointerException is Java saying, “There is no object there.”',
      body: 'You tried to call a method or access a field through a reference that points to null.',
      exam: 'Exam connection: look for variables declared but never assigned an object.',
      topic: 'Static, Final, Memory, and Garbage Collection'
    },
    {
      icon: '📦',
      label: 'Array Tip',
      headline: 'Arrays start at 0 because Java likes humbling people early.',
      body: 'The first item is index 0, and the last item is length - 1.',
      exam: 'Exam connection: off-by-one loop errors are classic final material.',
      topic: 'Arrays and ArrayLists'
    },
    {
      icon: '🪞',
      label: 'Record Note',
      headline: 'A record is for simple data that already knows how to describe itself.',
      body: 'Records automatically provide useful basics like accessors, equals(), hashCode(), and toString().',
      exam: 'Exam connection: know when a record is simpler than a full class.',
      topic: 'Records vs Classes'
    },
    {
      icon: '🛠️',
      label: 'Debug Tip',
      headline: 'The compiler is not being mean. It is being specific.',
      body: 'Read the first error carefully. Later errors are sometimes just consequences of the first one.',
      exam: 'Exam connection: fix-code questions often have one real cause and several symptoms.',
      topic: 'Java Basics'
    },
    {
      icon: '🔁',
      label: 'Loop Reminder',
      headline: 'A loop needs three things: start, stop, and change.',
      body: 'Initialize the variable, write the condition, then update the variable so the loop can eventually finish.',
      exam: 'Exam connection: infinite loops usually forget the change part.',
      topic: 'Conditions, Loops, and Operators'
    }
  ];

  function defaultThoughtIndex() {
    const dayKey = new Date().toISOString().slice(0, 10).replaceAll('-', '');
    return Number(dayKey) % javaThoughts.length;
  }

  function getThoughtIndex() {
    const saved = Number(localStorage.getItem(thoughtStorageKey));
    if (Number.isInteger(saved) && saved >= 0 && saved < javaThoughts.length) return saved;
    const daily = defaultThoughtIndex();
    localStorage.setItem(thoughtStorageKey, String(daily));
    return daily;
  }

  function renderHeroThought() {
    const thought = javaThoughts[getThoughtIndex()];
    const relatedTopic = topicByName(thought.topic) || topics[0];
    return `<section class="hero gym-hero thought-hero">
      <div class="thought-board">
        <div class="thought-heading">
          <div>
            <h1>CS202 Reviewer Gym</h1>
            <p class="thought-kicker">OOP + Java facts, traps, jokes, and reminders that rotate while you review.</p>
          </div>
          <span class="thought-count">${getThoughtIndex() + 1}/${javaThoughts.length}</span>
        </div>
        <article class="thought-card" aria-live="polite">
          <div class="thought-type"><span class="thought-icon">${escapeHtml(thought.icon)}</span><span>${escapeHtml(thought.label)}</span></div>
          <h2>${escapeHtml(thought.headline)}</h2>
          <p class="thought-body">${escapeHtml(thought.body)}</p>
          <p class="thought-exam">${escapeHtml(thought.exam)}</p>
        </article>
        <div class="hero-actions thought-actions">
          <button id="new-thought" class="primary-cta" type="button">New thought</button>
          <a class="button secondary" href="#topic/${relatedTopic.id}">Review related topic</a>
          <a class="button secondary" href="#practice">Start practice</a>
        </div>
      </div>
    </section>`;
  }

  function setupHeroThoughtControls() {
    const button = document.querySelector('#new-thought');
    if (!button) return;
    button.addEventListener('click', () => {
      const next = (getThoughtIndex() + 1) % javaThoughts.length;
      localStorage.setItem(thoughtStorageKey, String(next));
      renderDashboard();
    });
  }

  function topicStats(topic, state = ProgressStore.get()) {
    const topicQuestions = questions.filter(question => question.topic === topic.name);
    const answers = topicQuestions.map(question => state.answers[question.id]).filter(Boolean);
    const attempts = answers.reduce((sum, answer) => sum + answer.attempts, 0);
    const correct = answers.reduce((sum, answer) => sum + answer.correct, 0);
    return { attempts, correct, accuracy: attempts ? percent(correct, attempts) : 0, reviewed: Boolean(state.completedTopics[topic.id]), weak: state.weakTopics[topic.name] };
  }

  function setNav(active) {
    document.querySelectorAll('.main-nav a').forEach(link => link.classList.toggle('active', link.dataset.route === active));
  }

  function pageHead(eyebrow, title, lede) {
    return `<header class="page-head"><p class="eyebrow">${escapeHtml(eyebrow)}</p><h1>${escapeHtml(title)}</h1><p class="lede">${escapeHtml(lede)}</p></header>`;
  }

  function topicLink(topic, label = 'Study topic', className = 'button') {
    return `<a class="${className}" href="#topic/${topic.id}">${escapeHtml(label)}</a>`;
  }


  function activityIcon(label = '') {
    const lower = label.toLowerCase();
    if (lower.includes('flashcard')) return '🃏';
    if (lower.includes('exam')) return '🧪';
    if (lower.includes('practice')) return '⚡';
    if (lower.includes('review')) return '🔁';
    if (lower.includes('topic')) return '📚';
    return '✦';
  }

  function pathMeta(index) {
    return [
      { icon: '01', badge: 'Warm-up', action: 'Start reset', tone: 'blue' },
      { icon: '02', badge: 'Core OOP', action: 'Build base', tone: 'green' },
      { icon: '03', badge: 'Final run', action: 'Sprint now', tone: 'purple' }
    ][index] || { icon: String(index + 1).padStart(2, '0'), badge: 'Study route', action: 'Start path', tone: 'blue' };
  }

  function renderQuickStudyPath(path, index, state) {
    const meta = pathMeta(index);
    const pathTopics = path.topics.map(topicById).filter(Boolean);
    const done = pathTopics.filter(topic => state.completedTopics[topic.id]).length;
    const progress = percent(done, pathTopics.length);
    const firstTopic = pathTopics[0] || topics[0];
    return `<div class="study-path-card path-${meta.tone}">
      <div class="path-orb" aria-hidden="true">${escapeHtml(meta.icon)}</div>
      <div class="path-body">
        <div class="path-title-line"><h3>${escapeHtml(path.name)}</h3><span class="path-badge">${escapeHtml(meta.badge)}</span></div>
        <p class="muted">${escapeHtml(path.next)}</p>
        <div class="path-progress"><span style="width:${progress}%"></span></div>
        <div class="path-topic-row">${pathTopics.map(topic => topicLink(topic, topic.name, 'button quiet path-topic')).join('')}</div>
      </div>
      <a class="path-launch" href="#topic/${firstTopic.id}">${escapeHtml(meta.action)} →</a>
    </div>`;
  }

  function renderRecentActivity(history) {
    if (!history.length) {
      return `<div class="activity-empty">
        <div class="activity-empty-icon">✦</div>
        <h3>No study log yet</h3>
        <p class="muted">Start one practice sprint or flip a flashcard. Your wins and weak spots will appear here like a training feed.</p>
        <a class="button secondary" href="#practice">Create first activity</a>
      </div>`;
    }
    return `<div class="timeline-list">${history.map((item, index) => `<div class="timeline-item">
      <span class="timeline-rail" aria-hidden="true"></span>
      <span class="timeline-icon" aria-hidden="true">${activityIcon(item.label)}</span>
      <span class="timeline-copy"><strong>${escapeHtml(item.label)}</strong><small>${escapeHtml(item.details)}</small></span>
      <time>${escapeHtml(item.date)}</time>
    </div>`).join('')}</div><div class="activity-footer"><a class="button secondary" href="#progress">View full log</a><span class="muted">Last ${Math.min(history.length, 5)} actions</span></div>`;
  }

  function renderDashboard() {
    setNav('dashboard');
    const summary = ProgressStore.summary(topics);
    const recommendation = ReviewScheduler.recommendation();
    const history = summary.state.history.slice(0, 5);
    main.innerHTML = `
      ${renderHeroThought()}
      <section class="stat-grid" aria-label="Study summary">
        <article class="stat stat-card"><span class="stat-icon">🎯</span><span class="number">${summary.readiness}%</span><span class="label">Final exam readiness</span><div class="progress-track"><div class="progress-bar ${summary.readiness >= 70 ? 'good' : 'warn'}" style="width:${summary.readiness}%"></div></div></article>
        <article class="stat stat-card"><span class="stat-icon">🧭</span><span class="number">${summary.completed}/${topics.length}</span><span class="label">Topics reviewed</span></article>
        <article class="stat stat-card"><span class="stat-icon">⚡</span><span class="number">${summary.accuracy}%</span><span class="label">Practice accuracy</span></article>
        <article class="stat stat-card"><span class="stat-icon">🔥</span><span class="number">${summary.state.streak}</span><span class="label">Day streak</span></article>
      </section>
      <section class="split">
        <article class="card">
          <p class="eyebrow">Recommended next</p>
          <h2>${escapeHtml(recommendation.topic.name)}</h2>
          <p>${escapeHtml(recommendation.message)}</p>
          <div class="button-row">${topicLink(recommendation.topic, 'Open topic')}<a class="button secondary" href="#practice">Practice now</a></div>
        </article>
        <article class="card">
          <p class="eyebrow">Weak-topic review</p>
          ${summary.weakCount ? `<h2>${summary.weakCount} topic${summary.weakCount === 1 ? '' : 's'} need attention</h2><ul class="details-list">${ReviewScheduler.weakTopicList().slice(0, 3).map(item => `<li><strong>${escapeHtml(item.name)}</strong> — ${item.missedCount} missed. ${escapeHtml(item.recommendedAction)}</li>`).join('')}</ul>` : '<h2>No weak topics yet</h2><p>Practice answers you miss will appear here with a focused review plan.</p>'}
          <div class="button-row"><a class="button secondary" href="#progress">View progress</a></div>
        </article>
      </section>
      <section class="two-col dashboard-bottom" style="margin-top:1rem">
        <article class="card study-paths-panel">
          <div class="panel-heading"><div><p class="eyebrow">Quick study paths</p><h2>Pick a training route</h2></div><span class="panel-chip">${studyPaths.length} paths</span></div>
          <div class="study-path-stack">${studyPaths.map((path, index) => renderQuickStudyPath(path, index, summary.state)).join('')}</div>
        </article>
        <article class="card activity-panel">
          <div class="panel-heading"><div><p class="eyebrow">Recent activity</p><h2>Training feed</h2></div><span class="panel-chip live">Live log</span></div>
          ${renderRecentActivity(history)}
        </article>
      </section>`;
    setupHeroThoughtControls();
  }

  function renderTopics() {
    setNav('topics');
    const state = ProgressStore.get();
    main.innerHTML = `${pageHead('Topic map', 'Study every major CS202 topic', 'Each topic includes a plain explanation, a short example, a trace, a bug fix, a coding task, vocabulary, and quiz questions.')}
      <section class="topic-grid">${topics.map(topic => {
        const stats = topicStats(topic, state);
        const status = stats.weak ? `<span class="pill weak">Needs review</span>` : stats.accuracy >= 75 && stats.attempts ? `<span class="pill strong">Strong</span>` : `<span class="pill">${escapeHtml(topic.scope)}</span>`;
        return `<article class="card topic-card level-card"><div class="topic-topline"><div><span class="level-number">${topic.number}</span><p class="eyebrow">${escapeHtml(topic.scope)}</p><h2>${escapeHtml(topic.name)}</h2></div>${status}</div><p>${escapeHtml(topic.summary)}</p><div><small class="muted">${stats.reviewed ? 'Reviewed' : 'Not reviewed'} · ${stats.attempts ? `${stats.accuracy}% question accuracy` : 'No question attempts'}</small><div class="progress-track"><div class="progress-bar ${stats.weak ? 'warn' : ''}" style="width:${stats.reviewed ? Math.max(35, stats.accuracy) : stats.accuracy}%"></div></div></div><div class="button-row">${topicLink(topic, 'Study')}<a class="button secondary" href="#practice/${topic.id}">Practice sprint</a></div></article>`;
      }).join('')}</section>`;
  }

  function renderTopicDetail(id) {
    const topic = topicById(id);
    if (!topic) { go('topics'); return; }
    setNav('topics');
    const stats = topicStats(topic);
    main.innerHTML = `
      <section class="page-head"><p class="eyebrow">${topic.number} · ${escapeHtml(topic.scope)}</p><div class="topic-topline"><div><h1>${escapeHtml(topic.name)}</h1><p class="lede">${escapeHtml(topic.summary)}</p></div><a class="button secondary" href="#topics">All topics</a></div></section>
      <section class="split">
        <article class="card"><h2>What it means</h2><p>${escapeHtml(topic.explain)}</p><h3>Why it matters on the exam</h3><p>${escapeHtml(topic.importance)}</p></article>
        <article class="card"><h2>Common traps</h2><ul class="details-list">${topic.traps.map(trap => `<li>${escapeHtml(trap)}</li>`).join('')}</ul><div class="button-row"><button id="mark-reviewed" class="${stats.reviewed ? 'secondary' : 'success'}">${stats.reviewed ? 'Reviewed ✓' : 'Mark as reviewed'}</button><a class="button quiet" href="${escapeHtml(topic.javaFile)}">Open related Java file</a></div></article>
      </section>
      <section class="card" style="margin-top:1rem"><p class="eyebrow">Coverage guide</p><h2>Know these pieces</h2><ul class="details-list">${topic.coverage.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul></section>
      <section class="card" style="margin-top:1rem"><p class="eyebrow">See</p><h2>Short Java example</h2>${codeBlock(topic.code)}</section>
      <section style="margin-top:1rem"><h2>Active practice</h2><div class="activity-grid">
        <article class="card activity"><p class="eyebrow">Trace</p><h3>${escapeHtml(topic.trace.prompt)}</h3>${codeBlock(topic.trace.code)}<details><summary>Check your reasoning</summary><p><strong>Answer:</strong> ${escapeHtml(topic.trace.answer)}</p><p>${escapeHtml(topic.trace.explanation)}</p></details></article>
        <article class="card activity fix"><p class="eyebrow">Fix</p><h3>${escapeHtml(topic.debug.prompt)}</h3>${codeBlock(topic.debug.code)}<details><summary>Reveal corrected code</summary>${codeBlock(topic.debug.answer)}<p>${escapeHtml(topic.debug.explanation)}</p></details></article>
        <article class="card activity build"><p class="eyebrow">Build</p><h3>Write it yourself</h3><p>${escapeHtml(topic.build.prompt)}</p><details><summary>Compare with a model answer</summary>${codeBlock(topic.build.solution)}</details></article>
        <article class="card activity exam"><p class="eyebrow">Retain</p><h3>Vocabulary check</h3><ul class="details-list">${topic.vocabulary.map(item => `<li><strong>${escapeHtml(item.term)}</strong> — ${escapeHtml(item.definition)}</li>`).join('')}</ul><a class="button secondary" href="#practice/${topic.id}">Quiz this topic</a></article>
      </div></section>
      <section class="card" style="margin-top:1rem"><p class="eyebrow">Final-exam habit</p><h2>Before you move on</h2><div class="checklist"><label><input type="checkbox"> I can explain the idea without reading the definition.</label><label><input type="checkbox"> I traced the example line by line.</label><label><input type="checkbox"> I can explain why the broken code fails.</label><label><input type="checkbox"> I wrote or planned the coding task.</label></div><div class="button-row"><a class="button" href="#practice/${topic.id}">Start this topic’s questions</a></div></section>`;
    document.querySelector('#mark-reviewed').addEventListener('click', () => { ProgressStore.markTopic(topic.id); renderTopicDetail(topic.id); });
  }

  function practiceOptions(selectedTopic = 'all') {
    return `<option value="all">All topics</option>${topics.map(topic => `<option value="${topic.id}" ${topic.id === selectedTopic ? 'selected' : ''}>${escapeHtml(topic.name)}</option>`).join('')}`;
  }

  function renderPractice(preselected = 'all') {
    setNav('practice');
    main.innerHTML = `${pageHead('Practice lab', 'Build a focused question set', 'Choose a mission, press start, and answer without letting the app become another boring notes page.')}
      <section class="card practice-builder interactive-card">
        <div class="practice-panel-title"><div><p class="eyebrow">Mission builder</p><h2>Set your study sprint</h2></div><span class="pill strong">Weak answers auto-review</span></div>
        <div class="form-grid">
          <label>Topic<select id="practice-topic">${practiceOptions(preselected)}</select></label>
          <label>Practice type<select id="practice-type"><option value="all">Mixed quiz</option><option value="trace">Trace the code</option><option value="debug">Fix the bug</option><option value="code-writing">Write the code</option><option value="vocabulary">Vocabulary</option><option value="matching">Vocabulary match</option><option value="uml">Read UML</option><option value="short-answer">Short answer</option><option value="multiple-choice">Concept check</option></select></label>
          <label>Difficulty<select id="practice-difficulty"><option value="all">All levels</option><option value="easy">Easy</option><option value="medium">Medium</option><option value="exam">Exam</option></select></label>
          <label>Questions<select id="practice-count"><option value="3">3</option><option value="5" selected>5</option><option value="10">10</option></select></label>
        </div>
        <div class="mission-preview" id="practice-preview">Mixed Java sprint · 5 questions · answers shuffle every run</div>
        <div class="button-row"><button id="start-practice" class="primary-cta">Start practice sprint</button><a class="button secondary" href="#flashcards">Review flashcards</a></div>
      </section>
      <section class="three-col mode-grid" style="margin-top:1rem"><article class="card mode-card"><span class="mode-icon">🔎</span><h3>Trace</h3><p class="muted">Predict output, variable changes, and errors before revealing the answer.</p></article><article class="card mode-card"><span class="mode-icon">🛠️</span><h3>Fix</h3><p class="muted">Explain the cause, correct the code, then compare with the model answer.</p></article><article class="card mode-card"><span class="mode-icon">⌨️</span><h3>Build</h3><p class="muted">Write a small method or class. Self-score honestly and redo weak areas.</p></article></section>`;
    const updatePracticePreview = () => {
      const selectedTopic = document.querySelector('#practice-topic').value;
      const type = document.querySelector('#practice-type').value;
      const count = document.querySelector('#practice-count').value;
      const topicLabel = selectedTopic === 'all' ? 'Mixed Java' : topicById(selectedTopic).name;
      const typeLabel = type === 'all' ? 'mixed' : titleCase(type).toLowerCase();
      document.querySelector('#practice-preview').textContent = `${topicLabel} ${typeLabel} sprint · ${count} questions · answers shuffle every run`;
    };
    ['#practice-topic', '#practice-type', '#practice-difficulty', '#practice-count'].forEach(selector => document.querySelector(selector).addEventListener('change', updatePracticePreview));
    updatePracticePreview();
    document.querySelector('#start-practice').addEventListener('click', () => {
      const selectedTopic = document.querySelector('#practice-topic').value;
      const type = document.querySelector('#practice-type').value;
      const difficulty = document.querySelector('#practice-difficulty').value;
      const count = Number(document.querySelector('#practice-count').value);
      let set = questions.filter(question => (selectedTopic === 'all' || topicById(selectedTopic).name === question.topic) && (type === 'all' || question.type === type) && (difficulty === 'all' || question.difficulty === difficulty));
      set = shuffle(set).slice(0, count);
      const session = new QuizEngine.QuizSession({ root: main, questions: set, source: 'practice', label: selectedTopic === 'all' ? 'Mixed practice' : `${topicById(selectedTopic).name} practice` });
      session.start();
    });
  }

  function currentCards() {
    const filtered = flashcardState.filter === 'all' ? vocabulary : vocabulary.filter(item => item.examTags.includes(flashcardState.filter));
    if (flashcardState.index >= filtered.length) flashcardState.index = 0;
    return filtered;
  }

  function renderFlashcards() {
    setNav('flashcards');
    const cards = currentCards();
    const card = cards[flashcardState.index];
    main.innerHTML = `${pageHead('Vocabulary bank', 'Recall the word, then connect it to code', 'Flip the card only after you try to explain the term. Mark it known or keep it in the review loop.')}
      <section class="card flashcard-toolbar"><div class="form-grid" style="grid-template-columns:1fr auto"><label>Exam filter<select id="flashcard-filter"><option value="all" ${flashcardState.filter === 'all' ? 'selected' : ''}>All vocabulary</option><option value="midterm1" ${flashcardState.filter === 'midterm1' ? 'selected' : ''}>Midterm 1</option><option value="midterm2" ${flashcardState.filter === 'midterm2' ? 'selected' : ''}>Midterm 2</option><option value="final" ${flashcardState.filter === 'final' ? 'selected' : ''}>Final</option></select></label><p class="muted"><strong>Card ${flashcardState.index + 1}</strong> of ${cards.length}</p></div><div class="progress-track"><div class="progress-bar" style="width:${Math.round(((flashcardState.index + 1) / cards.length) * 100)}%"></div></div></section>
      <section class="flashcard ${flashcardState.flipped ? 'flipped' : ''}" id="flashcard" role="button" tabindex="0" aria-label="Flip flashcard" style="margin-top:1rem"><div class="flashcard-inner"><article class="flashcard-face"><p class="eyebrow">${escapeHtml(card.topic)}</p><div class="flashcard-word">${escapeHtml(card.term)}</div><p class="flip-hint">Click, tap, or press Enter to flip</p></article><article class="flashcard-face flashcard-back"><p class="eyebrow">Definition</p><p>${escapeHtml(card.definition)}</p><p class="flip-hint">Click again to hide the answer</p></article></div></section>
      <div class="button-row flashcard-actions"><button id="known" class="success">I know this</button><button id="learning" class="secondary">Still learning</button><button id="next-card" class="quiet">Next card →</button></div>
      <section class="card code-connection" style="margin-top:1rem"><p class="eyebrow">Code connection</p><h2>Where this shows up</h2>${codeBlock(card.example)}</section>`;
    const flip = () => { flashcardState.flipped = !flashcardState.flipped; renderFlashcards(); };
    document.querySelector('#flashcard').addEventListener('click', flip);
    document.querySelector('#flashcard').addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); flip(); } });
    document.querySelector('#flashcard-filter').addEventListener('change', event => { flashcardState = { filter: event.target.value, index: 0, flipped: false }; renderFlashcards(); });
    const move = known => { ProgressStore.recordFlashcard(card.term, known); flashcardState.index = (flashcardState.index + 1) % cards.length; flashcardState.flipped = false; renderFlashcards(); };
    document.querySelector('#known').addEventListener('click', () => move(true));
    document.querySelector('#learning').addEventListener('click', () => move(false));
    document.querySelector('#next-card').addEventListener('click', () => move(false));
  }

  function renderExam() {
    setNav('exam');
    main.innerHTML = `${pageHead('Exam mode', 'Practice without hints', 'Questions are selected randomly. Results show missed topics and add them to weak-topic review. Self-assessment prompts do not reveal model answers until the final report.')}
      <section class="card"><div class="form-grid" style="grid-template-columns:2fr 1fr"><label>Exam type<select id="exam-pool">${Object.entries(examPools).map(([id, pool]) => `<option value="${id}">${escapeHtml(pool.label)}</option>`).join('')}</select></label><label>Questions<select id="exam-count"><option value="5">5</option><option value="10" selected>10</option><option value="20">20</option></select></label></div><div class="button-row"><button id="start-exam">Start exam</button></div></section>
      <section class="two-col" style="margin-top:1rem"><article class="card"><h2>Exam rules</h2><ul class="details-list"><li>No answer explanations while the exam is running.</li><li>Trace, multiple-choice, debugging, vocabulary, and code-writing items may appear.</li><li>At the end, review model answers and missed topics.</li></ul></article><article class="card"><h2>Readiness score</h2><p>The dashboard score combines accuracy, completed topics, exam results, and weak-topic count. It is a study signal, not a grade prediction.</p><a class="button secondary" href="#progress">View progress</a></article></section>`;
    document.querySelector('#start-exam').addEventListener('click', () => ExamMode.start({ root: main, poolKey: document.querySelector('#exam-pool').value, count: document.querySelector('#exam-count').value }));
  }

  function strongestTopics(state) {
    return topics.map(topic => ({ topic, ...topicStats(topic, state) })).filter(item => item.attempts).sort((a, b) => b.accuracy - a.accuracy).slice(0, 5);
  }

  function renderProgress() {
    setNav('progress');
    const summary = ProgressStore.summary(topics);
    const weak = ReviewScheduler.weakTopicList();
    const strong = strongestTopics(summary.state);
    main.innerHTML = `${pageHead('Progress', 'Use your results to choose the next study task', 'Progress is stored in this browser with localStorage. Reset only if you want a clean start.')}
      <section class="stat-grid"><article class="stat"><span class="number">${summary.readiness}%</span><span class="label">Readiness score</span></article><article class="stat"><span class="number">${summary.correct}/${summary.attempts}</span><span class="label">Correct practice answers</span></article><article class="stat"><span class="number">${summary.examAverage}%</span><span class="label">Average exam score</span></article><article class="stat"><span class="number">${summary.weakCount}</span><span class="label">Weak topics</span></article></section>
      <section class="two-col"><article class="card"><p class="eyebrow">Weak topics</p>${weak.length ? `<ul class="history-list">${weak.map(item => `<li><span><strong>${escapeHtml(item.name)}</strong><br><small class="muted">${escapeHtml(item.recommendedAction)}</small></span><span class="pill weak">${item.missedCount} missed</span></li>`).join('')}</ul>` : '<div class="empty">No weak topics recorded. Start a practice set to establish a baseline.</div>'}</article><article class="card"><p class="eyebrow">Strongest topics</p>${strong.length ? `<ul class="history-list">${strong.map(item => `<li><span>${escapeHtml(item.topic.name)}</span><span class="pill strong">${item.accuracy}%</span></li>`).join('')}</ul>` : '<div class="empty">Answer questions to see your strongest topics.</div>'}</article></section>
      <section class="card" style="margin-top:1rem"><p class="eyebrow">Topic completion</p><div class="stack">${topics.map(topic => { const item = topicStats(topic, summary.state); return `<div><div class="topic-topline"><strong>${escapeHtml(topic.name)}</strong><small class="muted">${item.reviewed ? 'Reviewed' : 'Not reviewed'} · ${item.attempts ? `${item.accuracy}% accuracy` : 'No attempts'}</small></div><div class="progress-track"><div class="progress-bar ${item.weak ? 'warn' : ''}" style="width:${item.reviewed ? Math.max(15, item.accuracy) : item.accuracy}%"></div></div></div>`; }).join('')}</div></section>
      <section class="two-col" style="margin-top:1rem"><article class="card"><p class="eyebrow">Study history</p>${summary.state.history.length ? `<ul class="history-list">${summary.state.history.map(item => `<li><span>${escapeHtml(item.label)}<br><small class="muted">${escapeHtml(item.details)}</small></span><small class="muted">${escapeHtml(item.date)}</small></li>`).join('')}</ul>` : '<div class="empty">No activity recorded yet.</div>'}</article><article class="card"><p class="eyebrow">Data controls</p><h2>Reset progress</h2><p>This clears local progress, weak topics, scores, flashcard status, and history from this browser.</p><button id="reset-progress" class="danger">Reset local progress</button></article></section>`;
    document.querySelector('#reset-progress').addEventListener('click', () => {
      if (confirm('Reset all CS202 Reviewer Gym progress stored in this browser?')) { ProgressStore.reset(); renderProgress(); }
    });
  }

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index--) { const next = Math.floor(Math.random() * (index + 1)); [copy[index], copy[next]] = [copy[next], copy[index]]; }
    return copy;
  }

  function render() {
    const [section, id] = route();
    if (section === 'topic') renderTopicDetail(id);
    else if (section === 'topics') renderTopics();
    else if (section === 'practice') renderPractice(id || 'all');
    else if (section === 'flashcards') renderFlashcards();
    else if (section === 'exam') renderExam();
    else if (section === 'progress') renderProgress();
    else renderDashboard();
    document.title = section === 'dashboard' ? 'CS202 Reviewer Gym' : `${titleCase(section)} · CS202 Reviewer Gym`;
  }

  setupThemeToggle();
  window.addEventListener('hashchange', render);
  Promise.resolve(window.REVIEWER_READY).catch(() => {}).finally(render);
})();
