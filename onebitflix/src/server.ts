import express from "express"
import { sequelize } from "./database"
import { adminJs, adminJsRouter } from "./adiminjs"

const app = express()

app.use(express.static('public'))
app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  await sequelize.authenticate().then(() => {
    console.log('Conectado ao BD.')
  }).catch((err) => {
    console.log("algo deu errado" + err)
  })
  console.log("serve iniciado na porta " + PORT)
})