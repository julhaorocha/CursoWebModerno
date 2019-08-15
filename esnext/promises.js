function falarDespoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase) //aceita apenas um parametro
        }, segundos * 1000)
    })
}

falarDespoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('?!?'))
    .then(outrafrase => console.log(outrafrase))