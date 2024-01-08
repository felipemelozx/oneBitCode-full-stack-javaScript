const planets = [];
function addNewplanet(name, coordernada, status, satelites) {
    const newPlanet = {
        name,
        coordernada,
        status,
        satelites
    };
    planets.push(newPlanet);
}
addNewplanet('terra', [2, 2, 2, 2], 'habitavel', ['lua', 'marte']);
function findPlanet(name) {
    let planet;
    planet = planets.find(planet => planet.name === name);
    return planet;
}
function updateStatusPlanet(status, name) {
    const planet = findPlanet(name);
    if (planet !== undefined) {
        planet.status = status;
        alert(`A situação do planeta ${name} foi atualizada com sucesso.`);
    }
    else {
        alert(`O planeta ${name} não foi emcontrado.`);
    }
}
function addSatelite(namesatelite, name) {
    const planet = findPlanet(name);
    if (planet !== undefined) {
        planet.satelites.push(namesatelite);
        alert(`O satelite ${namesatelite} foi adicionado ao planeta ${planet.name} com sucesso.`);
    }
    else {
        alert(`O planeta ${name} não foi emcontrado.`);
    }
}
