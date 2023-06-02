function sorteio() {
    document.getElementById("resultado").innerHTML = ``
    for (let i = 1; i <= 6; i++) {
        var resultado = parseInt(Math.random() * 60) + 1
        document.getElementById("resultado").innerHTML += `${resultado} `
    }
}