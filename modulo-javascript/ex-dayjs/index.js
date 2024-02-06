const dayjs = require('dayjs')


function dataDeAniversario (date){
    const diaAniversario = dayjs(date)
    const dataAtual = dayjs()
    
    const anosDeDiferenca = dataAtual.diff(diaAniversario, 'year')
    const nextBirthday = diaAniversario.add(anosDeDiferenca + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(dataAtual, 'day') + 1



    console.log(`Sua idade e: ${anosDeDiferenca} anos.`)
    console.log(`Proximo aniversario: ${nextBirthday.format('DD/MM/YYYY')}.`)
    console.log(`faltam apenas ${daysToNextBirthday} dias para o seu aniversario de ${anosDeDiferenca + 1}.`)
    
}

dataDeAniversario('2005-04-29')