var nrSorteio = parseInt(Math.random() * 100)
console.log (nrSorteio)

let Tentativa = 0

function chutar() {
    Tentativa++
    var nr = prompt("Chute um número:")
    if (nr > nrSorteio) {
        document.getElementById("resultado").innerHTML += `<br> Você chutou ${nr}, pensei em um número menor`
    }
    else if (nr < nrSorteio) {
        document.getElementById("resultado").innerHTML += `<br> Você chutou ${nr}, pensei em um número maior`
    }
    else if (nr = nrSorteio) {
        document.getElementById("resultadocerto").innerHTML += `EXCELENTE, VOCÊ ACERTOU NO N° ${nr} EM ${Tentativa} TENTATIVAS`
    }
}

function novojogo() {
    nrSorteio = parseInt(Math.random() * 100)
    Tentativa = 0
    document.getElementById("resultadocerto").innerHTML = ""
    document.getElementById("resultado").innerHTML = ""
}