// o primeiro nome
// o sobrenome
// o campo de estudo
// o ano de nascimento

let nome = prompt("Digite seu primeiro nome:")
let sobrenome = prompt("Digite seu sobrenome:")
let campoEstudo = prompt("Digite seu campo de estudos:")
let ano = parseFloat(prompt("Digite seu ano de nascimento:"))

alert(`Nome completo e ${nome} ${sobrenome}, campo de atuacao ${campoEstudo} e tem ${2023 - ano} de idade`)