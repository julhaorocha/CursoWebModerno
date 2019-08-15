const tecnologias = new Map()

tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) //jeito errado de chamar o conteudo
console.log(tecnologias.get('react')) //jeito certo de chamar o conteudo
console.log(tecnologias.get('react').framework) //obter só o valor sem a chave

const chavesVariadas = new Map([
    [function () {}, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
