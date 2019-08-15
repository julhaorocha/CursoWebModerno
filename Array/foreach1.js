const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) { //primeiro parametro é o conteudo o segundo é o indice
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)