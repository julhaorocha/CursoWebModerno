let dobro = function (a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito e sem corpo pois a função executa uma unica linha
console.log(dobro(Math.PI))


let ola = function (){
    return 'Olá'
}

ola = () => 'Olá' //função sem parametro
console.log(ola())