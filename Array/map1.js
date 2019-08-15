const nums = [1, 2, 3, 4, 5] //map não modifica o array original

// For com propósito

let resultado = nums.map(function(e) { //percorre o array 
    return e * 2 //pega cada posição e multiplica por 2
})

console.log(resultado)

console.log('-----------------------------')

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDin = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDin)
console.log(resultado)

