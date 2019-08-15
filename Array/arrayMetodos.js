const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Massa quebrou o carro! remove o ultimo elemento do array
console.log(pilotos)
console.log('---------------------')

pilotos.push('Verstappen') //add no final do array
console.log(pilotos)
console.log('---------------------')

pilotos.unshift('Hamilton') // add no inicio do array
console.log(pilotos)
console.log('---------------------')

//splice pode add e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)
console.log('---------------------')

//remover
pilotos.splice(3, 1)
console.log(pilotos)
console.log('---------------------')

console.log(pilotos)
const algunsPilotos1 = pilotos.slice(2) //gera um novo array do indice 2 em diante
console.log(algunsPilotos1)
console.log('---------------------')

console.log(pilotos)
const algunsPilotos = pilotos.slice(1, 4) //gera um novo array do indice 1 até o indice 3 (o 4 não entra na lista)
console.log(algunsPilotos)
console.log('---------------------')