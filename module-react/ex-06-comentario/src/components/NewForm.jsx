import { useState } from "react";


export default function NewForm( {addComentario}) {
  const [email, setEmail] = useState('')
  const [comentario, setComentario] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addComentario({ email, comentario })
    setEmail('')
    setComentario('')
  }

  return (
      <form id="app-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="comentario">Comentario: </label>
        <textarea
          name="comentario"
          id="comentario"
          cols="30"
          rows="10"
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          placeholder="Digite aqui seu comentario..."
        ></textarea>
      <button type="submit" onClick={handleSubmit}>Comentar</button>
      </form>
  )
}