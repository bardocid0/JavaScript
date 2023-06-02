function image() {
    var nrImg = document.getElementById("numero").value
    nrImg = Number(nrImg)

    for (var i = 1; i <= nrImg; i++) {
        document.getElementById('resultado').innerHTML += `<img src="coracao.png">`
    }
}

var coracao = 5
function coracao() {
    coracao++
    exibirCoracoes()
}
function bomba() {
    coracao--
    exibirCoracoes()
}
function exibirCoracoes() {
    document.getElementById('coracao').innerHTML = '<img src="coracao.png">'
    for (var i = 1; i <= coracao; i++) {
        document.getElementById('coracao').innerHTML += '<img src="coracao.png">'
    }
}