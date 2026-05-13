import { useState, useEffect } from 'react'
import { RotateCcw, Bell, BellOff, Filter, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import { flashcards } from '../data/flashcards.js'
import { calculateNextReview, getSpacedRepetitionDue } from '../utils/scoring.js'

const DOMAIN_COLORS = {
  people: { bg: 'bg-blue-600', light: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  process: { bg: 'bg-green-600', light: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
  business: { bg: 'bg-amber-600', light: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
}

function FlipCard({ card, isFlipped, onFlip }) {
  const colors = DOMAIN_COLORS[card.domain] || DOMAIN_COLORS.process

  return (
    <div className="w-full" style={{ perspective: 1000 }}>
      <div
        className="relative w-full transition-transform duration-500 cursor-pointer"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          minHeight: 260,
        }}
        onClick={onFlip}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${colors.light} ${colors.text} border ${colors.border}`}>
              {card.domain.charAt(0).toUpperCase() + card.domain.slice(1)} — {card.category}
            </span>
            <span className="text-xs text-gray-400">Tap to flip</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <p className="text-lg font-semibold text-gray-800 text-center leading-relaxed">{card.front}</p>
          </div>
          <div className="mt-4 flex justify-center">
            <span className="text-gray-300 text-2xl">?</span>
          </div>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 ${colors.bg} rounded-2xl shadow-md p-6 flex flex-col`}
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-white/70">Answer</span>
            <span className="text-xs text-white/70">Tap to flip back</span>
          </div>
          <div className="flex-1 flex items-center justify-center overflow-y-auto">
            <p className="text-white text-sm leading-relaxed whitespace-pre-line">{card.back}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Flashcards({ flashcardProgress, onUpdateProgress }) {
  const [domain, setDomain] = useState('all')
  const [mode, setMode] = useState('due')
  const [isFlipped, setIsFlipped] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [sessionComplete, setSessionComplete] = useState(false)

  const dueIds = getSpacedRepetitionDue(flashcardProgress)
  const filtered = flashcards.filter(f => {
    if (domain !== 'all' && f.domain !== domain) return false
    if (mode === 'due') return dueIds.includes(f.id)
    return true
  })

  const card = filtered[currentIdx]
  const totalDue = dueIds.length

  const navigate = (dir) => {
    setIsFlipped(false)
    setCurrentIdx(i => Math.max(0, Math.min(filtered.length - 1, i + dir)))
  }

  const handleRate = (difficulty) => {
    if (!card) return
    onUpdateProgress(card.id, { difficulty, nextReview: calculateNextReview(difficulty) })
    setIsFlipped(false)
    if (currentIdx < filtered.length - 1) {
      setCurrentIdx(i => i + 1)
    } else {
      setSessionComplete(true)
    }
  }

  const handleNotifications = async () => {
    if (!('Notification' in window)) {
      alert('Browser notifications are not supported.')
      return
    }
    const perm = await Notification.requestPermission()
    if (perm === 'granted') {
      setNotificationsEnabled(true)
      scheduleNotification()
    }
  }

  const scheduleNotification = () => {
    const now = new Date()
    const nextMorning = new Date(now)
    nextMorning.setDate(nextMorning.getDate() + 1)
    nextMorning.setHours(8, 0, 0, 0)
    const delay = nextMorning.getTime() - now.getTime()
    setTimeout(() => {
      new Notification('PMP 2026 Daily Review', {
        body: `You have ${dueIds.length} flashcards due today! Keep your streak going.`,
        icon: '/pmp.svg',
      })
    }, delay)
  }

  useEffect(() => {
    setCurrentIdx(0)
    setIsFlipped(false)
    setSessionComplete(false)
  }, [domain, mode])

  const reviewed = Object.keys(flashcardProgress).length

  if (sessionComplete || (mode === 'due' && filtered.length === 0)) {
    return (
      <div className="space-y-5">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
          <CheckCircle size={48} className="mx-auto text-green-500 mb-3" />
          <h3 className="text-xl font-bold text-gray-800">
            {filtered.length === 0 ? 'No Cards Due' : 'Session Complete!'}
          </h3>
          <p className="text-gray-500 text-sm mt-1">
            {filtered.length === 0
              ? 'All caught up! Come back tomorrow for new reviews.'
              : 'Great work! You\'ve reviewed all due cards.'}
          </p>
          <div className="mt-4 flex gap-3 justify-center">
            <button onClick={() => { setMode('all'); setSessionComplete(false) }} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
              Study All Cards
            </button>
            <button onClick={() => { setSessionComplete(false); setCurrentIdx(0) }} className="border border-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-700">
              Restart
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
          <h4 className="font-semibold text-gray-800 mb-3">Your Progress</h4>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <p className="text-2xl font-bold text-blue-600">{flashcards.length}</p>
              <p className="text-xs text-gray-500">Total Cards</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">{reviewed}</p>
              <p className="text-xs text-gray-500">Reviewed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-orange-600">{totalDue}</p>
              <p className="text-xs text-gray-500">Due Today</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!card) return null

  return (
    <div className="space-y-4">
      {/* Controls */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-bold text-gray-900 flex items-center gap-2">
            <Filter size={16} className="text-blue-500" />
            Flashcards
          </h2>
          <button
            onClick={notificationsEnabled ? () => setNotificationsEnabled(false) : handleNotifications}
            className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg border font-medium ${
              notificationsEnabled ? 'bg-blue-50 border-blue-200 text-blue-700' : 'border-gray-200 text-gray-600'
            }`}
          >
            {notificationsEnabled ? <Bell size={13} /> : <BellOff size={13} />}
            {notificationsEnabled ? 'Notifications On' : 'Enable Reminders'}
          </button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {[{ id: 'all', label: 'All' }, { id: 'people', label: 'People' }, { id: 'process', label: 'Process' }, { id: 'business', label: 'Business' }].map(opt => (
            <button
              key={opt.id}
              onClick={() => setDomain(opt.id)}
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                domain === opt.id ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {opt.label}
            </button>
          ))}
          <div className="ml-auto flex gap-1.5">
            <button onClick={() => setMode('due')} className={`px-2.5 py-1 rounded-full text-xs font-medium border ${mode === 'due' ? 'bg-orange-500 text-white border-orange-500' : 'border-gray-200 text-gray-600'}`}>
              Due ({totalDue})
            </button>
            <button onClick={() => setMode('all')} className={`px-2.5 py-1 rounded-full text-xs font-medium border ${mode === 'all' ? 'bg-gray-800 text-white border-gray-800' : 'border-gray-200 text-gray-600'}`}>
              All
            </button>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>{currentIdx + 1} / {filtered.length}</span>
        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${((currentIdx + 1) / filtered.length) * 100}%` }} />
        </div>
      </div>

      {/* Card */}
      <FlipCard card={card} isFlipped={isFlipped} onFlip={() => setIsFlipped(f => !f)} />

      {/* Navigation & rating */}
      {!isFlipped ? (
        <div className="flex gap-3">
          <button onClick={() => navigate(-1)} disabled={currentIdx === 0} className="p-3 border border-gray-200 rounded-xl disabled:opacity-30 hover:bg-gray-50">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => setIsFlipped(true)} className="flex-1 bg-blue-600 text-white rounded-xl py-3 font-semibold text-sm flex items-center justify-center gap-2">
            <RotateCcw size={16} />
            Reveal Answer
          </button>
          <button onClick={() => navigate(1)} disabled={currentIdx === filtered.length - 1} className="p-3 border border-gray-200 rounded-xl disabled:opacity-30 hover:bg-gray-50">
            <ChevronRight size={20} />
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-center text-sm text-gray-600 font-medium">How well did you know this?</p>
          <div className="grid grid-cols-3 gap-3">
            <button onClick={() => handleRate('hard')} className="py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 font-semibold text-sm hover:bg-red-100 transition-colors">
              Hard
              <p className="text-xs font-normal">Review in 4h</p>
            </button>
            <button onClick={() => handleRate('medium')} className="py-3 rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-700 font-semibold text-sm hover:bg-yellow-100 transition-colors">
              Got It
              <p className="text-xs font-normal">Review in 1d</p>
            </button>
            <button onClick={() => handleRate('easy')} className="py-3 rounded-xl bg-green-50 border border-green-200 text-green-700 font-semibold text-sm hover:bg-green-100 transition-colors">
              Easy
              <p className="text-xs font-normal">Review in 4d</p>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
