const bodyParser = require('body-parser') //importa o body-parser
const express = require('express') //importa o express
const app = express() //instancia o express

app.use(express.static('.')) //sirva os arquivos estaticos que estão na pasta atual por isso "."
app.use(bodyParser.urlencoded({extend: true})) // se vier dados de formulário lê e transforma em objeto
app.use(bodyParser.json())// se vier um json lê e transforma em objeto

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload') //onde vai salvar o arquivo
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) //muda o nome do arquivo add a data como prefixo
    }

})

const upload = multer ({ storage }).single('arquivo')//mesmo name colocado no HTML no campo typo file

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluido com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...')) //starta o servidor e printa no console