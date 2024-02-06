const App = require("./App")


App.createdUser('felipe@gmail.com', 'felipe')
App.createdUser('mateus@gmail.com', 'mateus')
App.createdUser('vinicius@gmail.com', 'vinicius')

App.deposit('felipe@gmail.com', 1000)
App.transfer('felipe@gmail.com', 'mateus@gmail.com', 50)


App.changeLoandTaxa(10)
App.takeLoan('vinicius@gmail.com', 5000, 29)


console.log(App.findUser('felipe@gmail.com'))
console.log(App.findUser('vinicius@gmail.com').account.loans[0])
console.log(App.findUser('mateus@gmail.com'))
