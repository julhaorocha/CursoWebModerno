function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 - imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro)) // passa diretamente os parametros passado para a função
console.log(getPreco.apply(carro)) //passa os parametro por meio de Array

console.log(getPreco.call(carro, 0.17, '$')) // passa diretamente os parametros passado para a função
console.log(getPreco.apply(carro, [0.17, '$'])) //passa os parametro por meio de Array