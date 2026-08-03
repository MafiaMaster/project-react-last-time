function HabitCard({ name, isDone, onToggle }) {
  return (
    <div
      className={`p-4 rounded-xl shadow-md transition ${
        isDone ? 'bg-green-700' : 'bg-gray-800'
      }`}
    >
      <h3 className="text-white text-lg font-semibold mb-3">{name}</h3>
      <button
        onClick={onToggle}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
          isDone
            ? 'bg-green-500 text-white'
            : 'bg-gray-600 text-gray-200 hover:bg-gray-500'
        }`}
      >
        {isDone ? '✅ Done' : 'Mark as Done'}
      </button>
    </div>
  )
}

export default HabitCard