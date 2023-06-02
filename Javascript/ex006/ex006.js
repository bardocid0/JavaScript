function calcular() {
    var n1 = document.getElementById("valor1").value
    n1 = parseFloat(n1)
    var n2 = document.getElementById("valor2").value
    n2 = parseFloat(n2)
    var soma = n1 + n2
    document.getElementById("resultados").innerHTML += `${n1} + ${n2} = ${soma} <br>`
    var subtracao = n1 - n2
    document.getElementById("resultados").innerHTML += `${n1} - ${n2} = ${subtracao} <br>`
    var multiplicacao = n1 * n2
    document.getElementById("resultados").innerHTML += `${n1} * ${n2} = ${multiplicacao} <br>`
    var divisao = n1 / n2
    document.getElementById("resultados").innerHTML += `${n1} / ${n2} = ${divisao} <br>`
    var resto = n1 % n2
    document.getElementById("resultados").innerHTML += `${n1} % ${n2} = ${resto} <br>`
    var exponenciacao = n1 ** n2
    document.getElementById("resultados").innerHTML += `${n1} ** ${n2} = ${exponenciacao} <br>`
}