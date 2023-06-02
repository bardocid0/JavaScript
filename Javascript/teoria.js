//Operadores Aritméticos e Ordem de Precedência
var opSoma = 5 + 2 //Operador de soma +
console.log(opSoma) // 7
var opSubtracao = 5 - 2 //Operação de Subtração -
console.log(opSubtracao) // 3
var opMultiplicacao = 5 * 2 //Operador de Multiplicação *
console.log(opMultiplicacao) // 10
var opDivisao = 5 / 2 //Operador de Divisão /
console.log(opDivisao) // 2.5
var opExponenciacao = 5 ** 2 //Operador de Exponenciação
console.log(opExponenciacao) // 25
var opResto = 5 % 2 //Operador de Resto da Divisão %
console.log(opResto) // 1
//Ordem de Precedência
var ordemPrecedencia1 = 5 + 3 / 2
console.log(ordemPrecedencia1) // 6.5
var ordemPrecedencia2 = (5 + 3) / 2
console.log(ordemPrecedencia2) // 4
/* 1º ()
   2º **
   3º * /
   4º %
   5º + -
*/
//Constantes - o valor não pode ser alterado depois de atribuído
const pi = 3.14
// pi = 3 - Se o valor for alterado dará erro javascript

//Auto atribuição
var n = 3
n = n + 3 // a variável recebe ela mesmo + 3
n += 3 // quer dizer o mesmo que a expressão acima

n++ // quando precisamos somar +1 ao valor da variável
n-- // quando precisamos subtrair -1 ao valor da variável

//Operadores Relacionais
var n1 = 5
var n2 = 6
console.log (n1 > n2) // > maior que
console.log (n1 < n2) // < menor que
console.log (n1 >= n2) // >= maior ou igual que
console.log (n1 <= n2) // <= menor ou igual que
console.log (n1 == n2) // == igual
console.log (n1 != n2) // != não igual - diferente

//Estruturas condicionais
if (n1 > n2){  //Verificando a condição entra parenteses
   //Se a condição for verdadeira "entra" nesse bloco
   console.log ("O n1 é maior que o n2")
} else {
   // Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
   console.log ("O n1 não é maior que o n2")
}

//Exemplo de condição
var minhaIdade = 18
if (minhaIdade >= 16){
   console.log ("Você pode votar")
} else {
   console.log ("Você NÃO pode votar")
}
//Operadores Lógicos
// && representa o E
var login = "adm"
var senha = "123"
//Para entrar na condição TRUE as 2 condições precisam ser verdadeiras
if (login == "adm" && senha == "123") {
   // Executa esse bloco quando as condições são TRUE
} else {
   // Executa esse bloco se pelo menos 1 condição for FALSE
}

var media = 6
// Operador OU ->|| (pipe)
// Para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeira
if (media ==  6 || media == 5) {
   // Executa esse bloco quando 1 condição é TRUE pelo menos
} else {
   // Aqui entra se todas as condições forem falsas
}

//Estruturas condicionais encadeadas
if (media >= 7) {
   console.log("APROVADO")
} else if (media >= 5) {
   // Podemos fazer um novo if junto com o else
   console.log("RECUPERAÇÃO")
} else {
   console.log("REPROVADO")
}

if (media == 10) {
   console.log("Ótimo aluno")
} else if (media == 9 || media == 8) {
   console.log("Bom aluno")
} else if (media == 7 || media == 6) {
   console.log("Aluno mediano")
} else if (media == 5 || media == 4 || media == 3) {
   console.log("Aluno abaixo da média")
} else {
   console.log("Aluno ruim")
}
//debugger
//Podemos utilizar o debugger para analisar o código linha a linha
//return
//Quando queremos parar de executar uma função do JS utilizamos o return

//Para sortearmos um valor aleatório utilizamos o Math.random()
//o Math.random retorna um número decimal e precisamos multiplicar pelo nr
//máximo que desejamos
//o parseInt utilizamos para obter apenas a parte inteira do número
var nrSorteado = parseInt(Math.random() * 100)
console.log (nrSorteado)

//Switch Case
//É como se vários if else de forma mais simples
var diaSemana = prompt
switch (diaSemana) {
   case 1:
      console.log("Hoje é: Domingo")
      break //para o switch case e não verifica as outras opções
   case 2:
      console.log("Hoje é: Segunda")
      break
   case 3:
      console.log("Hoje é: Terça")
      break
   case 4:
      console.log("Hoje é: Quarta")
      break
   case 5:
      console.log("Hoje é: Quinta")
      break
   case 6:
      console.log("Hoje é: Sexta")
      break
   case 7:
      console.log("Hoje é: Sábado")
      break
   default:
      console.log("Dia Invalido")
}

//For - Laço de Repetição
//1ª Expressão var i = 1
// (Aqui eu inicio o controle de vezes)
// 2ª Expressão i <= 10
// (Aqui nós verificamos a condição para se manter no loop)
   //3ª Expressão i++
   // (Aqui acrescentamos na variável +1 vez)
for (var i = 1; i <= 10; i++) {
   alert(i)
}

//Verificando se o número é par com while
var contador = 1 //Iniciando o contador de vezes irá executar
while (contador <= 10) { //Enquanto a condição for verdadeira
   if (contador % 2 == 0) { //Condição para o contador for par
      console.log(`${contador} é par`)
   } else {
      console.log(`${contador} é ímpar`)
   }
   contador++ //Adicionamos +1 ao contador para não ficar em loop infinito
}