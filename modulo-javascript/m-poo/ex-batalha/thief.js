/* Uma classe Thief que representa um personagem de um tipo diferente.Ela deve herdar os atributos 
de Character, mas deve sobrescrever o método de ataque para que o cálculo seja de duas vezes a 
diferença entre os pontos de ataque do personagem atual e a defesa do alvo.
Ela deve herdar os atributos de Character, mas deve sobrescrever o método de ataque para que o
cálculo seja de duas vezes a diferença entre os pontos de ataque do personagem atual e a defesa 
do alvo. */

const Character = require("./character")


class Thief extends Character{
    atacar(alvo){
        if(this.ataque >= alvo.defesa){
            const dano = (this.ataque - alvo.defesa) * 2
            alvo.life -= dano 
            if(alvo.life <= 0){
                console.log('Você eliminou seu adversario.')
            }else{
                console.log(`Você causou ${dano} de dano, ${alvo.name} ficou com ${alvo.life} de vida.`)
            }
        }else{
            console.log('seu poder de ataque e baixo comparado a defesa do adversario. Causo 0 de dano')
        }
    }
}
module.exports = Thief
