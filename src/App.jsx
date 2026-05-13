import { useState } from 'react'
import Navigation from './components/Navigation.jsx'
import Dashboard from './components/Dashboard.jsx'
import StudyPlan from './components/StudyPlan.jsx'
import Questionnaire from './components/Questionnaire.jsx'
import Flashcards from './components/Flashcards.jsx'
import Progress from './components/Progress.jsx'
import { useLocalStorage } from './hooks/useLocalStorage.js'

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const [studyProgress, setStudyProgress] = useLocalStorage('pmp-study-progress', {
    completedDays: {},
    streak: 0,
    lastStudyDate: null,
    activityDates: {},
  })

  const [quizSessions, setQuizSessions] = useLocalStorage('pmp-quiz-sessions', [])
  const [flashcardProgress, setFlashcardProgress] = useLocalStorage('pmp-flashcard-progress', {})

  const handleToggleDay = (weekIdx, dayIdx) => {
    const key = `${weekIdx}-${dayIdx}`
    const today = new Date().toISOString().split('T')[0]
    setStudyProgress(prev => {
      const completedDays = { ...prev.completedDays }
      const activityDates = { ...prev.activityDates }
      if (completedDays[key]) {
        delete completedDays[key]
      } else {
        completedDays[key] = today
        activityDates[today] = true
      }
      const lastDate = prev.lastStudyDate ? new Date(prev.lastStudyDate) : null
      const todayDate = new Date(today)
      const yesterday = new Date(todayDate)
      yesterday.setDate(yesterday.getDate() - 1)
      const isConsecutive = lastDate && lastDate.toDateString() === yesterday.toDateString()
      const isToday = lastDate && lastDate.toDateString() === todayDate.toDateString()
      const streak = !completedDays[key]
        ? prev.streak
        : isToday
          ? prev.streak
          : isConsecutive
            ? prev.streak + 1
            : 1
      return {
        ...prev,
        completedDays,
        activityDates,
        streak: completedDays[key] !== undefined ? streak : prev.streak,
        lastStudyDate: completedDays[key] !== undefined ? today : prev.lastStudyDate,
      }
    })
  }

  const handleSessionComplete = (session) => {
    setQuizSessions(prev => [...prev, session])
    const today = new Date().toISOString().split('T')[0]
    setStudyProgress(prev => ({
      ...prev,
      activityDates: { ...prev.activityDates, [today]: true },
    }))
  }

  const handleUpdateFlashcard = (cardId, data) => {
    setFlashcardProgress(prev => ({ ...prev, [cardId]: data }))
    const today = new Date().toISOString().split('T')[0]
    setStudyProgress(prev => ({
      ...prev,
      activityDates: { ...prev.activityDates, [today]: true },
    }))
  }

  const pageProps = { studyProgress, quizSessions, flashcardProgress, onTabChange: setActiveTab }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="md:ml-56 pb-24 md:pb-8">
        <div className="max-w-2xl mx-auto px-4 py-6">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-900">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'study' && 'Study Plan'}
              {activeTab === 'quiz' && 'Practice Quiz'}
              {activeTab === 'flashcards' && 'Flashcards'}
              {activeTab === 'progress' && 'My Progress'}
            </h1>
          </div>

          {activeTab === 'dashboard' && (
            <Dashboard {...pageProps} />
          )}
          {activeTab === 'study' && (
            <StudyPlan studyProgress={studyProgress} onToggleDay={handleToggleDay} />
          )}
          {activeTab === 'quiz' && (
            <Questionnaire quizSessions={quizSessions} onSessionComplete={handleSessionComplete} />
          )}
          {activeTab === 'flashcards' && (
            <Flashcards flashcardProgress={flashcardProgress} onUpdateProgress={handleUpdateFlashcard} />
          )}
          {activeTab === 'progress' && (
            <Progress quizSessions={quizSessions} studyProgress={studyProgress} flashcardProgress={flashcardProgress} />
          )}
        </div>
      </main>
    </div>
  )
}
