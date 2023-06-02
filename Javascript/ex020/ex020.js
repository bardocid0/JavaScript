function filmes() {
    var films = ['Interestelar', 'Star Wars', 'Harry Potter', 'Super Mario World', 'Vingadores', 'Barbie']
    for (var i = 0; i < films.length; i++) {
        document.getElementById('resultado').innerHTML += `Posição no vetor ${i} - Filme ${films[i]} <br>`
    }
}