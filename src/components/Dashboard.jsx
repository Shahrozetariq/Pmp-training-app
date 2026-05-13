import { BookOpen, HelpCircle, Layers, Flame, Trophy, ChevronRight, Target, Clock } from 'lucide-react'
import { studyPlan } from '../data/studyPlan.js'
import { domains } from '../data/topics.js'
import { calculateDomainScores, getReadinessScore, getSpacedRepetitionDue } from '../utils/scoring.js'

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4">
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color}`}>
        <Icon size={20} className="text-white" />
      </div>
      <div>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
      </div>
    </div>
  )
}

function DomainBar({ domain, score }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-700 font-medium">{domain.name} <span className="text-gray-400 font-normal">({domain.percentage}%)</span></span>
        <span className="text-sm font-semibold" style={{ color: domain.color }}>{score > 0 ? `${score}%` : 'Not started'}</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${score}%`, backgroundColor: domain.color }}
        />
      </div>
    </div>
  )
}

export default function Dashboard({ studyProgress, quizSessions, flashcardProgress, onTabChange }) {
  const today = new Date()
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000)
  const currentWeekIdx = Math.min(Math.floor(dayOfYear / 7) % studyPlan.length, studyPlan.length - 1)
  const currentWeek = studyPlan[currentWeekIdx]
  const currentDayIdx = today.getDay() === 0 ? 4 : Math.min(today.getDay() - 1, 4)
  const todayPlan = currentWeek?.days[currentDayIdx]

  const completedDays = Object.keys(studyProgress.completedDays || {}).length
  const totalDays = studyPlan.reduce((s, w) => s + w.days.length, 0)
  const studyCompletion = Math.round((completedDays / totalDays) * 100)

  const domainScores = calculateDomainScores(quizSessions)
  const readiness = getReadinessScore(quizSessions, studyCompletion)
  const dueFlashcards = getSpacedRepetitionDue(flashcardProgress).length

  const streak = studyProgress.streak || 0
  const totalQuestions = quizSessions.reduce((s, sess) => s + (sess.answers?.length || 0), 0)
  const totalCorrect = quizSessions.reduce(
    (s, sess) => s + (sess.answers?.filter(a => {
      const q = sess.answers.find(x => x.questionId === a.questionId)
      return q?.correct
    }).length || 0), 0
  )

  const greetingHour = today.getHours()
  const greeting = greetingHour < 12 ? 'Good morning' : greetingHour < 17 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <p className="text-blue-200 text-sm">{greeting} 👋</p>
        <h2 className="text-2xl font-bold mt-1">PMP 2026 Dashboard</h2>
        <p className="text-blue-100 text-sm mt-1">
          {today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          {' '}&bull; PMBOK 8 &bull; Rita Mulcahy
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="bg-white/20 rounded-full px-3 py-1 flex items-center gap-1">
            <Target size={14} />
            <span className="text-sm font-semibold">Readiness: {readiness}%</span>
          </div>
          {streak > 0 && (
            <div className="bg-white/20 rounded-full px-3 py-1 flex items-center gap-1">
              <Flame size={14} />
              <span className="text-sm font-semibold">{streak} day streak</span>
            </div>
          )}
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={BookOpen} label="Days Studied" value={`${completedDays}/${totalDays}`} color="bg-blue-500" />
        <StatCard icon={Flame} label="Study Streak" value={`${streak}d`} color="bg-orange-500" />
        <StatCard icon={HelpCircle} label="Questions Answered" value={totalQuestions} color="bg-green-500" />
        <StatCard icon={Layers} label="Flashcards Due" value={dueFlashcards} color="bg-purple-500" />
      </div>

      {/* Today's study */}
      {todayPlan && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900 flex items-center gap-2">
              <Clock size={16} className="text-blue-500" />
              Today's Study
            </h3>
            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">Week {currentWeekIdx + 1}, Day {currentDayIdx + 1}</span>
          </div>
          <p className="font-medium text-gray-800">{todayPlan.title}</p>
          <p className="text-sm text-gray-500 mt-1">{todayPlan.description}</p>
          <div className="flex items-center gap-4 mt-3">
            <span className="text-xs text-gray-500 flex items-center gap-1">
              <Clock size={12} />
              {todayPlan.readingTime} min
            </span>
            <span className="text-xs text-gray-500">{todayPlan.keyTopics.length} topics</span>
          </div>
          <button
            onClick={() => onTabChange('study')}
            className="mt-3 w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-medium flex items-center justify-center gap-1 hover:bg-blue-700 transition-colors"
          >
            Start Today's Study <ChevronRight size={16} />
          </button>
        </div>
      )}

      {/* Domain performance */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Trophy size={16} className="text-yellow-500" />
          Domain Performance
        </h3>
        <div className="space-y-4">
          {domains.map(domain => (
            <DomainBar key={domain.id} domain={domain} score={domainScores[domain.id]?.percentage || 0} />
          ))}
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => onTabChange('quiz')}
          className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:shadow-md transition-shadow"
        >
          <HelpCircle size={22} className="text-green-500 mb-2" />
          <p className="font-semibold text-gray-800 text-sm">Practice Quiz</p>
          <p className="text-xs text-gray-500 mt-0.5">60 scenario questions</p>
        </button>
        <button
          onClick={() => onTabChange('flashcards')}
          className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:shadow-md transition-shadow"
        >
          <Layers size={22} className="text-purple-500 mb-2" />
          <p className="font-semibold text-gray-800 text-sm">Flashcards</p>
          <p className="text-xs text-gray-500 mt-0.5">{dueFlashcards > 0 ? `${dueFlashcards} cards due` : '60 cards total'}</p>
        </button>
      </div>
    </div>
  )
}
