const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas funcional e OO(gera undefined)

const falarDePessoa = pessoa.falar.bind(pessoa) //bind amarra o this ao objeto(não gera undefined) 
falarDePessoa()