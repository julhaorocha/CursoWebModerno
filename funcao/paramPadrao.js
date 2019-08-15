// estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 1 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1 // se a for diferente de undefined ele recebe o valor se for igual recebe 1
    b = 1 in arguments ? b : 1 //existe algum valor dentro de b? se existir permace o valor senao recebe 1
    c = isNaN(c) ? 1 : c //se o c não for numero permace o valor de c senao atribua o valor padrao
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

//Valor padrão do ES2015(preferida)
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))