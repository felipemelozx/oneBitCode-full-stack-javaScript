let palavra = prompt("Digite uma palavra:")

let palavraInvertida = ""


for (let i = palavra.length -1; i >=0; i--){
    palavraInvertida += palavra[i]
}
if(palavra === palavraInvertida){
    alert(`${palavra} é um palíndromo!`)
} else {
    alert(`a palavra nao e um palindromo\n${palavra} !== ${palavraInvertida}`)
}