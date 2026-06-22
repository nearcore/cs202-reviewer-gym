(function () {
  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index--) {
      const swap = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swap]] = [copy[swap], copy[index]];
    }
    return copy;
  }

  function select(poolKey, count) {
    const pool = window.REVIEWER_DATA.examPools[poolKey];
    let questions = window.REVIEWER_DATA.questions;
    if (pool.tags) questions = questions.filter(question => question.examTags.some(tag => pool.tags.includes(tag)));
    if (pool.types) questions = questions.filter(question => pool.types.includes(question.type));
    return shuffle(questions).slice(0, Math.min(count, questions.length));
  }

  function start({ root, poolKey, count }) {
    const pool = window.REVIEWER_DATA.examPools[poolKey];
    const questions = select(poolKey, Number(count));
    const session = new QuizEngine.QuizSession({
      root,
      questions,
      source: 'exam',
      exam: true,
      label: pool.label,
      onComplete: result => {
        ProgressStore.recordExam({ label: pool.label, score: result.score, total: result.total, missedTopics: [...new Set(result.missed.map(item => item.question.topic))] });
      }
    });
    session.start();
  }

  window.ExamMode = { select, start };
})();
