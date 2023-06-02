var filmes = []

function cadFilme() {
    var novoFilme = document.getElementById("filme").value
    filmes.push(novoFilme)
    document.getElementById('resultado').innerHTML = ''

    for(var i = 0; i < filmes.length; i++) {
        document.getElementById('resultado').innerHTML += `${filmes[i]} <br>`
    }
}