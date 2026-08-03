import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `block px-4 py-2 rounded-lg transition ${
      isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'
    }`

  return (
    <nav className="bg-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-bold text-xl">Habit Tracker 🚀</h2>

        {/* زرار الهامبرجر - يظهر بس على الموبايل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white sm:hidden text-2xl"
        >
          ☰
        </button>

        {/* اللينكات - تظهر جنب بعض على الشاشات الكبيرة */}
        <div className="hidden sm:flex gap-3">
          <NavLink to="/" end className={linkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/habits" className={linkClass}>
            Habits
          </NavLink>
          <NavLink to="/statistics" className={linkClass}>
            Statistics
          </NavLink>
        </div>
      </div>

      {/* قائمة الموبايل - تظهر بس لما تدوس على الهامبرجر */}
      {isOpen && (
        <div className="flex flex-col gap-2 mt-4 sm:hidden">
          <NavLink to="/" end className={linkClass} onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink to="/habits" className={linkClass} onClick={() => setIsOpen(false)}>
            Habits
          </NavLink>
          <NavLink to="/statistics" className={linkClass} onClick={() => setIsOpen(false)}>
            Statistics
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar