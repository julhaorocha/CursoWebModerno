//par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaaaaa' // contexto léxico
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 98,
    endereco:{
        logradouro: 'Rua 2',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)