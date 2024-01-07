function sendSpaceship(name: string, captain: string) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        inMission: true,
        crew: []
    }

    alert(`A nave ${spaceship.name} comandada pelo capitão ${spaceship.captain} foi enviada em uma missão.`)
    return spaceship
}
function accelerate(targetSpeed: number, spaceship: { name: string, speed: number }) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velocidade da ${spaceship.name} para ${targetSpeed}`)
    } else {
        alert(`Mantendo a velocidade da ${spaceship.name} em ${targetSpeed}`)
    }
}

const sendSpaceshipName = prompt('Insira o nome da nave a ser enviada.')
const spaceshipCapitanName = prompt('Insira o nome do capitão da nave.')

const currentship = sendSpaceship(sendSpaceshipName, spaceshipCapitanName)

const speedTarget = Number(prompt('Digite o valor da nova velocidade.'))

accelerate(speedTarget, currentship)