//Declarando uma função sem parâmetro e sem retorno
function exibirInformacao() {
    console.log ('Executei a função exibir info')
}
//chamando a minha função
exibirInformacao()

//Função com entrada de parâmetro e sem retorno (sem saída de dados)
//Criando 
function ricardoCalculeTabuada(nr) {
    for (var i = 0; i <= 30; i++) {
        console.log (`${nr} x ${i} = ${nr * i}`)
    }
}
//Chamando a função e passando o nº com PARÂMETRO que desejo ver a tabuada
ricardoCalculeTabuada(428)

//Declarandoa função recebendo o parâmetro e retornando um valor
function ricardoCalculeDobro(nr) {
    let dobro = nr * 2
    return dobro //Com o comando return "devolve" o valor calculado para a chamada
}

//Chamando a função para calcular o dobro e receber o resultado na variável
var resultado = ricardoCalculeDobro(7)
console.log (resultado)
var resultado = ricardoCalculeDobro(738374)
console.log (resultado)

function calcularMedia(nota1, nota2) {
    var soma = nota1 + nota2
    var media = soma / 2
    return media
}

var aluno1 = calcularMedia(7, 8)
console.log(aluno1)
var aluno2 = calcularMedia(5, 6)
console.log(aluno2)

var login = "adm"
var senha = 123

var possoAcessar = validarLogin(login, senha)
if (possoAcessar == true) {
    console.log("Você pode acessar o sistema")
} else {
    console.log("Você não pode acessar")
}

function validarLogin(login, senha) {
    if(login == '' || senha == '') {
        return false
    }
    if(login == "adm" && senha == "123") {
        return true
    } else {
        return false
    }
} 