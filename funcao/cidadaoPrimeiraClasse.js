//Funcão em JS é first-class object (citizens)
//Higher-order function


//sempre retorna alguma coisa(undefined)
//criar de forma literal
function fun1(){} 

//Armazenar em um variável

const fun2 = function () { }

//Armazenar em um array, mais comum criar função anonima armazenar numa const e referenciar por nome no array
const array = [function(a, b){return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto

const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar função com parametro
function run (fun){
    fun()
}
run(function (){console.log('Executando...') })

//Uma função pode retornar/conter uma função(***Talvez posso usar no caso pra preencher instituicao***)
function soma(a, b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)



Form.addCustomModal({
    title: "Título modal",
    description: "mensagem a ser apresentada", 
    //false para não aparecer o botão “fechar” padrão da modal
    showButtonClose: false, 
    buttons: [{
        name: "Confirmar", 
        icon: "add",
        // true: para fechar a modal após a ação ser realizada e false: para não fechar a modal
        closeOnClick: true,
        action: function () { 
            //ação a ser realizada
        }
    }] 
});