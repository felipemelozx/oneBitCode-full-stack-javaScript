
let medida = parseFloat(prompt("Digite a mediada em metros que deseja converter"))

let unidadeDeMedida = parseFloat(prompt("selecione a unidade de medida que deseja transformar ?\n1. milímetro (mm)\n2. centímetro (cm)\n3. decímetro (dm)\n4. decâmetro (dam)\n5. hectômetro (hm)\n6. quilômetro (km)"))

switch (unidadeDeMedida) {
    case 1:
        alert(`${medida} metro(s) em milímetro (mm) e ${medida * 1000}`)
        break
    case 2:
        alert(`${medida} metro(s) em centimetros (cm) e ${medida * 100}`)
        break
    case 3:
        alert(`${medida} metro(s) em decímetro (dm) e ${medida * 10}`)
        break
    case 4:
        alert(`${medida} metro(s) em decâmetro (dam) e ${medida / 10}`)
        break
    case 5:
        alert(`${medida} metro(s) em hectômetro (hm) e ${medida / 100}`)
        break
    case 6:
        alert(`${medida} metro(s) em quilômetro (km) e ${medida / 1000}`)
        break
}

