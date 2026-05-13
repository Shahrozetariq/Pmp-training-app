import { useState, useEffect, useRef } from 'react'
import { BookOpen, CheckCircle2, Circle, Clock, ChevronLeft, Lightbulb, AlertTriangle, List, FileText, Code2, ChevronDown, ChevronUp, Star, HelpCircle, RotateCcw, Trophy, ArrowRight, Calendar } from 'lucide-react'
import { studyLessons } from '../data/studyContent.js'
import { questions } from '../data/questions.js'

const DOMAIN_STYLES = {
  people: { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', label: 'People' },
  process: { bg: 'bg-green-600', light: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', label: 'Process' },
  business: { bg: 'bg-amber-600', light: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200', label: 'Business' },
}

function SectionBlock({ section }) {
  if (section.type === 'text') {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-4">
        <h3 className="font-semibold text-gray-900 mb-3 text-base">{section.title}</h3>
        <p className="text-gray-700 leading-relaxed text-sm">{section.body}</p>
      </div>
    )
  }

  if (section.type === 'list') {
    return (
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-4">
        <h3 className="font-semibold text-gray-900 mb-3 text-base flex items-center gap-2">
          <List size={16} className="text-blue-500" />
          {section.title}
        </h3>
        <div className="space-y-3">
          {section.items.map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.heading}</p>
                <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (section.type === 'tip') {
    const isRita = section.title?.toLowerCase().includes('rita')
    return (
      <div className={`rounded-xl border p-4 mb-4 ${isRita ? 'bg-purple-50 border-purple-200' : 'bg-amber-50 border-amber-200'}`}>
        <div className={`flex items-center gap-2 font-semibold text-sm mb-2 ${isRita ? 'text-purple-800' : 'text-amber-800'}`}>
          <Lightbulb size={16} />
          {section.title}
        </div>
        <p className={`text-sm leading-relaxed ${isRita ? 'text-purple-700' : 'text-amber-700'}`}>{section.body}</p>
      </div>
    )
  }

  if (section.type === 'warning') {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 mb-4">
        <div className="flex items-center gap-2 font-semibold text-red-800 text-sm mb-2">
          <AlertTriangle size={16} />
          {section.title}
        </div>
        <p className="text-red-700 text-sm leading-relaxed">{section.body}</p>
      </div>
    )
  }

  if (section.type === 'formula') {
    return (
      <div className="rounded-xl border border-gray-300 bg-gray-900 p-4 mb-4">
        <div className="flex items-center gap-2 font-semibold text-gray-300 text-xs mb-2 uppercase tracking-wide">
          <Code2 size={14} />
          {section.title}
        </div>
        <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap leading-relaxed">{section.body}</pre>
      </div>
    )
  }

  return null
}

function KeyTermsAccordion({ keyTerms }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm mb-4">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between p-4 text-left">
        <span className="font-semibold text-gray-900 flex items-center gap-2">
          <BookOpen size={16} className="text-blue-500" />
          Key Terms ({keyTerms.length})
        </span>
        {open ? <ChevronUp size={18} className="text-gray-400" /> : <ChevronDown size={18} className="text-gray-400" />}
      </button>
      {open && (
        <div className="px-4 pb-4 border-t border-gray-100 pt-3 space-y-3">
          {keyTerms.map((kt, i) => (
            <div key={i}>
              <p className="font-semibold text-gray-800 text-sm">{kt.term}</p>
              <p className="text-gray-600 text-sm mt-0.5">{kt.definition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function MiniQuiz({ lesson, onBack }) {
  const lessonQs = questions.filter(q => lesson.relatedQuestionIds.includes(q.id))
  const [idx, setIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answers, setAnswers] = useState([])
  const [done, setDone] = useState(false)

  if (lessonQs.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No practice questions for this lesson yet.</p>
        <button onClick={onBack} className="mt-4 text-blue-600 font-medium text-sm">← Back to lesson</button>
      </div>
    )
  }

  const q = lessonQs[idx]
  const correct = answers.filter(a => a.correct).length

  if (done) {
    const pct = Math.round((correct / lessonQs.length) * 100)
    return (
      <div className="space-y-4">
        <div className={`rounded-2xl p-6 text-center border ${pct >= 70 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <Trophy size={36} className={`mx-auto mb-2 ${pct >= 70 ? 'text-green-600' : 'text-red-500'}`} />
          <p className={`text-4xl font-bold ${pct >= 70 ? 'text-green-700' : 'text-red-600'}`}>{pct}%</p>
          <p className="text-gray-600 text-sm mt-1">{correct} of {lessonQs.length} correct</p>
          <p className="text-sm mt-2 font-medium text-gray-700">
            {pct >= 80 ? 'Excellent! You\'ve mastered this topic.' : pct >= 60 ? 'Good effort — review the lesson once more.' : 'Re-read the lesson and try again.'}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <button onClick={onBack} className="border border-blue-500 text-blue-600 rounded-xl py-3 font-medium text-sm hover:bg-blue-50">
            ← Back to Lesson
          </button>
          <button onClick={() => { setIdx(0); setSelected(null); setAnswers([]); setDone(false) }} className="bg-blue-600 text-white rounded-xl py-3 font-medium text-sm flex items-center justify-center gap-1">
            <RotateCcw size={14} /> Retry Quiz
          </button>
        </div>
      </div>
    )
  }

  const handleSelect = (i) => {
    if (selected !== null) return
    setSelected(i)
  }

  const handleNext = () => {
    if (selected === null) return
    const newAnswers = [...answers, { questionId: q.id, selectedAnswer: selected, correct: selected === q.answer }]
    setAnswers(newAnswers)
    if (idx < lessonQs.length - 1) {
      setIdx(i => i + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  const DOMAIN_COLORS = { people: 'text-blue-600 bg-blue-50', process: 'text-green-600 bg-green-50', business: 'text-amber-600 bg-amber-50' }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-blue-600 font-medium flex items-center gap-1">
          <ChevronLeft size={14} /> Back to lesson
        </button>
        <span className="text-sm text-gray-500">{idx + 1} / {lessonQs.length}</span>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${((idx) / lessonQs.length) * 100}%` }} />
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${DOMAIN_COLORS[q.domain]}`}>{q.domain}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${q.difficulty === 'veryHard' ? 'bg-red-100 text-red-700' : q.difficulty === 'hard' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-600'}`}>
          {q.difficulty === 'veryHard' ? 'Very Hard' : q.difficulty === 'hard' ? 'Hard' : 'Medium'}
        </span>
      </div>
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <p className="text-gray-900 font-medium leading-relaxed text-sm">{q.question}</p>
      </div>
      <div className="space-y-2.5">
        {q.options.map((opt, i) => {
          let cls = 'w-full text-left p-4 rounded-xl border text-sm transition-all '
          if (selected === null) {
            cls += 'border-gray-200 bg-white hover:border-blue-300 hover:bg-blue-50 text-gray-700'
          } else {
            if (i === q.answer) cls += 'border-green-400 bg-green-50 text-green-800 font-medium'
            else if (i === selected && selected !== q.answer) cls += 'border-red-400 bg-red-50 text-red-700'
            else cls += 'border-gray-100 bg-gray-50 text-gray-400'
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={selected !== null}>
              <span className="flex items-start gap-2">
                <span className="font-semibold flex-shrink-0 w-5">
                  {selected !== null && i === q.answer && <CheckCircle2 size={16} className="text-green-500" />}
                  {selected !== null && i === selected && selected !== q.answer && <AlertTriangle size={16} className="text-red-500" />}
                  {selected === null && <span className="text-gray-400">{String.fromCharCode(65 + i)}.</span>}
                </span>
                {opt}
              </span>
            </button>
          )
        })}
      </div>
      {selected !== null && (
        <div className={`rounded-xl p-4 border ${selected === q.answer ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <p className={`font-semibold text-sm mb-1 ${selected === q.answer ? 'text-green-700' : 'text-red-700'}`}>
            {selected === q.answer ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className="text-sm text-gray-700">{q.explanation}</p>
        </div>
      )}
      {selected !== null && (
        <button onClick={handleNext} className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
          {idx < lessonQs.length - 1 ? 'Next Question' : 'See Results'}
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  )
}

function LessonReader({ lesson, isComplete, onMarkComplete, onBack }) {
  const [showQuiz, setShowQuiz] = useState(false)
  const [scrollPct, setScrollPct] = useState(0)
  const contentRef = useRef(null)
  const ds = DOMAIN_STYLES[lesson.domain] || DOMAIN_STYLES.process

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const onScroll = () => {
      const pct = Math.min(100, Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100))
      setScrollPct(isNaN(pct) ? 0 : pct)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (showQuiz) {
    return (
      <div>
        <div className="mb-4">
          <h2 className="font-bold text-gray-900 text-lg">Practice Questions</h2>
          <p className="text-sm text-gray-500">Based on: {lesson.title}</p>
        </div>
        <MiniQuiz lesson={lesson} onBack={() => setShowQuiz(false)} />
      </div>
    )
  }

  return (
    <div ref={contentRef}>
      {/* Reading progress bar fixed at top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-30">
        <div className="h-full bg-blue-500 transition-all duration-100" style={{ width: `${scrollPct}%` }} />
      </div>

      <button onClick={onBack} className="flex items-center gap-1 text-sm text-blue-600 font-medium mb-4 hover:text-blue-700">
        <ChevronLeft size={16} /> All Lessons
      </button>

      {/* Header */}
      <div className={`rounded-2xl p-5 mb-5 ${ds.light} border ${ds.border}`}>
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${ds.bg} text-white`}>{ds.label} Domain</span>
          <span className="text-xs text-gray-500 flex items-center gap-1"><Clock size={11} /> {lesson.estimatedMinutes} min read</span>
          {isComplete && <span className="ml-auto text-xs text-green-600 font-semibold flex items-center gap-1"><CheckCircle2 size={13} /> Read</span>}
        </div>
        <h2 className={`text-xl font-bold ${ds.text} mb-1`}>{lesson.title}</h2>
        <p className="text-gray-600 text-sm">{lesson.subtitle}</p>
      </div>

      {/* Sections */}
      {lesson.sections.map(section => (
        <SectionBlock key={section.id} section={section} />
      ))}

      {/* Key terms */}
      {lesson.keyTerms?.length > 0 && <KeyTermsAccordion keyTerms={lesson.keyTerms} />}

      {/* Exam tips */}
      {lesson.examTips?.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
          <p className="font-semibold text-amber-900 flex items-center gap-2 mb-2">
            <Star size={15} />
            Exam Tips — {lesson.title}
          </p>
          <ul className="space-y-1.5">
            {lesson.examTips.map((tip, i) => (
              <li key={i} className="text-sm text-amber-800 flex items-start gap-2">
                <span className="text-amber-500 mt-0.5 flex-shrink-0">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="space-y-3 pb-8">
        {!isComplete && (
          <button
            onClick={onMarkComplete}
            className="w-full bg-green-600 text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
          >
            <CheckCircle2 size={18} /> Mark as Read
          </button>
        )}
        <button
          onClick={() => setShowQuiz(true)}
          className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <HelpCircle size={18} />
          Practice Questions ({lesson.relatedQuestionIds.length})
        </button>
      </div>
    </div>
  )
}

export default function StudyContent({ onTabChange }) {
  const [lessonProgress, setLessonProgress] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pmp-lesson-progress') || '{}') } catch { return {} }
  })
  const [selectedLesson, setSelectedLesson] = useState(null)
  const [domainFilter, setDomainFilter] = useState('all')
  const [showPlan, setShowPlan] = useState(false)

  const saveProgress = (id) => {
    const updated = { ...lessonProgress, [id]: true }
    setLessonProgress(updated)
    localStorage.setItem('pmp-lesson-progress', JSON.stringify(updated))
    const today = new Date().toISOString().split('T')[0]
    try {
      const sp = JSON.parse(localStorage.getItem('pmp-study-progress') || '{}')
      sp.activityDates = { ...(sp.activityDates || {}), [today]: true }
      localStorage.setItem('pmp-study-progress', JSON.stringify(sp))
    } catch {}
  }

  const filtered = studyLessons.filter(l => domainFilter === 'all' || l.domain === domainFilter)
  const completed = Object.keys(lessonProgress).length
  const total = studyLessons.length
  const pct = Math.round((completed / total) * 100)

  if (selectedLesson) {
    const lesson = studyLessons.find(l => l.id === selectedLesson)
    if (!lesson) return null
    return (
      <LessonReader
        lesson={lesson}
        isComplete={!!lessonProgress[lesson.id]}
        onMarkComplete={() => saveProgress(lesson.id)}
        onBack={() => { setSelectedLesson(null); window.scrollTo(0, 0) }}
      />
    )
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-5 text-white">
        <h2 className="text-xl font-bold">Study Content</h2>
        <p className="text-indigo-200 text-sm mt-0.5">Read lessons, then answer practice questions</p>
        <div className="mt-3">
          <div className="flex justify-between text-xs text-indigo-200 mb-1">
            <span>{completed}/{total} lessons read</span>
            <span>{pct}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full transition-all" style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {/* Domain filter */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {[
          { id: 'all', label: 'All' },
          { id: 'people', label: '👥 People' },
          { id: 'process', label: '⚙️ Process' },
          { id: 'business', label: '🏢 Business' },
        ].map(f => (
          <button
            key={f.id}
            onClick={() => setDomainFilter(f.id)}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              domainFilter === f.id ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50'
            }`}
          >
            {f.label}
          </button>
        ))}
        <button
          onClick={() => onTabChange('study')}
          className="ml-auto flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border border-gray-200 text-gray-500 bg-white hover:bg-gray-50 flex items-center gap-1"
        >
          <Calendar size={12} /> Weekly Plan
        </button>
      </div>

      {/* Lesson grid */}
      <div className="space-y-3">
        {filtered.map(lesson => {
          const ds = DOMAIN_STYLES[lesson.domain] || DOMAIN_STYLES.process
          const isRead = !!lessonProgress[lesson.id]
          return (
            <button
              key={lesson.id}
              onClick={() => { setSelectedLesson(lesson.id); window.scrollTo(0, 0) }}
              className={`w-full text-left bg-white rounded-xl border shadow-sm p-4 hover:shadow-md transition-shadow ${isRead ? 'border-green-200' : 'border-gray-100'}`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${ds.light} ${ds.border} border`}>
                  {isRead
                    ? <CheckCircle2 size={20} className="text-green-500" />
                    : <BookOpen size={20} className={ds.text} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${ds.light} ${ds.text}`}>{ds.label}</span>
                    {isRead && <span className="text-xs text-green-600 font-medium">✓ Read</span>}
                  </div>
                  <p className="font-semibold text-gray-900 mt-1 text-sm leading-snug">{lesson.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{lesson.subtitle}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={11} /> {lesson.estimatedMinutes} min</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1"><HelpCircle size={11} /> {lesson.relatedQuestionIds.length} questions</span>
                  </div>
                </div>
                <ArrowRight size={16} className="text-gray-300 flex-shrink-0 mt-1" />
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
