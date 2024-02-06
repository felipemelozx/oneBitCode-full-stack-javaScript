// Teste de Velocidade
// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos
//  e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

let vehicle1 = prompt("Digite o nome do primeiro veiculo:")
let speedVehicle1 = parseFloat( prompt("Digite a velocidade do primeiro veiculo:"))
let vehicle2 = prompt("Digite o nome do segundo veiculo:")
let speedVehicle2 = parseFloat( prompt("Digite a velocidade do segundo veiculo:"))

if(speedVehicle1 > speedVehicle2){
    alert(`O veiculo ${vehicle1} e mais rapido que o veiculo ${vehicle2}`)
} else if (speedVehicle1 < speedVehicle2){
    alert(`O veiculo ${vehicle2} e mais rapido que o veiculo ${vehicle1}`)
} else {
    alert("Os dois veiculos estao parados")
}