const fs = require("node:fs")

function writeLog (){
  const path = './log'
  let exixte = false
  fs.access(path,  (err)=>{
      if(err){
        writeNew(conteudo)
      }
  })

}