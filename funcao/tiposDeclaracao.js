
console.log(soma(3, 4))


//function declaration(carrega mesmo antes de executar o código)
function soma(x, y){//funciona mesmo se for chamada antes da declaração
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
}

//named function expression(Pouco uso)
const mult = function mult(x, y) {
    return x * y
}