// Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:
// área do triângulo: base * altura / 2
// área do retângulo: base * altura
// área do quadrado: lado²
// área do trapézio: (base maior + base menor) * altura / 2
// área do círculo: pi * raio² (considere pi = 3.14)
// Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
let figura
let base
let altura
let resultado
function menu() {
    let opcao 
    do {
        opcao = parseInt(prompt("Qual escolha uma opcao para calcular a area.\n1- Triangulo\n2- retângulo\n3- quadrado\n4- trapézio\n5- círculo\n6- Sair"))
        switch (opcao) {
            case 1:
                figura = "triangulo"
                base = parseInt(prompt("Digite o valor da base."))
                altura = parseInt(prompt("Digite o valor da altura."))
                resultado = calculoTriangulo(base, altura)
                alertResultado(resultado, figura)
                break
            case 2:
                figura = "retângulo"
                base = parseInt(prompt("Digite o valor da base."))
                altura = parseInt(prompt("Digite o valor da altura."))
                resultado = calculoRetangulo(base, altura)
                alertResultado(resultado, figura)
                break
            case 3:
                figura = "quadrado"
                let lado = parseInt(prompt("Digite o valor do lado."))
                resultado = calculoQuadrado(lado)
                alertResultado(resultado, figura)
                break
            case 4:
                figura = "trapézio"
                const baseMaior = parseInt(prompt("Digite o valor da base maior."))
                const baseMenor = parseInt(prompt("Digite o valor da base menor."))
                altura = parseInt(prompt("Digite o valor da altura."))
                resultado = calculoTriangulo(baseMaior, baseMenor, altura)
                alertResultado(resultado, figura)
                break
            case 5:
                figura = "círculo"
                const raio = parseInt(prompt("Digite o valor do raio."))
                resultado = calculoCirculo(raio)
                alertResultado(resultado, figura)
                break
            case 6:
                alert("Saindo...")
                break
            default:
                alert("Digite uma opcao valida")
        }
    }
    while (opcao !== 6)
}


function calculoTriangulo(base, altura) {
    return (base * altura) / 2
}

function calculoRetangulo(base, altura) {
    return base * altura
}

function calculoQuadrado(lado) {
    return lado * lado
}

function calculoTrapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2
}

function calculoCirculo(raio) {
    let pi = 3.14
    return pi * (raio * raio)
}
function alertResultado(resultado, figura) {
    alert(`A area do ${figura} e ${resultado}`)
}
menu()