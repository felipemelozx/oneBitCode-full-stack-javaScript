let cartas = []
let menu = parseFloat(prompt(`O numero de cartas atualmente e de:\n${cartas.length}\n\n1-Adicionar uma carta.\n2-Puxar uma carta.\n3-Sair.`))

while (menu !== 3) {
    switch (menu) {
        case 1:
            let nomeCarta = prompt('Digite o nome da carta que queira adicionar.')

            cartas.push(nomeCarta)

            menu = parseFloat(prompt(`O numero de cartas atualmente e de\n${cartas.length}\n\n1-Adicionar uma carta.\n2-Puxar uma carta.\n3-Sair.`))

            break
        case 2:
            if (cartas.length === 0) {
                alert('O baralho esta vazio\nAdicione uma carta.')
            } else {
                const cartaPuxada = cartas.pop()
                alert(`Voce puxou a carta ${cartaPuxada}`)

            }
            menu = parseFloat(prompt(`O numero de cartas atualmente e de\n${cartas.length}\n\n1-Adicionar uma carta.\n2-Puxar uma carta.\n3-Sair.`))
            break
        default:
            alert("Digite uma opcao valida.")
            menu = parseFloat(prompt(`O numero de cartas atualmente e de\n${cartas.length}\n\n1-Adicionar uma carta.\n2-Puxar uma carta.\n3-Sair.`))
    }
}