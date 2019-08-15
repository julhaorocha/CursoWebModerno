const fs = require('fs') //modulo de leitura de arquivo(fs)

const caminho = __dirname + '/arquivo.json'

// sincrono...(Impacta na execução do programa se o arquivo for grande)
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json') //executa antes pq é sincrono
console.log(config.db)

//ler conteudo de pastas
fs.readdir(__dirname, (err, arquivos) => { //__dirname é  a pasta atual do node
    console.log('Conteudo da pasta')
    console.log(arquivos)
})