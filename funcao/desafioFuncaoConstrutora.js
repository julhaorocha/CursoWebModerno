function Pessoa(nome) {
    this.nome = nome
    this.falar = function() {
          return console.log(`Meu nome é ${this.nome}`)
        }
    }
    const p1 = new Pessoa('Jose')
    p1.falar()

