import { useState } from 'react'
import Game from './components/Game'
import NewGameForm from './components/NewGameForm'

export default function App() {
  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem("obc-game-lib")
    if (!storedGames) return []
    const gameArray = JSON.parse(storedGames)
    return gameArray
  })
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')


  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 10000000)
    const game = { id, title, cover }
    setGames(state => {
      const newState = [...state, game]
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
    setTitle('');
    setCover('');
  }

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter(game => game.id !== id)
      localStorage.setItem("obc-game-lib", JSON.stringify(newState))
      return newState
    })
  }

  const handleDubmit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
  }
  return (
    <div className="app">
      <h1>Biblioteca de jogos</h1>
      <NewGameForm
      addGame={addGame}
      handleDubmit={handleDubmit}
      />
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemover={()=>removeGame(game.id)}
              />
          </div>))}
      </div>
    </div>
  )
}