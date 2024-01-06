/* Installment: Deve possuir atributos para: o valor da parcela, o número dela e sua situação (paga ou pendente) */

module.exports = class Installment {
    constructor(value, numberpar) {
        this.value = value
        this.numberpar = numberpar
        this.situacao = `pending`
    }
}