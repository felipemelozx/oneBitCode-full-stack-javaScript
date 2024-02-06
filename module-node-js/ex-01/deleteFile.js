import fs from 'node:fs'

export default function deleteFile(name){
  fs.unlink(name, (err)=>{
    if(err){
      console.log('Erro ao deletar arquivo.')
    }
    console.log('Arquivo deletado com sucesso.')

  })
}