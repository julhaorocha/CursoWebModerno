const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
    { nome: 'Jose', nota: 9.9, bolsista: true },
    { nome: 'Bob', nota: 10.0, bolsista: true },
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    if(acumulador <= atual) {
        return acumulador
    }else {
        return atual
    }
    
})

console.log(resultado)