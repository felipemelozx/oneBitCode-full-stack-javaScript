const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App{
    static #users = []

    static findUser(email){
        const user = this.#users.find(user => user.email === email )
        return user ?? null
    }

    static createdUser(email, fullname){
        const userExists = App.findUser(email)
        if(!userExists){
            this.#users.push(new User(email, fullname))
        }
    }
    static deposit(email, value){
        const user = App.findUser(email)
        if(user){
            const newDeposit = new Deposit(value)
            user.account.addDeposito(newDeposit)
        }
    }
    static transfer(fromUserEmail, toUserEmail, value){
        const fromUser = App.findUser(fromUserEmail)
        const toUser = App.findUser(toUserEmail)
        if(toUser && fromUser){
            const newTransfer = new Transfer(fromUser, toUser, value)
            fromUser.account.addTransfer(newTransfer)
            toUser.account.addTransfer(newTransfer)
        }
    }
    static takeLoan(email, value, numberOfInstallments){
        const user = App.findUser(email)
        if(user){
            const newLoand = new Loan(value, numberOfInstallments)
            user.account.addLoan(newLoand)
        }
    }
    static changeLoandTaxa (newTaxa){
        Loan.taxaJuros = newTaxa
    }
}