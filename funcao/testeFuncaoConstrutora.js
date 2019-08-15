function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado 
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}
const uno = new Carro

console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)
while(ferrari.getVelocidadeAtual() < 350 || uno.getVelocidadeAtual() < 200){
    uno.acelerar()   
    ferrari.acelerar()
    console.log(`Ferrari = ${ferrari.getVelocidadeAtual()}, Uno = ${uno.getVelocidadeAtual()}`)
}
