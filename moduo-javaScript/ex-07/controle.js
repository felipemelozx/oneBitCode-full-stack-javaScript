//   Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.



let quantiaInicial = parseFloat(prompt("Qual a quantia inicial de dinheiro disponivel ?"))

let opcao = parseFloat(prompt(`Seu dinheiro atual e R$${quantiaInicial}\n Voce deseja\n 1-Aumentar.\n 2-Diminuir.\n 3-Sair.`))

let quantiaDisponivel = quantiaInicial

while (opcao !== 4) {
    switch (opcao) {
        case 1:
            let quantiaAdicional = parseFloat(prompt("Digite o valor que queira aumentar."))
            quantiaDisponivel += quantiaAdicional
            opcao = parseFloat(prompt(`Seu dinheiro atual e R$${quantiaDisponivel}\n Voce deseja\n 1-Aumentar.\n 2-Diminuir.\n 3-Sair.`))
            break
        case 2:
            quantiaSub = parseFloat(prompt("Digite o valor que queira diminuir."))
            quantiaDisponivel -= quantiaSub
            opcao = parseFloat(prompt(`Seu dinheiro atual e R$${quantiaDisponivel}\n Voce deseja\n 1-Aumentar.\n 2-Diminuir.\n 3-Sair.`))
            break
        case 3:
            alert("finalizando o programa...")
            opcao = 4
            break
        default:
            alert("Digite uma opcao valida.")
    }
}