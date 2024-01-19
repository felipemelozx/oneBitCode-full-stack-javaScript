import { useState } from 'react'
import './App.css'

function App() {
  const [senha, setSenha] = useState("")
  const [copyText, setCopyText] = useState("copiar")
  const [tamanhoSenha, setTamanhoSenha] = useState(10)
  function generater() {
    const caracters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let novaSenha = ""

    for (let i = 0; i < tamanhoSenha; i++) {
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
      <div>
        <label htmlFor="tamanhoSenha">Tamanho: </label>
        <input 
        type="number" 
        id='tamanhoSenha'
        min={7}
        value={tamanhoSenha}
        onChange={(ev)=>{ setTamanhoSenha(ev.target.value)}}/>
      </div>
      <button onClick={generater}>Gerar senha com tamnho {tamanhoSenha}</button>
      <button onClick={copy}>{copyText}</button>
      <h2>{senha}</h2>
    </div>
  )
}

export default App
