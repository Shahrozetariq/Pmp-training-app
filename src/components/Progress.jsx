import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, BarChart, Bar } from 'recharts'
import { TrendingUp, Target, AlertTriangle, Calendar, Award } from 'lucide-react'
import { calculateDomainScores, getWeakTopics, getReadinessScore } from '../utils/scoring.js'
import { studyPlan } from '../data/studyPlan.js'
import { domains } from '../data/topics.js'
import { flashcards } from '../data/flashcards.js'

const PASS_THRESHOLD = 61

export default function Progress({ quizSessions, studyProgress, flashcardProgress }) {
  const completedDays = Object.keys(studyProgress.completedDays || {}).length
  const totalDays = studyPlan.reduce((s, w) => s + w.days.length, 0)
  const studyCompletion = Math.round((completedDays / totalDays) * 100)

  const domainScores = calculateDomainScores(quizSessions)
  const weakTopics = getWeakTopics(quizSessions)
  const readiness = getReadinessScore(quizSessions, studyCompletion)
  const reviewedCards = Object.keys(flashcardProgress).length

  const quizHistory = quizSessions.slice(-10).map((sess, i) => {
    const correct = sess.answers.filter(a => a.correct).length
    return {
      quiz: `Q${i + 1}`,
      score: Math.round((correct / sess.answers.length) * 100),
      date: new Date(sess.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    }
  })

  const radarData = domains.map(d => ({
    domain: d.name,
    score: domainScores[d.id]?.percentage || 0,
    fullMark: 100,
  }))

  const domainBarData = domains.map(d => ({
    name: d.name,
    score: domainScores[d.id]?.percentage || 0,
    fill: d.color,
  }))

  const readinessColor = readiness >= 75 ? '#10B981' : readiness >= 50 ? '#F59E0B' : '#EF4444'

  return (
    <div className="space-y-5">
      {/* Readiness score */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-200 text-sm">Exam Readiness</p>
            <p className="text-5xl font-bold mt-1">{readiness}%</p>
            <p className="text-blue-200 text-sm mt-1">
              {readiness >= 75 ? '🎯 Ready to schedule your exam!' : readiness >= 50 ? '📚 Keep studying — you\'re getting there' : '🔥 Focus on weak domains'}
            </p>
          </div>
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" />
              <circle
                cx="18" cy="18" r="15.9" fill="none"
                stroke="white" strokeWidth="3" strokeDasharray="100"
                strokeDashoffset={100 - readiness}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1s ease' }}
              />
            </svg>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="bg-white/10 rounded-lg p-2">
            <p className="text-lg font-bold">{studyCompletion}%</p>
            <p className="text-xs text-blue-200">Study Done</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2">
            <p className="text-lg font-bold">{quizSessions.length}</p>
            <p className="text-xs text-blue-200">Quizzes Taken</p>
          </div>
          <div className="bg-white/10 rounded-lg p-2">
            <p className="text-lg font-bold">{reviewedCards}/{flashcards.length}</p>
            <p className="text-xs text-blue-200">Cards Done</p>
          </div>
        </div>
      </div>

      {/* Quiz score history */}
      {quizHistory.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp size={16} className="text-blue-500" />
            Quiz Score History
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={quizHistory} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
              <Tooltip formatter={(v) => [`${v}%`, 'Score']} />
              <Line
                type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2}
                dot={{ r: 4 }} activeDot={{ r: 6 }}
              />
              <Line type="monotone" dataKey={() => PASS_THRESHOLD} stroke="#EF4444" strokeDasharray="5 5" strokeWidth={1} dot={false} name="Pass Threshold" />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-400 text-center mt-1">Red dashed line = passing threshold ({PASS_THRESHOLD}%)</p>
        </div>
      )}

      {/* Domain performance bars */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Target size={16} className="text-green-500" />
          Domain Performance
        </h3>
        {quizSessions.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-4">Take a quiz to see your domain performance</p>
        ) : (
          <div className="space-y-4">
            {domains.map(d => {
              const score = domainScores[d.id]?.percentage || 0
              const total = domainScores[d.id]?.total || 0
              return (
                <div key={d.id}>
                  <div className="flex justify-between items-center mb-1.5">
                    <div>
                      <span className="text-sm font-medium text-gray-800">{d.name}</span>
                      <span className="text-xs text-gray-400 ml-2">{d.percentage}% of exam</span>
                    </div>
                    <span className="text-sm font-bold" style={{ color: d.color }}>
                      {total > 0 ? `${score}%` : 'No data'}
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${score}%`, backgroundColor: d.color }}
                    />
                  </div>
                  {total > 0 && (
                    <p className="text-xs text-gray-400 mt-0.5">
                      {domainScores[d.id].correct}/{total} correct
                      {score < PASS_THRESHOLD && ' — needs improvement'}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* Weak topics */}
      {weakTopics.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h3 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
            <AlertTriangle size={16} />
            Topics to Focus On
          </h3>
          <div className="space-y-2.5">
            {weakTopics.map((t, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-amber-800 font-medium capitalize">{t.task.replace(/-/g, ' ')}</span>
                  <span className="text-xs text-amber-700 font-bold">{t.percentage}%</span>
                </div>
                <div className="h-1.5 bg-amber-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: `${t.percentage}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Study streak calendar */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Calendar size={16} className="text-purple-500" />
          Study Activity
        </h3>
        <div className="grid grid-cols-7 gap-1.5">
          {Array.from({ length: 28 }, (_, i) => {
            const d = new Date()
            d.setDate(d.getDate() - (27 - i))
            const key = d.toISOString().split('T')[0]
            const hasActivity = (studyProgress.activityDates || {})[key] || false
            return (
              <div
                key={i}
                title={key}
                className={`h-6 rounded transition-colors ${hasActivity ? 'bg-blue-500' : 'bg-gray-100'}`}
              />
            )
          })}
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="w-3 h-3 bg-gray-100 rounded" />
          <span className="text-xs text-gray-400">No activity</span>
          <div className="w-3 h-3 bg-blue-500 rounded ml-2" />
          <span className="text-xs text-gray-400">Active</span>
        </div>
      </div>

      {/* Stats summary */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Award size={16} className="text-yellow-500" />
          Overall Statistics
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Total Questions', value: quizSessions.reduce((s, q) => s + q.answers.length, 0) },
            { label: 'Correct Answers', value: quizSessions.reduce((s, q) => s + q.answers.filter(a => a.correct).length, 0) },
            { label: 'Study Days Done', value: completedDays },
            { label: 'Cards Reviewed', value: reviewedCards },
            { label: 'Quizzes Taken', value: quizSessions.length },
            { label: 'Study Streak', value: `${studyProgress.streak || 0} days` },
          ].map(({ label, value }) => (
            <div key={label} className="bg-gray-50 rounded-lg p-3">
              <p className="text-xl font-bold text-gray-800">{value}</p>
              <p className="text-xs text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
