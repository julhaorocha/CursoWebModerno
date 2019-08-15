const carrinho = [
    '{"Nome": "Borracha", "preco": 3.45}',
    '{"Nome": "Caderno", "preco": 13.90}',
    '{"Nome": "Kit de Lapis", "preco": 41.22}',
    '{"Nome": "Caneta", "preco": 7.50}'
]

let resultado = carrinho.map(function(e) { 
    return JSON.parse(e).preco
})
console.log(resultado)
console.log('-----------------------------')

let resultado1 = carrinho.map(e => JSON.parse(e).preco)  //com arrow function
console.log(resultado1)
console.log('-----------------------------')

//resolução do professor

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const paraDin = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

const result = carrinho.map(paraObjeto).map(apenasPreco).map(paraDin)
console.log(result)
