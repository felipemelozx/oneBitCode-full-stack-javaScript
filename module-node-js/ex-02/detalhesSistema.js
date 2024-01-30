const os = require("node:os")
const path = require("node:path")

const systemPlatformMap = {
  "win32": "Windows",
  "linux": "Linux",
  "darwin": "MacOS",
  "freebsd": "FreeBSD"
}
function detalhesPC() {
  const modeloProcessador = os.cpus() 
  const arquitetura = os.arch()
  const sistema = os.platform()
  const tempoAtivo = os.uptime()
  const usoMemoriaRam = os.freemem()
  switch (sistema) {
    case 'win32':
      console.log("seu sistema operacional e windows")
      console.log(modeloProcessador[0].model)
      console.log(arquitetura)
      console.log(tempoAtivo)
      console.log((usoMemoriaRam / (1024 * 1024 * 1024)).toFixed(2))
      break;
    case 'linux':
      console.log("seu sistema operacional e Linux")
      break;
    case 'darwin':
      console.log("seu sistema operacional e MacOs")
      break;
    case 'freebsd':
      console.log("seu sistema operacional e FreeBSD")
      break;
  }
}
detalhesPC()