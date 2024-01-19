import { useState } from 'react'
import './App.css'

function App() {
  const [senha, setSenha] = useState("")
  const [copyText, setCopyText] = useState("copiar")

  function generater() {
    const caracters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let novaSenha = ""

    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * caracters.length)
      novaSenha += caracters[position]
    }
    setSenha(novaSenha)
    setCopyText('copiar')
  }

  function copy() {
    if (senha === "") {
      alert("E necessario gerar uma senha.")
    } else {
      window.navigator.clipboard.writeText(senha)
      setCopyText("copiado!")
    }

  }

  return (
    <div className="app">
      <h1>Gerador de Senha</h1>
      <button onClick={generater}>Gerar</button>
      <button onClick={copy}>{copyText}</button>
      <h2>{senha}</h2>
    </div>
  )
}

export default App
