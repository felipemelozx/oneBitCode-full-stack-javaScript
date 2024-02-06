/*
Ela deverá possuir atributos para nome, pontos de vida, de ataque e de defesa.
Ela também deverá possuir um método para atacar, que tem como argumento o personagem alvo (outra instância de Character)
e subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do personagem atual e a defesa do alvo. 
 */

class Character {
    constructor(name, Life, ataque, defesa) {
        this.name = name
        this.life = Life
        this.ataque = ataque
        this.defesa = defesa
    }
    atacar(alvo) {
        if (this.ataque >= alvo.defesa) {
            const dano = this.ataque - alvo.defesa
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
}

module.exports = Character