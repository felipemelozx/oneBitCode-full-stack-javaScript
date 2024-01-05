/* Loan:  
Também deverá possuir um atributo para as parcelas do empréstimo, sendo que o 
construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas 
(instâncias de Installments) e armazená-las nesse atributo. */



class Loan {
    #taxaDeJurosAnual = 12
    
    constructor(value, numberparcelas){
        this.value = value
        this.data = new Date()
        this.numberparcelas = numberparcelas
    }

    calcularParcelas(){
        
    }



    get taxaDeJurosAnual(){
        return this.#taxaDeJurosAnual
    }
    set modificarTaxa(newtaxa){
        this.#taxaDeJurosAnual = newtaxa
    }
}


