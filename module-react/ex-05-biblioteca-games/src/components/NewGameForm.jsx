import { useState } from 'react'
import { TextInput } from './TextInput'

export default function NewGameForm({ addGame }) {
  const [title, setTitle] = useState('')
  const [cover, setCover] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()
    addGame({ title, cover })
    setCover('')
    setTitle('')
  }


  return (
    < form onSubmit={handleSubmit} >
      <TextInput value={title} setValue={setTitle}  label={'Nome'}/>
      <TextInput value={cover} setValue={setCover} label={"Capa"}  />
      <button type='submit'>Adicionar a Biblioteca</button>
    </ form >)
}