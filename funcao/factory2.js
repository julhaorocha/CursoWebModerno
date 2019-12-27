/*//função factory com parametros
function criarProduto(nome, preco) {
    return {
        nome, //não precisa colocar nome: nome pq os dois tem o mesmo nome
        preco, //não precisa colocar preço: preço pq os dois tem o mesmo nome
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('Ipad', 1199.49))*/
let tamanho = 2
function gerarCampo(campo, grid = '') {
    return {
        grid, // só se o campo estiver dentro de uma grid.
        campo,
        'tamanho': tamanho,
        'extensoes': [ 'jpeg', 'jpg', 'pdf', 'png' ]
    }
}


console.log(gerarCampo('ALUNO_RG'))

var aluno_rg = {
    'grid': '', // só se o campo estiver dentro de uma grid.
    'campo' : 'ALUNO_RG',
    'tamanho': tamanho,
    'extensoes': [ 'jpeg', 'jpg', 'pdf', 'png' ]
};


console.log(aluno_rg)