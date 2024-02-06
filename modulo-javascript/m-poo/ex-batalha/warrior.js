/* Uma classe Warrior que representa outro tipo de personagem e também herda de Character.Essa classe também deve 
possuir um atributo para pontos de escudo e outro para posição, que poderá ser de ataque ou defesa.
Ela também deve sobrescrever o método de ataque para que ele só aconteça se a posição atual for a 
de ataque.Por fim, ela deverá ter também um método para mudar a posição entre ataque e defesa. 
Enquanto estiver em posição de defesa, os pontos de escudo devem ser somados aos de defesa para 
fazer o cálculo do método de ataque. Ao trocar para a posição de ataque apenas os pontos de defesa
devem ser considerados (comportamento normal). */

const Character = require("./character");

class Warrior extends Character {
    pontosEscudo = 0
    posicao = false
    constructor(name, life, ataque, defesa, pontosEscudo, posicao) {
        super(name, life, ataque, defesa)
        this.pontosEscudo = pontosEscudo
        this.posicao = posicao
    }
    atacar(alvo) {
        if (this.posicao) {
            if (this.ataque >= alvo.defesa) {
                const dano = this.ataque - alvo.defesa
                alvo.life -= dano
                if (alvo.live <= 0) {
                    console.log('Você eliminou seu adversario.')
                } else {
                    console.log(`Você causou ${dano} de dano, ${alvo.name} ficou com ${alvo.life} de vida.`)
                }
            } else {
                console.log('seu poder de ataque e baixo comparado a defesa do adversario. Causo 0 de dano')
            }
        }else{
            console.log('Você esta em posição de defesa. troque para de ataque para poder atacar')
        }
    }
    trocaPosicao(){
        if(this.posicao){
            this.posicao = false
            this.life + this.pontosEscudo
        }else{
            this.posicao = true
            this.life - this.pontosEscudo
        }
    }
}

module.exports = Warrior