const planets = []

function addNewplanet(name: string, coordernada: [number, number, number, number], status: string, satelites: string[]) {
    const newPlanet = {
        name,
        coordernada,
        status,
        satelites
    }

    planets.push(newPlanet)
}

addNewplanet('terra', [2, 2, 2, 2], 'habitavel', ['lua', 'marte'])

function findPlanet(name: string) {
    let planet: {
        name: string,
        coordernada: [number, number, number, number],
        status: string,
        satelites: string[]
    }

    planet = planets.find(planet => planet.name === name)
    return planet
}

function updateStatusPlanet(status: string, name: string) {
    const planet = findPlanet(name)
    if (planet !== undefined) {
        planet.status = status
        alert(`A situação do planeta ${name} foi atualizada com sucesso.`)
    } else {
        alert(`O planeta ${name} não foi emcontrado.`)
    }
}
function addSatelite(namesatelite: string, name: string) {
    const planet = findPlanet(name)
    if (planet !== undefined) {
        planet.satelites.push(namesatelite)
        alert(`O satelite ${namesatelite} foi adicionado ao planeta ${planet.name} com sucesso.`)
    } else {
        alert(`O planeta ${name} não foi emcontrado.`)
    }
}