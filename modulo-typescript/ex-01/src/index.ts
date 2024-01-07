const spaceship = []

function newSpaceship() {
    const nameSpaceship: string = prompt('Digite o nome da espaçonave.')
    const pilot: string = prompt('Qual o nome do piloto?')
    const crewLimit = Number(prompt('Qual o numero maximo de tripulantes?'))
    const crew = []
    const inMission: boolean = false
    const id: Number = Number(spaceship.length)
    
    for(let i = 1; i < crewLimit; i++){
        crew.push('string')
    }


    const newSpaceeship = { nameSpaceship, pilot, crewLimit, crew, inMission, id }
spaceship.push(nameSpaceship)

}
function switchInMission() {
    const switchState: Boolean = confirm('você deseja colocar a nave em missão ou retirala de uma ?\n colocar em missão click COMFIRME.\n Retira clikc CAMCELAR.')
    if (switchState) {

        const id = Number(prompt('Digite o id da nave que deseja colocar em missão.'))
        if (id >= 0 && id < spaceship.length) {
            spaceship[id].inMission = true
            console.log(spaceship[id])
            alert(`A ${spaceship[id].nameSpaceship} foi enviada para uma missão.`)
        }
    } else {
        const id = Number(prompt('Digite o id da nave que deseja colocar em missão.'))
        if (id >= 0 && id < spaceship.length) {
            spaceship[id].inMission = false
            alert(`A ${spaceship[id].nameSpaceship} foi retirada de missão.`)
        }
    }
}

