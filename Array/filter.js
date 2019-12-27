const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil && p.preco >= 500
}))
console.log('-----------------------------')
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
const filtrado = produtos.filter(caro).filter(fragil)
console.log(filtrado)
console.log('-----------------------------')

//var papel = new Produto("Papel", 1.00, true);*/
//produtos.push(produtos.nome ="Papel", produtos.preco = 1.00, produtos.fragil = true)

//produtos.nome.push = "Papel"
//console.log(produtos)

/*function Produto(nome, preco, fragil){
    this.nome = nome;
    this.preco = preco;
    this.fragil = fragil;
}*/
