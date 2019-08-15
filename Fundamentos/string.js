const escola = "JRcode"

console.log(escola.charAt(4))
console.log(escola.charAt(6))
console.log(escola.charCodeAt(4))
console.log(escola.lastIndexOf('R'))
console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //vai até o 3 mas nao inclui o 3

console.log('Desenvolvedor '.concat(escola).concat(' !'))
console.log('Desenvolvedor ' + 'escola'  + ' !')

console.log(escola.replace('c', 'C'))
console.log(escola.replace(/\o/, 'O')) //expressão regular substitui todos

console.log('Ana,Maria,Pedro'.split(',')) //gera um Array com os dados separando pela virgula