var spaceship = [];
function newSpaceship() {
    var nameSpaceship = prompt('Digite o nome da espaçonave.');
    var pilot = prompt('Qual o nome do piloto?');
    var crewLimit = Number(prompt('Qual o numero maximo de tripulantes?'));
    var crew = [];
    var inMission = false;
    var id = Number(spaceship.length);
    for (var i = 1; i < crewLimit; i++) {
        crew.push('string');
    }
    var newSpaceeship = { nameSpaceship: nameSpaceship, pilot: pilot, crewLimit: crewLimit, crew: crew, inMission: inMission, id: id };
    spaceship.push(nameSpaceship);
}
function switchInMission() {
    var switchState = confirm('você deseja colocar a nave em missão ou retirala de uma ?\n colocar em missão click COMFIRME.\n Retira clikc CAMCELAR.');
    if (switchState) {
        var id = Number(prompt('Digite o id da nave que deseja colocar em missão.'));
        if (id >= 0 && id < spaceship.length) {
            spaceship[id].inMission = true;
            console.log(spaceship[id]);
            alert("A ".concat(spaceship[id].nameSpaceship, " foi enviada para uma miss\u00E3o."));
        }
    }
    else {
        var id = Number(prompt('Digite o id da nave que deseja colocar em missão.'));
        if (id >= 0 && id < spaceship.length) {
            spaceship[id].inMission = false;
            alert("A ".concat(spaceship[id].nameSpaceship, " foi retirada de miss\u00E3o."));
        }
    }
}
