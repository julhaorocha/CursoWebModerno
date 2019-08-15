//let e const
{
    var a = 2 //acessa fora do contexto
    let b = 3 //acessa só dentro do contexto
    console.log(b)
}
console.log(a)

//Template String

const produto = 'Ipad'
console.log(`${produto} é caro!`)

//Destructuring

const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const {idade: i, nome } = { nome: 'Ana', idade: 9}
console.log(i, nome)