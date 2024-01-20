
import useGameColletion from './Hooks/useGameColletion'
import Game from './components/Game'
import NewGameForm from './components/NewGameForm'

export default function App() {
  const {games, addGame,removeGame} = useGameColletion()
  return (
    <div className="app">
      <h1>Biblioteca de jogos</h1>
      <NewGameForm
        addGame={addGame}
    
      />
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemover={() => removeGame(game.id)}
            />
          </div>))}
      </div>
    </div>
  )
}