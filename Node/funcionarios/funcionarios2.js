const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') //axios client http

axios.get(url).then(response => {
    const funcionarios = response.data
    const mulher = funcionario => funcionario.genero == 'F'
    const chinesa = funcionario => funcionario.pais == 'China'
    const salario = funcionarios.map(f => f.salario)
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    
    const resultado = funcionarios.filter(mulher).filter(chinesa).reduce(menorSalario)
    console.log(resultado)
    }) 
    


