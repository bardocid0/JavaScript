function media() {
    debugger

    var nomealuno = document.getElementById("nomealuno").value
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    nota1 = Number(nota1)
    nota2 = Number(nota2)

    if (nota1 > 10) {
        alert ("Nota 1 não pode ser maior que 10")
        return
    }
    if (nota2 > 10) {
        alert ("Nota 2 não pode ser maior que 10")
        return
    }


    var media = (nota1 + nota2) / 2

    document.getElementById("resultados").innerHTML = `O aluno ${nomealuno} tirou nota ${nota1} e ${nota2}, sua média foi de ${media}`

    if (media >= 7) {
        document.getElementById("reprovado").innerHTML = `PASSOU DE ANO`
    } 
    else {
        document.getElementById("reprovado").innerHTML = `NÃO PASSOU DE ANO`
    }
}