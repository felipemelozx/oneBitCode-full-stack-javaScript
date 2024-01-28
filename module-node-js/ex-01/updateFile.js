import fs from "node:fs"

export default function updateFile(conteudo){
  fs.writeFile("./meuarquivo.txt", 'conteudo', (err, data)=>{
    if(err){
      console.log("erro ao atualizar arquivo.")
      return
    }
    console.log("Arquivo atualizado com sucesso.")
    console.log(data)
  })
}