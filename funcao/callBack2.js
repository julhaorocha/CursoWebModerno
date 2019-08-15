const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1 = []
let notasAltas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }else{
        notasAltas.push(notas[i])
    }
}
console.log('-----------sem callback---------------')
console.log(`Notas baixas = ${notasBaixas1}`)
console.log(`Notas Altas = ${notasAltas}`)


//com callback
console.log('----------com callback----------------')
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
const notasAltas2 = notas.filter(function (nota){
    return nota > 7
})
console.log(`Notas baixas = ${notasBaixas2}`)
console.log(`Notas Altas = ${notasAltas2}`)



//com arrow
console.log('-----------com callback + arrow--------------')
const notasBaixas3 = notas.filter(nota => nota < 7)
const notasAltas3 = notas.filter(nota => nota > 7)
console.log(`Notas baixas = ${notasBaixas3}`)
console.log(`Notas Altas = ${notasAltas3}`)

//atribuindo a função para uma constante
console.log('-----------com callback + arrow + função na constante--------------')
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
const notasMaioresQue7 = nota => nota > 7
const notasAltas4 = notas.filter(notasMaioresQue7)
console.log(`Notas baixas = ${notasBaixas3}`)
console.log(`Notas Altas = ${notasAltas3}`)