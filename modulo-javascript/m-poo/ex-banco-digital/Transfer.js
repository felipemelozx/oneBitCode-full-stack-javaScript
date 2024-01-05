/* Transfer: Deverá possuir atributos para: o usuário que enviou a transferência, o que recebeu a transferência,
o valor e a data de criação. */

mdoule.exports = class Transfer {
    constructor(userReceip, userTransfer, value){
        this.userReceip = userReceip
        this.userTransfer = userTransfer
        this.value = value
        this.date = new Date()
    }
}