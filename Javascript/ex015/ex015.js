function resultados() {
    var numero = document.getElementById("numero").value
    var contador = 1
    document.getElementById("resultado").innerHTML = `Tabuada do ${numero}<br>`
    while (contador <= 10) {
        var resultado = numero * contador
        document.getElementById("resultado").innerHTML += `<br>${numero}x${contador}=${resultado}`
        contador++
    }
}