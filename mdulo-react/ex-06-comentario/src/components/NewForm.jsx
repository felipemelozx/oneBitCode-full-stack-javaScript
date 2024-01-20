import { useState } from "react";

export default function NewForm() {
  const [email, setEmail] = useState('')
  const [comentario, setComentario] = useState('')
  return (
    <form id="app-form">
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      
      <label htmlFor="comentario">Comentario: </label>
      <textarea name="comentario" id="comentario" cols="30" rows="10"
      value={comentario} 
      onChange={(e) => setComentario(e.target.value)}
      
      ></textarea>
    </form>
  )
}