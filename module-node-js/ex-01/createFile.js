import fs from "node:fs"

export default function createFile (conteudo){
  fs.writeFile("meuarquivo.txt",conteudo, (err)=>{
    if(err){
      console.log("erro ao criar arquivo")
      return
    }
    console.log("Arquivo criado com sucesso.")
  })
}