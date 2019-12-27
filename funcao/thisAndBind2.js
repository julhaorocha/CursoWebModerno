function Pessoa(){
    this.idade = 0
    
    const self = this //para usar o bind teria que apagar essa linha
    setInterval(function(){
        self.idade++ // e trocar self por this nessa linha
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa