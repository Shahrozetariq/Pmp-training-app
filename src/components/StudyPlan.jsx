import { useState } from 'react'
import { CheckCircle2, Circle, Clock, ChevronDown, ChevronUp, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import { studyPlan } from '../data/studyPlan.js'

const domainColors = {
  people: 'bg-blue-100 text-blue-700 border-blue-200',
  process: 'bg-green-100 text-green-700 border-green-200',
  business: 'bg-amber-100 text-amber-700 border-amber-200',
}

function DayCard({ weekIdx, dayIdx, day, isCompleted, onToggle }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`bg-white rounded-xl border transition-shadow ${isCompleted ? 'border-green-200 bg-green-50/30' : 'border-gray-100 hover:shadow-sm'}`}>
      <div className="p-4">
        <div className="flex items-start gap-3">
          <button onClick={() => onToggle(weekIdx, dayIdx)} className="mt-0.5 flex-shrink-0">
            {isCompleted
              ? <CheckCircle2 size={20} className="text-green-500" />
              : <Circle size={20} className="text-gray-300 hover:text-gray-400" />}
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Day {dayIdx + 1}</p>
                <p className={`font-semibold text-gray-800 ${isCompleted ? 'line-through text-gray-400' : ''}`}>
                  {day.title}
                </p>
              </div>
              <button
                onClick={() => setExpanded(e => !e)}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
            </div>
            <div className="flex items-center gap-3 mt-1.5">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock size={11} />
                {day.readingTime} min
              </span>
              <span className="text-xs text-gray-500">{day.keyTopics.length} topics</span>
            </div>
          </div>
        </div>
      </div>

      {expanded && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3 ml-8">
          <p className="text-sm text-gray-600 mb-3">{day.description}</p>
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Key Topics</p>
            <ul className="space-y-1">
              {day.keyTopics.map((topic, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Resources</p>
            <ul className="space-y-1">
              {day.resources.map((res, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                  <BookOpen size={12} className="text-gray-400 mt-0.5 flex-shrink-0" />
                  {res}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default function StudyPlan({ studyProgress, onToggleDay }) {
  const today = new Date()
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000)
  const suggestedWeek = Math.min(Math.floor(dayOfYear / 7) % studyPlan.length, studyPlan.length - 1)
  const [currentWeekIdx, setCurrentWeekIdx] = useState(suggestedWeek)

  const week = studyPlan[currentWeekIdx]
  const completedInWeek = week.days.filter((_, di) => studyProgress.completedDays?.[`${currentWeekIdx}-${di}`]).length

  const totalCompleted = Object.keys(studyProgress.completedDays || {}).length
  const totalDays = studyPlan.reduce((s, w) => s + w.days.length, 0)
  const overallPct = Math.round((totalCompleted / totalDays) * 100)

  return (
    <div className="space-y-5">
      {/* Overall progress */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900">12-Week Study Plan</h2>
          <span className="text-sm font-semibold text-blue-700">{overallPct}% complete</span>
        </div>
        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full transition-all duration-500" style={{ width: `${overallPct}%` }} />
        </div>
        <p className="text-xs text-gray-500 mt-2">{totalCompleted} of {totalDays} study days completed</p>
      </div>

      {/* Week navigation */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCurrentWeekIdx(i => Math.max(0, i - 1))}
          disabled={currentWeekIdx === 0}
          className="p-2 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex-1 text-center">
          <p className="font-semibold text-gray-800">Week {currentWeekIdx + 1}</p>
          <p className="text-xs text-gray-500">{week.title}</p>
        </div>
        <button
          onClick={() => setCurrentWeekIdx(i => Math.min(studyPlan.length - 1, i + 1))}
          disabled={currentWeekIdx === studyPlan.length - 1}
          className="p-2 rounded-lg border border-gray-200 disabled:opacity-40 hover:bg-gray-50"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Week details */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${domainColors[week.domain] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
            {week.domain.charAt(0).toUpperCase() + week.domain.slice(1)} Domain
          </span>
          <span className="text-xs text-gray-500">{completedInWeek}/{week.days.length} days done</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-1">
          <div
            className="h-full bg-green-500 rounded-full transition-all"
            style={{ width: `${(completedInWeek / week.days.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Day cards */}
      <div className="space-y-3">
        {week.days.map((day, di) => (
          <DayCard
            key={di}
            weekIdx={currentWeekIdx}
            dayIdx={di}
            day={day}
            isCompleted={!!studyProgress.completedDays?.[`${currentWeekIdx}-${di}`]}
            onToggle={onToggleDay}
          />
        ))}
      </div>

      {/* Week overview strip */}
      <div className="grid grid-cols-12 gap-1.5">
        {studyPlan.map((w, wi) => {
          const completed = w.days.filter((_, di) => studyProgress.completedDays?.[`${wi}-${di}`]).length
          const pct = completed / w.days.length
          return (
            <button
              key={wi}
              onClick={() => setCurrentWeekIdx(wi)}
              title={`Week ${wi + 1}`}
              className={`h-6 rounded transition-all ${wi === currentWeekIdx ? 'ring-2 ring-blue-500' : ''}`}
              style={{
                backgroundColor: pct === 1 ? '#10B981' : pct > 0 ? '#60A5FA' : '#E5E7EB',
              }}
            />
          )
        })}
      </div>
      <p className="text-xs text-center text-gray-400">Click a week block to jump to it</p>
    </div>
  )
}
