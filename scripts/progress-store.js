(function () {
  const KEY = 'cs202-reviewer-gym-progress-v1';
  const today = () => new Date().toISOString().slice(0, 10);
  const defaultState = () => ({
    completedTopics: {},
    answers: {},
    weakTopics: {},
    examResults: [],
    history: [],
    flashcards: {},
    lastStudyDate: null,
    streak: 0
  });

  function get() {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY));
      return { ...defaultState(), ...(saved || {}) };
    } catch {
      return defaultState();
    }
  }

  function save(state) {
    localStorage.setItem(KEY, JSON.stringify(state));
    return state;
  }

  function studyNow(state = get()) {
    const now = today();
    if (state.lastStudyDate !== now) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      state.streak = state.lastStudyDate === yesterday ? state.streak + 1 : 1;
      state.lastStudyDate = now;
    }
    return state;
  }

  function addHistory(state, label, details = '') {
    state.history.unshift({ date: new Date().toLocaleString(), label, details });
    state.history = state.history.slice(0, 20);
  }

  function markTopic(topicId) {
    const state = studyNow();
    state.completedTopics[topicId] = { reviewedAt: today() };
    addHistory(state, 'Reviewed a topic', topicId);
    return save(state);
  }

  function recordAnswer(question, correct, source = 'practice') {
    const state = studyNow();
    const current = state.answers[question.id] || { attempts: 0, correct: 0 };
    current.attempts += 1;
    if (correct) current.correct += 1;
    current.lastAt = today();
    state.answers[question.id] = current;

    const topic = question.topic;
    const weak = state.weakTopics[topic] || { missedCount: 0, lastMissed: null, recommendedAction: '' };
    if (!correct) {
      weak.missedCount += 1;
      weak.lastMissed = today();
      weak.recommendedAction = 'Do 3 trace questions and 2 bug-fixing questions.';
      state.weakTopics[topic] = weak;
    } else if (weak.missedCount > 0) {
      weak.missedCount = Math.max(0, weak.missedCount - 1);
      if (weak.missedCount === 0) delete state.weakTopics[topic];
      else state.weakTopics[topic] = weak;
    }
    addHistory(state, correct ? 'Correct answer' : 'Needs review', `${topic} · ${source}`);
    return save(state);
  }

  function recordExam(result) {
    const state = studyNow();
    state.examResults.unshift({ ...result, date: new Date().toLocaleString() });
    state.examResults = state.examResults.slice(0, 12);
    addHistory(state, `${result.label} completed`, `${result.score}%`);
    return save(state);
  }

  function recordFlashcard(term, known) {
    const state = studyNow();
    state.flashcards[term] = { known, lastReviewed: today() };
    addHistory(state, known ? 'Flashcard marked known' : 'Flashcard kept in review', term);
    return save(state);
  }

  function summary(topics) {
    const state = get();
    const allAnswers = Object.values(state.answers);
    const attempts = allAnswers.reduce((sum, item) => sum + item.attempts, 0);
    const correct = allAnswers.reduce((sum, item) => sum + item.correct, 0);
    const accuracy = attempts ? Math.round((correct / attempts) * 100) : 0;
    const completed = Object.keys(state.completedTopics).length;
    const exams = state.examResults;
    const examAverage = exams.length ? Math.round(exams.reduce((sum, item) => sum + item.score, 0) / exams.length) : 0;
    const weakCount = Object.keys(state.weakTopics).length;
    const completionRate = topics.length ? completed / topics.length : 0;
    const readiness = Math.max(0, Math.min(100, Math.round(
      (accuracy * .35) + (completionRate * 100 * .25) + (examAverage * .25) + (Math.max(0, 100 - weakCount * 12) * .15)
    )));
    return { state, completed, accuracy, attempts, correct, weakCount, examAverage, readiness };
  }

  function reset() {
    localStorage.removeItem(KEY);
    return defaultState();
  }

  window.ProgressStore = { get, save, markTopic, recordAnswer, recordExam, recordFlashcard, summary, reset };
})();
