import { useState } from 'react'

export default function App() {
  const [games, setGames] = useState([])
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 10000000)
    const game = { id, title, cover }
    setGames(state => [...state, game])
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
              <button>
                Remover
              </button>
            </div>
          </div>))}
      </div>
    </div>
  )
}