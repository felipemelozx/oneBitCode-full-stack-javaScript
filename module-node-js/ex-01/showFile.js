import fs from 'node:fs'

export default function showFile(){
  fs.readFile("./meuarquivo.txt", "utf8", (err, data)=>{
    if(err){
      console.log("erro ao ler o arquivo")
      return
    }
    console.log("Arquivo lido com sucesso.")
    console.log(data)
  })
}