// Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
let menu = parseFloat(prompt("1-Lista de pacientes\n2-Adicionar novo paciente\n3-Consultar\n4-Sair"))

let filaPacientes = []
let filaEspera = []
while (menu !== 4) {
    switch (menu) {
        case 1:
            if (filaPacientes.length === 0) {
                alert('A fila de pacientes esta vazia.')
                menu = parseFloat(prompt("1-Lista de pacientes\n2-Adicionar novo paciente\n3-Consultar\n4-Sair"))
            } else {
                for (let index = 0; index < filaPacientes.length; index++) {
                    const paciente = filaPacientes[index]
                    console.log(paciente)
                    filaEspera.push((` ${index + 1}º ${paciente}`))
                }
                alert(filaEspera)
                menu = parseFloat(prompt("1-Lista de pacientes\n2-Adicionar novo paciente\n3-Consultar\n4-Sair"))
                break
            }
        case 2:
            filaPacientes.push(prompt("Digite o nome do paciente."))
            menu = parseFloat(prompt("1-Lista de pacientes\n2-Adicionar novo paciente\n3-Consultar\n4-Sair"))
            break
        case 3:
            let consultado = filaPacientes.shift()
            filaEspera.shift()
            alert(`O paciente ${consultado} foi atendido.`)
            menu = parseFloat(prompt("1-Lista de pacientes\n2-Adicionar novo paciente\n3-Consultar\n4-Sair"))
            break
        }  

}