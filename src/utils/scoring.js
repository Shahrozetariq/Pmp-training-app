import { questions } from '../data/questions.js'

export function calculateDomainScores(sessions) {
  const domains = { people: { correct: 0, total: 0 }, process: { correct: 0, total: 0 }, business: { correct: 0, total: 0 } }
  sessions.forEach(session => {
    session.answers.forEach(({ questionId, selectedAnswer }) => {
      const q = questions.find(q => q.id === questionId)
      if (!q) return
      domains[q.domain].total++
      if (selectedAnswer === q.answer) domains[q.domain].correct++
    })
  })
  return Object.fromEntries(
    Object.entries(domains).map(([domain, { correct, total }]) => [
      domain,
      { correct, total, percentage: total > 0 ? Math.round((correct / total) * 100) : 0 },
    ])
  )
}

export function getWeakTopics(sessions) {
  const taskScores = {}
  sessions.forEach(session => {
    session.answers.forEach(({ questionId, selectedAnswer }) => {
      const q = questions.find(q => q.id === questionId)
      if (!q) return
      if (!taskScores[q.task]) taskScores[q.task] = { correct: 0, total: 0, domain: q.domain }
      taskScores[q.task].total++
      if (selectedAnswer === q.answer) taskScores[q.task].correct++
    })
  })
  return Object.entries(taskScores)
    .map(([task, { correct, total, domain }]) => ({
      task, domain, total, percentage: Math.round((correct / total) * 100),
    }))
    .filter(t => t.total >= 2)
    .sort((a, b) => a.percentage - b.percentage)
    .slice(0, 5)
}

export function getReadinessScore(sessions, studyCompletion) {
  if (sessions.length === 0 && studyCompletion === 0) return 0
  const domainScores = calculateDomainScores(sessions)
  const avgQuizScore =
    (domainScores.people.percentage * 0.42 +
      domainScores.process.percentage * 0.50 +
      domainScores.business.percentage * 0.08) || 0
  const studyWeight = studyCompletion * 0.4
  const quizWeight = avgQuizScore * 0.6
  return Math.min(100, Math.round(studyWeight + quizWeight))
}

export function getSpacedRepetitionDue(flashcardProgress) {
  const now = Date.now()
  return Object.entries(flashcardProgress)
    .filter(([, { nextReview }]) => !nextReview || nextReview <= now)
    .map(([id]) => parseInt(id))
}

export function calculateNextReview(difficulty) {
  const intervals = { easy: 4 * 24 * 60 * 60 * 1000, medium: 1 * 24 * 60 * 60 * 1000, hard: 4 * 60 * 60 * 1000 }
  return Date.now() + (intervals[difficulty] || intervals.medium)
}
