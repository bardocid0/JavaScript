function nrImpar() {
    var nr = Number(document.getElementById('inicial').value)
    var final = Number(document.getElementById('final').value)
    document.getElementById("resultado").innerHTML = `Relação de números de ${nr} até ${final} <br><br>`

    for(nr; nr <= final; nr++) {
        if (nr % 2 == 1) {
            document.getElementById('resultado').innerHTML += `${nr} <br>`
        }
    }
}