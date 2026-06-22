(function () {
  function getTopicByName(name) {
    return window.REVIEWER_DATA.topics.find(topic => topic.name === name);
  }

  function recommendation() {
    const { state } = ProgressStore.summary(window.REVIEWER_DATA.topics);
    const weak = Object.entries(state.weakTopics)
      .sort((a, b) => b[1].missedCount - a[1].missedCount)
      .map(([name, detail]) => ({ topic: getTopicByName(name), ...detail }));
    if (weak.length && weak[0].topic) {
      return {
        kind: 'weak', topic: weak[0].topic,
        message: `${weak[0].missedCount} missed answer${weak[0].missedCount === 1 ? '' : 's'}: do a trace, a bug fix, then retry.`
      };
    }
    const unfinished = window.REVIEWER_DATA.topics.find(topic => !state.completedTopics[topic.id]);
    if (unfinished) return { kind: 'next', topic: unfinished, message: 'Start with the explanation, then finish the trace and bug fix.' };
    return { kind: 'exam', topic: window.REVIEWER_DATA.topics.find(topic => topic.id === 'final-mixed'), message: 'All topics are reviewed. Take a Final Exam Mode set to test retention.' };
  }

  function weakTopicList() {
    const { state } = ProgressStore.summary(window.REVIEWER_DATA.topics);
    return Object.entries(state.weakTopics)
      .sort((a, b) => b[1].missedCount - a[1].missedCount)
      .map(([name, detail]) => ({ name, ...detail }));
  }

  window.ReviewScheduler = { recommendation, weakTopicList };
})();
