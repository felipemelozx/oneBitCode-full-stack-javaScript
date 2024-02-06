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

  const memoriaLivre = os.freemem() / 1024 / 1024 / 1024
  const ramTotal = os.totalmem() / 1024 / 1024 / 1024
  const usoMemoriaRam = ramTotal - memoriaLivre
  const ramUsagePercent = (usoMemoriaRam / ramTotal) * 100

  const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24)
  const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60
  const uptimeHours = Math.floor((os.uptime() - uptimeDaysInSeconds) / 60 / 60)
  const uptimeHoursInSeconds = uptimeHours * 60 * 60
  const uptimeMins = Math.floor((os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60)
  const uptimeMinsInSeconds = uptimeMins * 60
  const uptimeSecs = Math.floor(os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds - uptimeMinsInSeconds)
  const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`

  return { uptime, sistema, modeloProcessador, arquitetura, usoMemoriaRam, ramTotal, ramUsagePercent }
}
function saveLog(info) {
  const log = 'Detalhes do sistema operacional. | O seu sistema operacional e: ' + info.sistema + ' | A sua arquitetura e: ' + info.arquitetura + ' | O modelo do processador: ' + info.modeloProcessador
  ' | Uso de memoria ram: ' + info.usoMemoriaRam.toFixed(2) + ' GB' + ' / ' + info.ramTotal.toFixed(2) + ' GB ' + info.ramUsagePercent.toFixed(2) + '%'
  'Tempo ativo: ' + info.uptime + ' Dias'

  const caminhoLog = path.join("/", "log")
  if (!fs.existsSync(caminhoLog)) {
    fs.mkdirSync(caminhoLog)
  }
  const logFilePath = path.join(caminhoLog, "log.txt")
  fs.appendFileSync(logFilePath, log)
}
function printLog(info) {
  console.clear()
  console.log('Detalhes do sistema operacional.')
  console.log('O seu sistema operacional e: ' + info.sistema)
  console.log('A sua arquitetura e: ' + info.arquitetura)
  console.log('O modelo do processador: ' + info.modeloProcessador)
  console.log('Uso de memoria ram: ' + info.usoMemoriaRam.toFixed(2) + ' GB' + ' / ' + info.ramTotal.toFixed(2) + ' GB ' + info.ramUsagePercent.toFixed(2) + '%')
  console.log('Tempo ativo: ' + info.uptime + ' Dias')
}
setInterval(() => {
printLog(detalhesPC())
saveLog(detalhesPC())
}, 1000)