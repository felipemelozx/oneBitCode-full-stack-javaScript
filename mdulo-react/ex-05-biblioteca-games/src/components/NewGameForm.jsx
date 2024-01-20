import { useState } from 'react'

export default function NewGameForm({ addGame, handleDubmit} ) {
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')
  return (< form >
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
  </ form >)
}