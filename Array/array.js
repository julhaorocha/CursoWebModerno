let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //mais recomendado e usado
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //add novo elemento(Mais usado para substituir)
aprovados.push('Abia') //mais usado
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)
console.log('---------------------')

aprovados.sort() //metodo sort ordena alfabeticamente o array
console.log(aprovados)

console.log('---------------------')

delete aprovados[1] //somente deleta posição referida e não reordena o array
console.log(aprovados[1])
console.log(aprovados[2])
console.log('---------------------')

aprovados = ['Bia', 'Carlos', 'Ana'] 
aprovados.splice(1, 2) //vai excluir 2 elementos a partir do indice 1 
console.log(aprovados)
console.log('---------------------')
aprovados = ['Bia', 'Carlos', 'Ana'] 
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') //vai excluir 2 elementos a partir do indice 1 e add mais dois
console.log(aprovados)
console.log('---------------------')
aprovados = ['Bia', 'Carlos', 'Ana'] 
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') //não vai excluir elementos e partir do indice 1 e add mais dois
console.log(aprovados)
console.log('---------------------')
aprovados = ['Bia', 'Carlos', 'Ana'] 
aprovados.splice(1, 1, 'Elemento1', 'Elemento2') //não vai excluir elementos e partir do indice 1 e add mais dois
console.log(aprovados)
console.log('---------------------')