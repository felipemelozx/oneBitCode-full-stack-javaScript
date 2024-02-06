const spaceships = []

function AddSpaceships(name: string, pilot: string, crewLimit: Number) {
    const newSpaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
    }
    spaceships.push(newSpaceship)

    alert(`A nave ${newSpaceship.name} foi registrada com sucesso.`)
}
function findSpaceship(name: string) {
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }
    spaceship = spaceships.find(ship => ship.name === name)

    return spaceship
}

function addCrewMender(mender: string, spaceship: { name: string, crewLimit: number, crew: string[] }) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`O passageiro não foi adicionado. Limite atingido.`)
    } else {
        spaceship.crew.push(mender)
        alert(`${mender} foi adicionado a tripulação ${spaceship.name}`)
    }
}
function sendInMission(spaceship: { name: string, crewLimit: number, crew: string[], inMission: boolean }) {
    if (spaceship.inMission) {
        alert(`A nave ${spaceship.name} não pode ser enviada, Ja esta em missão.`)
    } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`A nave ${spaceship.name} não pode ser enviada, tripulação insuficiente.`)
    }
}

function firstMenuOption() {
    const name = prompt('Qual o nome da nave a ser registrada ?')
    const pilot = prompt(`Qual o nome do piloto da ${name}`)
    const crewLimit = Number(prompt(`Qual o limite de tripulantes da nave ${name}`))


    const confirmation = confirm(`Você deseja cria a nave:
${name} pilot:${pilot} limite de tripulantes:${crewLimit}`)

    if (confirmation) {
        AddSpaceships(name, pilot, crewLimit)
        alert(`A nave ${name} foi registrada com sucesso.`)
    }
}

function secondMenuOption() {
    const menber = prompt('Qual o nome do tripulante ?')
    const spaceshipName = prompt(`Para qual nave o tripulante vai ${menber} ?`)

    const spaceship = findSpaceship(spaceshipName)

    if (spaceship) {
        const confirmation = confirm(`Comfirma a inclusão do menbro ${menber} a nave ${spaceship.name}`)
        if (confirmation) {
            addCrewMender(menber, spaceship)
        }
    }

}
function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?')

    const spaceship = findSpaceship(spaceshipName);

    if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`)

        if (confirmation) {
            sendInMission(spaceship)
        }
    }
}
function fourthMenuOption() {
    let list = 'Naves Registradas:\n'

    spaceships.forEach((spaceship: {
        name: string,
        pilot: string,
        crewLimit: number,
        crew: string[],
        inMission: boolean
    }) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Em missão? ${spaceship.inMission ? 'Sim' : 'Não'}
        Tamanho Máximo da Triuplação: ${spaceship.crewLimit}
        Tripulantes: ${spaceship.crew.length}
      `

        spaceship.crew.forEach(member => {
            list += `    - ${member}\n`
        })

    })

    alert(list)
}


let userOption = 0;

while (userOption !== 5) {
    const menu = `Painel Principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
  `

    userOption = Number.parseInt(prompt(menu))

    switch (userOption) {
        case 1:
            firstMenuOption()
            break
        case 2:
            secondMenuOption()
            break
        case 3:
            thirdMenuOption()
            break
        case 4:
            fourthMenuOption()
            break
        case 5:
            alert('Encerrando o sistema...')
            break
        default:
            alert('Opção inválida! Retornando ao painel principal...')
            break;
    }
}