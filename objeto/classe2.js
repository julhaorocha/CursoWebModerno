class Avo {
    constructor(sobrenome = 'Silva') {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
      super('Silva')
    }
}

const filho = new Filho
const pai = new Pai
const avo = new Avo
console.log(filho)
console.log(pai)
console.log(avo)