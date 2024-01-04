/* Uma classe Mage que representa outro tipo de personagem e também herda de Character. No entanto, essa classe também 
deve ter um atributo para pontos de magia. Além disso, ela também deve sobrescrever o método de ataque para que o cálculo
utilize os pontos de ataque somados aos pontos de magia. No entanto, essa classe também deve ter um atributo para pontos
de magia.
A classe Mage também deverá ter um outro método exclusivo que servirá para aumentar os pontos de vida de um personagem 
alvo (passado como argumento do método) em um valor de duas vezes os pontos de magia do personagem atual. */

const Character = require("./character");


class Mage extends Character {
    magicPoint = 0
    constructor( name, life, ataque, defesa, pontosmagicos) {
        super( name, life, ataque, defesa)
        this.magicPoint= pontosmagicos
    }
    atacar(alvo) {
        if (this.ataque + this.magicPoint >= alvo.defesa) {
            const dano = (this.ataque + this.magicPoint) - alvo.defesa
            alvo.life -= dano
            if (alvo.life <= 0) {
                console.log('Você eliminou seu adversario.')
            } else {
                console.log(`Você causou ${dano} de dano, ${alvo.name} ficou com ${alvo.life} de vida.`)
            }
        } else {
            console.log('seu poder de ataque e baixo comparado a defesa do adversario. Causo 0 de dano')
        }
    }
    cura(alvo) {
        const cura = this.magicPoint * 2
        alvo.life += cura
        console.log(`Você curou ${alvo.name}, seus pontos de vida agora e ${alvo.life}`)
    }
}

module.exports = Mage