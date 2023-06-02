function resultados() {
    var numero = document.getElementById("numero").value
    document.getElementById("resultado").innerHTML = `Tabuada do ${numero}<br>`
    for (var contador = 1; contador <= 10; contador++) {
        var resultado = numero * contador
        document.getElementById("resultado").innerHTML += `<br>${numero}x${contador}=${resultado}`
    }
}