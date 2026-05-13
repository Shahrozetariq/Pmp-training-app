import { useState, useEffect, useCallback } from 'react'
import { CheckCircle, XCircle, Clock, ChevronRight, RotateCcw, Filter, Trophy, AlertCircle } from 'lucide-react'
import { questions } from '../data/questions.js'
import { domains } from '../data/topics.js'

const DOMAIN_COLORS = { people: 'text-blue-600 bg-blue-50', process: 'text-green-600 bg-green-50', business: 'text-amber-600 bg-amber-50' }

function QuizSetup({ onStart }) {
  const [domain, setDomain] = useState('all')
  const [mode, setMode] = useState('practice')
  const [count, setCount] = useState(20)

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h2 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Filter size={18} className="text-blue-500" />
          Configure Your Quiz
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Domain</label>
            <div className="grid grid-cols-2 gap-2">
              {[{ id: 'all', label: 'All Domains' }, ...domains.map(d => ({ id: d.id, label: d.name }))].map(opt => (
                <button
                  key={opt.id}
                  onClick={() => setDomain(opt.id)}
                  className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                    domain === opt.id ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Mode</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setMode('practice')}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-colors ${mode === 'practice' ? 'bg-green-600 text-white border-green-600' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
              >
                Practice
                <p className="text-xs font-normal opacity-80">See explanations</p>
              </button>
              <button
                onClick={() => setMode('exam')}
                className={`py-2.5 px-3 rounded-lg border text-sm font-medium transition-colors ${mode === 'exam' ? 'bg-orange-600 text-white border-orange-600' : 'border-gray-200 text-gray-700 hover:bg-gray-50'}`}
              >
                Exam Sim
                <p className="text-xs font-normal opacity-80">Timed, no hints</p>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Questions: <span className="font-bold text-blue-600">{count}</span>
            </label>
            <input
              type="range"
              min={5}
              max={60}
              step={5}
              value={count}
              onChange={e => setCount(Number(e.target.value))}
              className="w-full accent-blue-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>5</span>
              <span>60</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-sm text-blue-800 font-medium">PMP Exam Facts</p>
        <ul className="text-xs text-blue-700 mt-1.5 space-y-0.5 list-disc list-inside">
          <li>180 questions in 230 minutes (~1.3 min/question)</li>
          <li>~76 People | ~90 Process | ~14 Business Environment</li>
          <li>Predictive, Agile, and Hybrid approaches tested</li>
          <li>Scenario-based, situational judgment questions</li>
        </ul>
      </div>

      <button
        onClick={() => onStart({ domain, mode, count })}
        className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-semibold text-base hover:bg-blue-700 transition-colors"
      >
        Start Quiz →
      </button>
    </div>
  )
}

function QuizQuestion({ question, questionIndex, total, mode, onAnswer, selectedAnswer, showResult }) {
  const isCorrect = selectedAnswer === question.answer
  const domainColor = DOMAIN_COLORS[question.domain] || ''

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${domainColor}`}>
          {question.domain.charAt(0).toUpperCase() + question.domain.slice(1)}
        </span>
        <span className="text-sm text-gray-500">{questionIndex + 1} / {total}</span>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <p className="text-gray-900 font-medium leading-relaxed">{question.question}</p>
      </div>

      <div className="space-y-2.5">
        {question.options.map((option, i) => {
          let className = 'w-full text-left p-4 rounded-xl border text-sm transition-all '
          if (!showResult) {
            className += selectedAnswer === i
              ? 'border-blue-500 bg-blue-50 text-blue-800 font-medium'
              : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 text-gray-700'
          } else {
            if (i === question.answer) {
              className += 'border-green-400 bg-green-50 text-green-800 font-medium'
            } else if (i === selectedAnswer && selectedAnswer !== question.answer) {
              className += 'border-red-400 bg-red-50 text-red-800'
            } else {
              className += 'border-gray-100 bg-gray-50 text-gray-400'
            }
          }
          return (
            <button
              key={i}
              className={className}
              onClick={() => !showResult && onAnswer(i)}
              disabled={showResult}
            >
              <span className="flex items-start gap-2">
                <span className="font-semibold flex-shrink-0">
                  {showResult && i === question.answer && <CheckCircle size={16} className="text-green-500 inline mr-1" />}
                  {showResult && i === selectedAnswer && selectedAnswer !== question.answer && <XCircle size={16} className="text-red-500 inline mr-1" />}
                  {String.fromCharCode(65 + i)}.
                </span>
                {option}
              </span>
            </button>
          )
        })}
      </div>

      {showResult && mode === 'practice' && (
        <div className={`rounded-xl p-4 border ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <p className={`font-semibold text-sm mb-1 flex items-center gap-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? <CheckCircle size={16} /> : <XCircle size={16} />}
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </p>
          <p className="text-sm text-gray-700">{question.explanation}</p>
        </div>
      )}
    </div>
  )
}

function QuizResults({ session, questions: quizQuestions, onRestart, onReview }) {
  const correct = session.answers.filter(a => a.correct).length
  const total = session.answers.length
  const pct = Math.round((correct / total) * 100)

  const domainBreakdown = {}
  session.answers.forEach(a => {
    const q = quizQuestions.find(q => q.id === a.questionId)
    if (!q) return
    if (!domainBreakdown[q.domain]) domainBreakdown[q.domain] = { correct: 0, total: 0 }
    domainBreakdown[q.domain].total++
    if (a.correct) domainBreakdown[q.domain].correct++
  })

  const grade = pct >= 75 ? 'Pass' : pct >= 61 ? 'Borderline' : 'Needs Work'
  const gradeColor = pct >= 75 ? 'text-green-600' : pct >= 61 ? 'text-yellow-600' : 'text-red-600'
  const gradeBg = pct >= 75 ? 'bg-green-50 border-green-200' : pct >= 61 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200'

  const weakAreas = Object.entries(domainBreakdown)
    .filter(([, { correct, total }]) => total > 0 && (correct / total) < 0.7)
    .map(([domain]) => domain)

  return (
    <div className="space-y-5">
      <div className={`rounded-2xl p-6 border text-center ${gradeBg}`}>
        <Trophy size={36} className={`mx-auto mb-2 ${gradeColor}`} />
        <p className={`text-4xl font-bold ${gradeColor}`}>{pct}%</p>
        <p className={`font-semibold text-lg ${gradeColor}`}>{grade}</p>
        <p className="text-gray-600 text-sm mt-1">{correct} correct out of {total} questions</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
        <h3 className="font-semibold text-gray-900 mb-3">Domain Breakdown</h3>
        <div className="space-y-3">
          {Object.entries(domainBreakdown).map(([domain, { correct, total }]) => {
            const pct = Math.round((correct / total) * 100)
            const d = domains.find(d => d.id === domain)
            return (
              <div key={domain}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 capitalize">{domain}</span>
                  <span className="font-medium" style={{ color: d?.color }}>{pct}% ({correct}/{total})</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: d?.color }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {weakAreas.length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="font-semibold text-amber-800 flex items-center gap-2">
            <AlertCircle size={16} />
            Topics to Review
          </p>
          <ul className="text-sm text-amber-700 mt-1.5 space-y-0.5 list-disc list-inside">
            {weakAreas.map(d => <li key={d} className="capitalize">{d} domain questions</li>)}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <button onClick={onReview} className="border border-blue-500 text-blue-600 rounded-xl py-3 font-medium hover:bg-blue-50 transition-colors">
          Review Answers
        </button>
        <button onClick={onRestart} className="bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
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
        <button onClick={onBack} className="text-sm text-blue-600 font-medium flex items-center gap-1">
          ← Back to Results
        </button>
        <span className="text-sm text-gray-500">{idx + 1}/{session.answers.length}</span>
      </div>

      <QuizQuestion
        question={question}
        questionIndex={idx}
        total={session.answers.length}
        mode="practice"
        onAnswer={() => {}}
        selectedAnswer={answer.selectedAnswer}
        showResult={true}
      />

      <div className="flex gap-3">
        <button onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0} className="flex-1 border border-gray-200 rounded-xl py-3 text-sm disabled:opacity-40">
          ← Previous
        </button>
        <button onClick={() => setIdx(i => Math.min(session.answers.length - 1, i + 1))} disabled={idx === session.answers.length - 1} className="flex-1 bg-blue-600 text-white rounded-xl py-3 text-sm disabled:opacity-40">
          Next →
        </button>
      </div>
    </div>
  )
}

export default function Questionnaire({ quizSessions, onSessionComplete }) {
  const [phase, setPhase] = useState('setup')
  const [config, setConfig] = useState(null)
  const [quizQuestions, setQuizQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState([])
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [timeLeft, setTimeLeft] = useState(0)
  const [lastSession, setLastSession] = useState(null)

  const handleStart = useCallback((cfg) => {
    const pool = cfg.domain === 'all' ? questions : questions.filter(q => q.domain === cfg.domain)
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, cfg.count)
    setConfig(cfg)
    setQuizQuestions(shuffled)
    setCurrentIdx(0)
    setAnswers([])
    setSelectedAnswer(null)
    setShowResult(false)
    if (cfg.mode === 'exam') setTimeLeft(cfg.count * 78)
    setPhase('quiz')
  }, [])

  useEffect(() => {
    if (phase !== 'quiz' || config?.mode !== 'exam' || timeLeft <= 0) return
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timer); finishQuiz(); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [phase, config?.mode])

  const handleAnswer = (optionIdx) => {
    setSelectedAnswer(optionIdx)
    if (config.mode === 'practice') setShowResult(true)
  }

  const handleNext = () => {
    if (selectedAnswer === null) return
    const question = quizQuestions[currentIdx]
    const isCorrect = selectedAnswer === question.answer
    const newAnswers = [...answers, { questionId: question.id, selectedAnswer, correct: isCorrect }]
    setAnswers(newAnswers)

    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(i => i + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      finishQuiz(newAnswers)
    }
  }

  const finishQuiz = (finalAnswers) => {
    const ans = finalAnswers || answers
    const session = {
      id: Date.now(),
      date: new Date().toISOString(),
      config,
      answers: ans,
    }
    setLastSession(session)
    onSessionComplete(session)
    setPhase('results')
  }

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

  if (phase === 'setup') return <QuizSetup onStart={handleStart} />
  if (phase === 'results' && lastSession) return <QuizResults session={lastSession} questions={quizQuestions} onRestart={() => setPhase('setup')} onReview={() => setPhase('review')} />
  if (phase === 'review' && lastSession) return <ReviewMode session={lastSession} quizQuestions={quizQuestions} onBack={() => setPhase('results')} />

  const question = quizQuestions[currentIdx]
  const progress = ((currentIdx + (showResult ? 1 : 0)) / quizQuestions.length) * 100

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Question {currentIdx + 1} of {quizQuestions.length}</span>
          {config?.mode === 'exam' && (
            <span className={`text-sm font-semibold flex items-center gap-1 ${timeLeft < 300 ? 'text-red-600' : 'text-gray-600'}`}>
              <Clock size={14} />
              {formatTime(timeLeft)}
            </span>
          )}
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <QuizQuestion
        question={question}
        questionIndex={currentIdx}
        total={quizQuestions.length}
        mode={config?.mode}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
        showResult={showResult || config?.mode === 'exam' && showResult}
      />

      {(selectedAnswer !== null) && (
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        >
          {currentIdx < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          <ChevronRight size={18} />
        </button>
      )}
    </div>
  )
}
