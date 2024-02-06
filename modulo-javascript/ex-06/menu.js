// Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.

let opcoes = parseFloat(prompt("Escolha um opcao\n 1- home \n 2- about \n 3- perfil \n 4- ganhos \n 5-sair"))

while (opcoes != 5) {
    switch (opcoes) {
        case 1:
            alert("voce esta na home")
            opcoes = parseFloat(prompt("Escolha um opcao\n 1- home \n 2- about \n 3- perfil \n 4- ganhos \n 5-sair"))
            break
        case 2:
            alert("voce esta na about")
            opcoes = parseFloat(prompt("Escolha um opcao\n 1- home \n 2- about \n 3- perfil \n 4- ganhos \n 5-sair"))
            break
        case 3:
            alert("voce esta no perfil")
            opcoes = parseFloat(prompt("Escolha um opcao\n 1- home \n 2- about \n 3- perfil \n 4- ganhos \n 5-sair"))
            break
        case 4:
            alert("voce esta nos ganhos")
            opcoes = parseFloat(prompt("Escolha um opcao\n 1- home \n 2- about \n 3- perfil \n 4- ganhos \n 5-sair"))
            break
        case 5:
            alert("saindo")
            break
        default:
            alert("digite uma opcao valida.")
            opcoes = parseFloat(prompt("Escolha um opcao\n 1- home \n 2- about \n 3- perfil \n 4- ganhos \n 5-sair"))
    }
}