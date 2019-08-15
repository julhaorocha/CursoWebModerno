//configurar o servidor web aqui

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-Parser')
const bancoDeDados = require('./bancoDeDados')


/*app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45})//converte pra JSON
})*/

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {//se nao usar o next o ideial é omitir
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {//se nao usar o next o ideial é omitir
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //converte para JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //converte para JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id) 
    res.send(produto) //converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})