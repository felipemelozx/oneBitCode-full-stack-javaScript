const number = parseFloat(prompt("Digite um numero para calcular a tabuada ?"))
let resultado = ``
for(let fator = 1; fator <= 20; fator++){
    resultado += ` -> + ${number} x ${fator} = ${(number * fator)} + \n`
}

alert(`Resultado da Tabuada de ${number}:\n\n ${resultado}`)