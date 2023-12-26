// O menu deve ter a opção de salvar um imóvel.
// Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
// Nome do proprietário.
// Quantidade de quartos.
// Quantidade de banheiros.
// Se possui garagem.
// O menu também deve ter a opção de mostrar todos os imóveis salvos.

const imoveisCadastradados = []
let menu = ""

do {
    menu = parseFloat(prompt(`imóveis  cadastrados:\n${imoveisCadastradados.length}\n1- Salvar novo imóvel\n2- Mostra todos imóvel salvos.\n3- Sair`))

    switch (menu) {
        case 1:
            let nomePropietario = prompt("O nome do proprietário?")
            let quantiaQuartos = prompt("O numero de quartos?")
            let quantidadeBanheiro = prompt("Quantidade de banheiros?")
            let garagem = prompt("Possui garagem?")

            imoveisCadastradados.push({ nomePropietario, quantiaQuartos, quantidadeBanheiro, garagem })

            break
        case 2:
            if (imoveisCadastradados.length === 0) {
                alert("Nenhum imovel cadastrado.")
            } else {
                for (let i = 0; i <= imoveisCadastradados.length - 1; i++) {
                    alert(`Nome do proprietário: ${imoveisCadastradados[i].nomePropietario}\nQuantidade de quartos: ${imoveisCadastradados[i].quantiaQuartos}\nQuantidade de banheiros: ${imoveisCadastradados[i].quantidadeBanheiro}\nPossui garagem:${imoveisCadastradados[i].garagem}`)
                }
            }
            break
        case 3:
            alert("saindo...")
            break
        default:
            alert("digite uma altenativa valida.")
    }

} while (menu !== 3)