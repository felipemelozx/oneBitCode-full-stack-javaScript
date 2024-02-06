import express from "express"
import { sequelize } from "./database"

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  await sequelize.authenticate().then(() => {
    console.log('deu certo')
  }).catch((err) => {
    console.log("algo deu errado" + err)
  })
  console.log("serve iniciado na porta " + PORT)
})