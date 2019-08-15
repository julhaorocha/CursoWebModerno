//pessoa -> 123 ->{...}
const pessoa = { nome:'Joao'}
pessoa.nome = 'Pedro'

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)