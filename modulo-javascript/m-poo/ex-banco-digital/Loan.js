const Installment = require("./Installment")

module.exports = class Loan {
    static #taxaJuros = 1.05

    constructor(value, numberparcelas) {
        this.value = value
        this.data = new Date()
        this.numberparcelas = []
        for(let i = 1; i <= numberparcelas; i++){
            this.numberparcelas.push(new Installment((value * Loan.#taxaJuros)/ numberparcelas, i ))
        }
    }
    get taxaJuros() {
        return Loan.#taxaJuros
    }
    static set taxaJuros(newtaxa) {
        Loan.#taxaJuros = + 1 + (newtaxa / 100)
    }
}


