function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: []
    };
    alert("A nave ".concat(spaceship.name, " comandada pelo capit\u00E3o ").concat(spaceship.captain, " foi enviada em uma miss\u00E3o."));
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert("Reduzindo a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else if (spaceship.speed < targetSpeed) {
        alert("Aumentando a velocidade da ".concat(spaceship.name, " para ").concat(targetSpeed));
    }
    else {
        alert("Mantendo a velocidade da ".concat(spaceship.name, " em ").concat(targetSpeed));
    }
}
var sendSpaceshipName = prompt('Insira o nome da nave a ser enviada.');
var spaceshipCapitanName = prompt('Insira o nome do capitão da nave.');
var currentship = sendSpaceship(sendSpaceshipName, spaceshipCapitanName);
var speedTarget = Number(prompt('Digite o valor da nova velocidade.'));
accelerate(speedTarget, currentship);
