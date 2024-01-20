import { useState } from 'react'

export default function App() {
  const [games, setGames] = useState(()=> {
    const storedGames = localStorage.getItem("obc-game-lib")
    if(!storedGames) return []
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
      <form >
        <div>
          <label htmlFor="nameGame">Jogo: </label>
          <input
            type="text"
            id='nameGame'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cover">Capa: </label>
          <input
            type="text"
            id='cover'
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <button type='submit' onClick={handleDubmit}>Adicionar a Biblioteca</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.cover} alt="Capa do jogo" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>
                Remover
              </button>
            </div>
          </div>))}
      </div>
    </div>
  )
}