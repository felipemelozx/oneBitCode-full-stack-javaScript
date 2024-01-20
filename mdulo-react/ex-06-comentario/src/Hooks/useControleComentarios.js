import { useState } from 'react'

export default function useControleComentarios() {

  const [comes, setComentarios] = useState(() => {

    const storageCom = localStorage.getItem("obc-comentario-lib")
    if (!storageCom) return []
    const comentarioArray = JSON.parse(storageCom)
    return comentarioArray
  })

  const addComentarios = ({ email, comentario }) => {
    const id = Math.floor(Math.random() * 10000000)
    const come = { email, comentario, id }
    setComentarios(state => {
      const newState = [...state, come]
      localStorage.setItem("obc-comentario-lib", JSON.stringify(newState))
      return newState; 
    })
  }
  
  return { comes, addComentarios }
}



