import { LayoutDashboard, BookOpen, HelpCircle, Layers, BarChart2 } from 'lucide-react'

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'learn', label: 'Learn', icon: BookOpen },
  { id: 'quiz', label: 'Quiz', icon: HelpCircle },
  { id: 'flashcards', label: 'Flashcards', icon: Layers },
  { id: 'progress', label: 'Progress', icon: BarChart2 },
]

export default function Navigation({ activeTab, onTabChange }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-56 min-h-screen bg-white border-r border-gray-200 fixed left-0 top-0 z-20">
        <div className="p-5 border-b border-gray-100">
          <h1 className="text-lg font-bold text-blue-700">PMP 2026</h1>
          <p className="text-xs text-gray-500 mt-0.5">Exam Training</p>
        </div>
        <nav className="flex-1 p-3 space-y-1">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">PMI ECO 2021 • PMBOK 8 • Rita Mulcahy</p>
        </div>
      </aside>

      {/* Mobile bottom bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20 flex">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={`flex-1 flex flex-col items-center justify-center py-2 text-xs gap-1 transition-colors ${
              activeTab === id ? 'text-blue-700' : 'text-gray-500'
            }`}
          >
            <Icon size={20} />
            <span className="text-[10px]">{label}</span>
          </button>
        ))}
      </nav>
    </>
  )
}
