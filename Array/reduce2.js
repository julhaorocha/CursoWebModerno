const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false},
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
resultados = alunos.map(a => a.bolsista).reduce(todosBolsistas)
console.log(`Todos os alunos bolsistas? ${resultados}`)

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) =>  resultado || bolsista
resultados = alunos.map(a => a.bolsista).reduce(algumBolsista)
console.log(`Algum aluno bolsista? ${resultados}`)

//console.log(alunos.map(a => a.bolsista))
/*const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador) {
    console.log(acumulador)
    return acumulador 
})*/

//console.log(resultado)