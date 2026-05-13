import { useState, useEffect, useRef, useCallback } from 'react'
import { CheckCircle, XCircle, Clock, ChevronRight, RotateCcw, Filter, Trophy, AlertCircle } from 'lucide-react'
import { questions } from '../data/questions.js'
import { domains } from '../data/topics.js'

const DOMAIN_COLORS = {
  people: 'text-blue-600 bg-blue-50 border-blue-200',
  process: 'text-green-600 bg-green-50 border-green-200',
  business: 'text-amber-600 bg-amber-50 border-amber-200',
}
const DIFF_COLORS = {
  easy: 'text-emerald-700 bg-emerald-50',
  medium: 'text-amber-700 bg-amber-50',
  hard: 'text-orange-700 bg-orange-50',
  veryHard: 'text-red-700 bg-red-50',
}
const APPROACH_COLORS = {
  agile: 'text-purple-700 bg-purple-50',
  predictive: 'text-blue-700 bg-blue-50',
  hybrid: 'text-teal-700 bg-teal-50',
  both: 'text-gray-600 bg-gray-100',
}
const PER_Q_SECS = 78
const TARGET_PACE = 77

function CircularTimer({ timeLeft, total }) {
  const r = 22
  const C = 2 * Math.PI * r
  const frac = Math.max(0, timeLeft / total)
  const offset = C * (1 - frac)
  const clr = frac > 0.5 ? '#22c55e' : frac > 0.25 ? '#f59e0b' : '#ef4444'
  const m = Math.floor(timeLeft / 60)
  const s = timeLeft % 60
  return (
    <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
      <svg width="56" height="56" className="absolute" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="28" cy="28" r={r} fill="none" stroke="#e5e7eb" strokeWidth="5" />
        <circle cx="28" cy="28" r={r} fill="none" stroke={clr} strokeWidth="5"
          strokeDasharray={`${C}`} strokeDashoffset={`${offset}`} strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s linear, stroke 0.5s' }} />
      </svg>
      <span className="relative z-10 text-xs font-bold" style={{ color: clr }}>
        {m > 0 ? `${m}:${String(s).padStart(2, '0')}` : `${s}s`}
      </span>
    </div>
  )
}

function QuizSetup({ onStart }) {
  const [domain, setDomain] = useState('all')
  const [mode, setMode] = useState('practice')
  const [count, setCount] = useState(20)
  const [difficulty, setDifficulty] = useState('mixed')

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Filter size={18} className="text-blue-500" />
          Configure Your Quiz
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Domain</label>
            <div className="grid grid-cols-2 gap-2">
              {[{ id: 'all', label: 'All Domains' }, ...domains.map(d => ({ id: d.id, label: d.name }))].map(opt => (
                <button key={opt.id} onClick={() => setDomain(opt.id)}
                  className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${domain === opt.id ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'mixed', label: 'Mixed', sub: 'All levels' },
                { id: 'hard', label: 'Hard+', sub: 'Hard & Very Hard' },
                { id: 'veryHard', label: 'Very Hard', sub: 'Hardest only' },
              ].map(opt => (
                <button key={opt.id} onClick={() => setDifficulty(opt.id)}
                  className={`py-2 px-2 rounded-lg border text-center transition-colors ${difficulty === opt.id ? 'bg-orange-500 text-white border-orange-500' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                  <div className="text-sm font-semibold">{opt.label}</div>
                  <div className={`text-xs mt-0.5 ${difficulty === opt.id ? 'text-orange-100' : 'text-gray-400'}`}>{opt.sub}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Mode</label>
            <div className="grid grid-cols-2 gap-2">
              <button onClick={() => setMode('practice')}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-colors text-left ${mode === 'practice' ? 'bg-green-600 text-white border-green-600' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                Practice
                <p className={`text-xs font-normal mt-0.5 ${mode === 'practice' ? 'text-green-100' : 'text-gray-400'}`}>Instant explanations</p>
              </button>
              <button onClick={() => setMode('exam')}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-colors text-left ${mode === 'exam' ? 'bg-orange-600 text-white border-orange-600' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}>
                Exam Sim
                <p className={`text-xs font-normal mt-0.5 ${mode === 'exam' ? 'text-orange-100' : 'text-gray-400'}`}>Timed, no hints</p>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Questions: <span className="text-blue-600">{count}</span>
            </label>
            <input type="range" min={5} max={60} step={5} value={count}
              onChange={e => setCount(Number(e.target.value))} className="w-full accent-blue-600" />
            <div className="flex justify-between text-xs text-gray-400 mt-1"><span>5</span><span>60</span></div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-sm font-semibold text-blue-800 mb-1.5">PMP Exam Facts</p>
        <ul className="text-xs text-blue-700 space-y-0.5 list-disc list-inside">
          <li>180 questions in 230 minutes (~1.28 min/question)</li>
          <li>~76 People | ~90 Process | ~14 Business Environment</li>
          <li>Predictive, Agile, and Hybrid approaches tested</li>
          <li>Scenario-based, situational judgment questions</li>
        </ul>
      </div>

      {mode === 'exam' && (
        <div className="flex items-start gap-2 bg-orange-50 border border-orange-100 rounded-xl p-3">
          <Clock size={15} className="text-orange-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-orange-700">
            <strong>Exam Sim:</strong> {PER_Q_SECS}s per question. Auto-advances when time runs out. No explanations shown.
          </p>
        </div>
      )}

      <button onClick={() => onStart({ domain, mode, count, difficulty })}
        className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-semibold text-base hover:bg-blue-700 transition-colors">
        Start Quiz →
      </button>
    </div>
  )
}

function QuizQuestion({ question, questionIndex, total, mode, onAnswer, selectedAnswer, showResult }) {
  const isCorrect = selectedAnswer === question.answer
  const dc = DOMAIN_COLORS[question.domain] || ''
  const diffLabel = { easy: 'Easy', medium: 'Medium', hard: 'Hard', veryHard: 'Very Hard' }
  const approachLabel = { agile: 'Agile', predictive: 'Predictive', hybrid: 'Hybrid', both: 'All Approaches' }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${dc}`}>
            {question.domain.charAt(0).toUpperCase() + question.domain.slice(1)}
          </span>
          {question.difficulty && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${DIFF_COLORS[question.difficulty] || ''}`}>
              {diffLabel[question.difficulty] || question.difficulty}
            </span>
          )}
          {question.approach && question.approach !== 'both' && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${APPROACH_COLORS[question.approach] || ''}`}>
              {approachLabel[question.approach] || question.approach}
            </span>
          )}
        </div>
        <span className="text-xs text-gray-400 font-medium">{questionIndex + 1}/{total}</span>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <p className="text-gray-900 font-medium leading-relaxed">{question.question}</p>
      </div>

      <div className="space-y-2.5">
        {question.options.map((opt, i) => {
          let cls = 'w-full text-left p-4 rounded-xl border text-sm transition-all '
          if (!showResult) {
            cls += selectedAnswer === i
              ? 'border-blue-500 bg-blue-50 text-blue-800 font-medium'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-gray-700'
          } else {
            if (i === question.answer) cls += 'border-green-400 bg-green-50 text-green-800 font-medium'
            else if (i === selectedAnswer && selectedAnswer !== question.answer) cls += 'border-red-400 bg-red-50 text-red-800'
            else cls += 'border-gray-100 bg-gray-50 text-gray-400'
          }
          return (
            <button key={i} className={cls} onClick={() => !showResult && onAnswer(i)} disabled={showResult}>
              <span className="flex items-start gap-2">
                <span className="font-semibold flex-shrink-0">
                  {showResult && i === question.answer && <CheckCircle size={16} className="text-green-500 inline mr-1" />}
                  {showResult && i === selectedAnswer && selectedAnswer !== question.answer && <XCircle size={16} className="text-red-500 inline mr-1" />}
                  {String.fromCharCode(65 + i)}.
                </span>
                {opt}
              </span>
            </button>
          )
        })}
      </div>

      {showResult && mode === 'practice' && (
        <div className={`rounded-xl p-4 border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <p className={`font-semibold text-sm mb-1.5 flex items-center gap-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}

function QuizResults({ session, questions: qs, onRestart, onReview, onLearn }) {
  const correct = session.answers.filter(a => a.correct).length
  const total = session.answers.length
  const pct = Math.round((correct / total) * 100)
  const avgTime = total > 0
    ? Math.round(session.answers.reduce((s, a) => s + (a.timeSpent || 0), 0) / total)
    : 0

  const domainBreakdown = {}
  session.answers.forEach(a => {
    const q = qs.find(q => q.id === a.questionId)
    if (!q) return
    if (!domainBreakdown[q.domain]) domainBreakdown[q.domain] = { correct: 0, total: 0 }
    domainBreakdown[q.domain].total++
    if (a.correct) domainBreakdown[q.domain].correct++
  })

  const grade = pct >= 75 ? 'Pass' : pct >= 61 ? 'Borderline' : 'Needs Work'
  const gcls = pct >= 75 ? 'text-green-600' : pct >= 61 ? 'text-yellow-600' : 'text-red-600'
  const gbg = pct >= 75 ? 'bg-green-50 border-green-200' : pct >= 61 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'
  const weakDomains = Object.entries(domainBreakdown)
    .filter(([, v]) => v.total > 0 && v.correct / v.total < 0.7)
    .map(([d]) => d)

  return (
    <div className="space-y-5">
      <div className={`rounded-2xl p-6 border text-center ${gbg}`}>
        <Trophy size={36} className={`mx-auto mb-2 ${gcls}`} />
        <p className={`text-4xl font-bold ${gcls}`}>{pct}%</p>
        <p className={`font-semibold text-lg ${gcls}`}>{grade}</p>
        <p className="text-gray-600 text-sm mt-1">{correct} correct out of {total} questions</p>
      </div>

      {avgTime > 0 && (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Clock size={15} className="text-blue-500" />
            Timing Analysis
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3 text-center">
              <p className="text-xl font-bold text-gray-900">{avgTime}s</p>
              <p className="text-xs text-gray-500 mt-0.5">Avg per question</p>
            </div>
            <div className={`rounded-lg p-3 text-center ${avgTime <= TARGET_PACE ? 'bg-green-50' : 'bg-amber-50'}`}>
              <p className={`text-sm font-bold ${avgTime <= TARGET_PACE ? 'text-green-700' : 'text-amber-700'}`}>
                {avgTime <= TARGET_PACE ? '✓ On Pace' : '⚠ Slow'}
              </p>
              <p className="text-xs text-gray-500 mt-0.5">Target: {TARGET_PACE}s/q</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-semibold text-gray-900 mb-3">Domain Breakdown</h3>
        <div className="space-y-3">
          {Object.entries(domainBreakdown).map(([domain, { correct, total }]) => {
            const p = Math.round((correct / total) * 100)
            const d = domains.find(d => d.id === domain)
            return (
              <div key={domain}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 capitalize">{domain}</span>
                  <span className="font-medium" style={{ color: d?.color }}>{p}% ({correct}/{total})</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${p}%`, backgroundColor: d?.color }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {weakDomains.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-semibold text-amber-800 flex items-center gap-2 mb-2">
            <AlertCircle size={16} />
            Review Recommended
          </p>
          <ul className="text-sm text-amber-700 mb-3 list-disc list-inside space-y-0.5">
            {weakDomains.map(d => <li key={d} className="capitalize">{d} domain</li>)}
          </ul>
          <button onClick={onLearn}
            className="w-full bg-amber-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-amber-700 transition-colors">
            Study These Topics →
          </button>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <button onClick={onReview}
          className="border border-blue-500 text-blue-600 rounded-xl py-3 font-medium hover:bg-blue-50 transition-colors">
          Review Answers
        </button>
        <button onClick={onRestart}
          className="bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
          <RotateCcw size={16} />
          New Quiz
        </button>
      </div>
    </div>
  )
}

function ReviewMode({ session, quizQuestions, onBack }) {
  const [idx, setIdx] = useState(0)
  const answer = session.answers[idx]
  const question = quizQuestions.find(q => q.id === answer?.questionId)
  if (!question) return null

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={onBack} className="text-sm text-blue-600 font-medium">← Back to Results</button>
        <span className="text-sm text-gray-500">{idx + 1}/{session.answers.length}</span>
      </div>
      <QuizQuestion question={question} questionIndex={idx} total={session.answers.length}
        mode="practice" onAnswer={() => {}} selectedAnswer={answer.selectedAnswer} showResult={true} />
      <div className="flex gap-3">
        <button onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0}
          className="flex-1 border border-gray-200 rounded-xl py-3 text-sm disabled:opacity-40">← Previous</button>
        <button onClick={() => setIdx(i => Math.min(session.answers.length - 1, i + 1))} disabled={idx === session.answers.length - 1}
          className="flex-1 bg-blue-600 text-white rounded-xl py-3 text-sm disabled:opacity-40">Next →</button>
      </div>
    </div>
  )
}

export default function Questionnaire({ quizSessions, onSessionComplete, onTabChange }) {
  const [phase, setPhase] = useState('setup')
  const [config, setConfig] = useState(null)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [lastSession, setLastSession] = useState(null)
  const [perQTime, setPerQTime] = useState(PER_Q_SECS)
  const [elapsed, setElapsed] = useState(0)

  const answersRef = useRef([])
  const questionStartRef = useRef(Date.now())
  const autoAdvancedRef = useRef(false)
  const configRef = useRef(null)
  const quizQuestionsRef = useRef([])
  const currentIdxRef = useRef(0)

  useEffect(() => { configRef.current = config }, [config])
  useEffect(() => { quizQuestionsRef.current = quizQuestions }, [quizQuestions])
  useEffect(() => { currentIdxRef.current = currentIdx }, [currentIdx])

  const finishQuiz = useCallback(() => {
    const session = {
      id: Date.now(),
      date: new Date().toISOString(),
      config: configRef.current,
      answers: answersRef.current,
    }
    setLastSession(session)
    onSessionComplete(session)
    setPhase('results')
  }, [onSessionComplete])

  // Reset timer and start tick on each new question
  useEffect(() => {
    if (phase !== 'quiz') return
    setPerQTime(PER_Q_SECS)
    setElapsed(0)
    questionStartRef.current = Date.now()
    autoAdvancedRef.current = false

    const isExam = configRef.current?.mode === 'exam'
    const interval = setInterval(() => {
      setElapsed(Math.round((Date.now() - questionStartRef.current) / 1000))
      if (isExam) setPerQTime(t => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [phase, currentIdx])

  // Auto-advance when exam timer hits 0
  useEffect(() => {
    if (perQTime > 0 || phase !== 'quiz' || configRef.current?.mode !== 'exam') return
    if (autoAdvancedRef.current) return
    autoAdvancedRef.current = true

    const q = quizQuestionsRef.current[currentIdxRef.current]
    if (!q) return
    answersRef.current = [
      ...answersRef.current,
      { questionId: q.id, selectedAnswer: null, correct: false, timeSpent: PER_Q_SECS },
    ]
    const nextIdx = currentIdxRef.current + 1
    if (nextIdx < quizQuestionsRef.current.length) {
      setCurrentIdx(nextIdx)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      finishQuiz()
    }
  }, [perQTime, phase, finishQuiz])

  const handleStart = useCallback((cfg) => {
    let pool = cfg.domain === 'all' ? [...questions] : questions.filter(q => q.domain === cfg.domain)
    if (cfg.difficulty === 'hard') {
      const filtered = pool.filter(q => q.difficulty === 'hard' || q.difficulty === 'veryHard')
      if (filtered.length >= cfg.count) pool = filtered
    } else if (cfg.difficulty === 'veryHard') {
      const filtered = pool.filter(q => q.difficulty === 'veryHard')
      if (filtered.length >= 5) pool = filtered
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, cfg.count)
    answersRef.current = []
    setConfig(cfg)
    setQuizQuestions(shuffled)
    setCurrentIdx(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setPhase('quiz')
  }, [])

  const handleAnswer = (idx) => {
    if (showResult) return
    setSelectedAnswer(idx)
    if (config?.mode === 'practice') setShowResult(true)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return
    const q = quizQuestions[currentIdx]
    const timeSpent = Math.round((Date.now() - questionStartRef.current) / 1000)
    answersRef.current = [
      ...answersRef.current,
      { questionId: q.id, selectedAnswer, correct: selectedAnswer === q.answer, timeSpent },
    ]
    const nextIdx = currentIdx + 1
    if (nextIdx < quizQuestions.length) {
      setCurrentIdx(nextIdx)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      finishQuiz()
    }
  }

  if (phase === 'setup') return <QuizSetup onStart={handleStart} />
  if (phase === 'results' && lastSession) return (
    <QuizResults session={lastSession} questions={quizQuestions}
      onRestart={() => { answersRef.current = []; setPhase('setup') }}
      onReview={() => setPhase('review')}
      onLearn={() => onTabChange?.('learn')} />
  )
  if (phase === 'review' && lastSession) return (
    <ReviewMode session={lastSession} quizQuestions={quizQuestions} onBack={() => setPhase('results')} />
  )

  const q = quizQuestions[currentIdx]
  if (!q) return null
  const progress = (currentIdx / quizQuestions.length) * 100
  const completedAnswers = answersRef.current
  const avgSoFar = completedAnswers.length > 0
    ? Math.round(completedAnswers.reduce((s, a) => s + (a.timeSpent || 0), 0) / completedAnswers.length)
    : null

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-medium text-gray-700">Q {currentIdx + 1}/{quizQuestions.length}</span>
            {avgSoFar !== null && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${avgSoFar <= TARGET_PACE ? 'bg-green-50 text-green-700' : 'bg-amber-50 text-amber-700'}`}>
                {avgSoFar <= TARGET_PACE ? '✓ Good pace' : `Avg ${avgSoFar}s/q`}
              </span>
            )}
          </div>
          {config?.mode === 'exam'
            ? <CircularTimer timeLeft={perQTime} total={PER_Q_SECS} />
            : <span className="text-xs text-gray-400 flex items-center gap-1"><Clock size={12} />{elapsed}s</span>
          }
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <QuizQuestion
        question={q}
        questionIndex={currentIdx}
        total={quizQuestions.length}
        mode={config?.mode}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        showResult={showResult}
      />

      {selectedAnswer !== null && (
        <button onClick={handleNext}
          className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors">
          {currentIdx < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  )
}
