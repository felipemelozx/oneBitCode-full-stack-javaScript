import fs from "node:fs"

export default function updateFile(name, conteudo){
  fs.writeFile(name, conteudo, (err, data)=>{
    if(err){
      console.log("erro ao atualizar arquivo.")
      return
    }
    console.log("Arquivo atualizado com sucesso.")
    console.log(data)
  })
}

updateFile("./meuarquivo.txt", "testando a funcao update file")