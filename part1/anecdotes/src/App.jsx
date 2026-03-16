import { useState } from "react"

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later",
    "Premature optimization is the root of all evil",
    "Debugging is twice as hard as writing the code in the first place",
    "Any fool can write code that a computer can understand",
    "Programming without tests is like a building without inspections"
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const nextAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const vote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const maxVotes = Math.max(...votes)
  const index = votes.indexOf(maxVotes)

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <button onClick={vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <h1>Anecdote with most votes</h1>

      <p>{anecdotes[index]}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App