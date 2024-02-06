/* Treinando a Criação de Classes
um atributo fullname, atribuível na instanciação
um atributo email, atribuível na instanciação
um atributo password, atribuível na instanciação
um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não
aplicada e retorne o valor do preço com o desconto aplicado */

class User {
    constructor(fullname, email, passaword, login) {
        this.fullname = fullname
        this.email = email
        this.passaword = passaword
        this.login = login
    }
    logi = (emailLogin, pasLogin) => {
        if (emailLogin === this.email && this.passaword === pasLogin) {
            console.log('login efetuado com sucesso!')
        } else {
            console.log('Email ou senha incorretos, tente novamente.')
        }
    }
}
const felipe = new User('felipe', 'felipe@gmail.com', 'felipe132', 'felipe@gmail.com')
console.log(felipe)
console.log(felipe.logi('felipe@gmail.com', 'felipe132'))


/* 
um atributo name, atribuível na instanciação
um atributo description, atribuível na instanciação
um atributo price, atribuível na instanciação
um atributo inStock, inicializado sempre em 0
um método addToStock, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
um método calculateDiscount, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado */

class Stoque {
    constructor(name, description, price) {
        this.name = name
        this.Stoque = 0
        this.price = price
        this.descriptoin = description
    }
    addToSock = (quantidade) => {
        this.Stoque = quantidade
    }
    calculeteDiscount = (discount) =>{
        const discountDecimal = discount / 100
        this.price = this.price - (this.price * discountDecimal)
}
}

const iphone = new Stoque('iphone-11', 'melhor celular do momento', 2500)
console.log(iphone)
iphone.addToSock(50)
iphone.calculeteDiscount(30)
console.log(iphone)