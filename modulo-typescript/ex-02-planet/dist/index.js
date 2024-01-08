const planets = [];
function addNewplanet(name, coordernada, status, satelites) {
    const newPlanet = {
        name,
        coordernada,
        status,
        satelites
    };
    planets.push(newPlanet);
    alert(`O planeta ${name} foi cadastrado com sucesso.`);
}
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
function removeSatelite(nameSatelite, name) {
    const planet = findPlanet(name);
    if (planet !== undefined) {
        planet.satelites = planet.satelites.filter(satelit => satelit !== nameSatelite);
        alert(`O satelite ${nameSatelite} foi removido do planeta ${planet.name}.`);
    }
    else {
        alert(`O planeta ${name} não foi emcontrado.`);
    }
}
function firstMenuOption() {
    const name = prompt('qual o nome do planeta ?');
    const x = Number(prompt('qual a coordenada x ?'));
    const y = Number(prompt('qual a coordenada y ?'));
    const z = Number(prompt('qual a coordenada z ?'));
    const v = Number(prompt('qual a coordenada v ?'));
    let coordernada = [x, y, z, v];
    const status = prompt('Qual o estado do planeta\nHabitavel\nInabitavel\nInesplorado\nHabitado/');
    const satelites = [];
    let confirmation = confirm(`O planeta ${name} possui satelite?`);
    while (confirmation) {
        let satelit = prompt('Qual o nome do satelite?');
        satelites.push(satelit);
        confirmation = confirm(`O planeta ${name} possui satelite?`);
    }
    addNewplanet(name, coordernada, status, satelites);
}
function secondMenuOption() {
    const name = prompt('Qual o nome do planeta ?');
    const status = prompt(`Qual o estatos do ${name}?`);
    updateStatusPlanet(status, name);
}
function thirdMenuOption() {
    const name = prompt('Qual o nome do planeta ?');
    const nameSatelite = prompt(`Qual o nome do satelite?`);
    addSatelite(nameSatelite, name);
}
function fourthMenuOption() {
    const name = prompt('Qual o nome do planeta ?');
    const nameSatelite = prompt(`Qual o nome do satelite que deseja remover do planeta ${name}?`);
    removeSatelite(nameSatelite, name);
}
function showPlanets() {
    planets.forEach(planet => {
        alert(`
        Planeta: ${planet.name}
        Estatos: ${planet.status}
        Satelite: ${planet.satelites.join(', ')}
        Coordenadas: ${planet.coordernada.join(', ')}
        `);
    });
}
let userOption = 0;
while (userOption !== 6) {
    const menu = `Painel Principal
    1 - Registrar um novo planeta
    2 - Atualizar o estado do planeta
    3 - Adicionar um novo satelite
    4 - Remover um satelite
    5 - Listar planetas
    6 - Sair
  `;
    userOption = Number.parseInt(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOption();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            showPlanets();
            break;
        case 6:
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
}
