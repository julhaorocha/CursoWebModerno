const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anonimo!\r\n')
    process.exit()

}else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {//on 'data' ocorre depois que o ENTER é digitado
        const nome = data.toString().replace('\r\n', '')
        process.stdout.write(`fala ${nome}!!\r\n`)
        process.exit()
    })
}