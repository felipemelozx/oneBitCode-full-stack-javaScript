const Character = require("./character")
const Mage = require("./mage")
const Thief = require("./thief")
const Warrior = require("./warrior")

const tanus = new Mage('tanus', 5000, 2500, 3000, 1000)
const kratos = new Character('kratos', 5500, 10000, 3000)
const zeus = new Warrior('zeus', 5000, 3000, 3000,5000, true)
const adies = new Thief('adies', 5000, 3200, 3000)

/* kratos.atacar(adies)
kratos.atacar(tanus)
kratos.atacar(zeus)

tanus.atacar(adies)
tanus.atacar(kratos)
tanus.atacar(zeus)
 */
zeus.atacar(adies)
zeus.atacar(tanus)
zeus.atacar(kratos)