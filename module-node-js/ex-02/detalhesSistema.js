const os = require("node:os")
const path = require("node:path")
const fs = require("node:fs")
const systemPlatformMap = {
  "win32": "Windows",
  "linux": "Linux",
  "darwin": "MacOS",
  "freebsd": "FreeBSD"
}
function detalhesPC() {
  const sistema = systemPlatformMap[os.platform()]
  const modeloProcessador = os.cpus()[0].model
  const arquitetura = os.arch()
  const tempoAtivo = os.uptime()
  const usoMemoriaRam = os.freemem()

  const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
  const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60

  const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
  const uptimeHoursInSeconds = uptimeHours * 60 * 60

  const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
  const uptimeMinsInSeconds = uptimeMins * 60

  const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)

  const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`


  console.clear()
  console.log('Detalhes do sistema operacional.')
  console.log('O seu sistema operacional e: ' + sistema)
  console.log('A sua arquitetura e: ' + arquitetura)
  console.log('O modelo do processador: ' + modeloProcessador)
  console.log('Uso de memoria ram: ' + usoMemoriaRam)
  console.log('Tempo ativo: ' + uptime +' Dias')

}
setInterval(() => {
  detalhesPC()
}, 1000)