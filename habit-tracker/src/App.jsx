import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import HabitCard from './HabitCard'

const defaultHabits = [
  { id: 1, name: 'Drink Water 💧', isDone: false },
  { id: 2, name: 'Read 20 mins 📚', isDone: false },
  { id: 3, name: 'Exercise 🏃', isDone: false },
]

function Dashboard({ habits, toggleHabit }) {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {habits.map((habit) => (
          <HabitCard
            key={habit.id}
            name={habit.name}
            isDone={habit.isDone}
            onToggle={() => toggleHabit(habit.id)}
          />
        ))}
      </div>
    </div>
  )
}

function AllHabits({ habits, addHabit, deleteHabit }) {
  const [newName, setNewName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (newName.trim() === '') return
    addHabit(newName)
    setNewName('')
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">All Habits</h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter new habit..."
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {habits.map((habit) => (
          <li
            key={habit.id}
            className="flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg"
          >
            <span className="text-white">{habit.name}</span>
            <button
              onClick={() => deleteHabit(habit.id)}
              className="text-red-400 hover:text-red-300 transition"
            >
              🗑️ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Statistics({ habits }) {
  const total = habits.length
  const completed = habits.filter((h) => h.isDone).length
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100)

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-6">Statistics</h1>

      <div className="bg-gray-800 rounded-xl p-6 max-w-md">
        <div className="flex justify-between text-white mb-2">
          <span>Total Habits</span>
          <span className="font-bold">{total}</span>
        </div>
        <div className="flex justify-between text-white mb-4">
          <span>Completed Today</span>
          <span className="font-bold text-green-400">{completed}</span>
        </div>

        <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <p className="text-gray-300 text-sm text-center">
          {percentage}% Completed
        </p>
      </div>
    </div>
  )
}

function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem('habits')
    return saved ? JSON.parse(saved) : defaultHabits
  })

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits))
  }, [habits])

  function toggleHabit(id) {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, isDone: !habit.isDone } : habit
      )
    )
  }

  function addHabit(name) {
    const newHabit = {
      id: Date.now(),
      name,
      isDone: false,
    }
    setHabits([...habits, newHabit])
  }

  function deleteHabit(id) {
    setHabits(habits.filter((habit) => habit.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Dashboard habits={habits} toggleHabit={toggleHabit} />}
        />
        <Route
          path="/habits"
          element={
            <AllHabits
              habits={habits}
              addHabit={addHabit}
              deleteHabit={deleteHabit}
            />
          }
        />
        <Route
          path="/statistics"
          element={<Statistics habits={habits} />}
        />
      </Routes>
    </div>
  )
}

export default App