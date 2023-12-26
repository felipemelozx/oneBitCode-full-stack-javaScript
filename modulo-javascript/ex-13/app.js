

function adicionarJogadores() {
    const name = document.getElementById('fullname').value
    const posicao = document.getElementById('posicao').value
    const numeroCamisa = document.getElementById('numeroCamisa').value
    const indice = numeroCamisa

    const jogador = { name, posicao, numeroCamisa, indice }


    if (name !== '' && posicao !== '' && numeroCamisa !== '') {

        let comfirmar = confirm(`voce deseja realmente escalar o jogador:
    Nome: ${jogador.name}
    Posicao: ${jogador.posicao}
    Numero da Camise: ${jogador.numeroCamisa}`)


        if (comfirmar) {
            let jogadoresTexto = ''
            jogadoresTexto = `\n\n nome: ${jogador.name}\n posição: ${jogador.posicao}\n numero da camisa: ${jogador.numeroCamisa}`


            let ul = document.getElementById('escalacao')
            let newLi = document.createElement("li")
            newLi.innerText = jogadoresTexto
            newLi.id = jogador.indice
            ul.appendChild(newLi)
            document.getElementById('numeroCamisa').value = ''
            document.getElementById('posicao').value = ''
            document.getElementById('fullname').value = ''

        }

    } else {
        alert('Os campos de nome, posicao e numero da camisa sao obrigatorios.\nTente de novo')
    }
}

function removerJogador() {
    const numeroJogador = document.getElementById('removerJogador').value
    const playerToRemove = document.getElementById(numeroJogador)
    
    const comfirmar = confirm(`remover o jogador ${playerToRemove.innerText}`)

    if(comfirmar){
        document.getElementById('escalacao').removeChild(playerToRemove)
        document.getElementById('removerJogador').value = ''
    }
}