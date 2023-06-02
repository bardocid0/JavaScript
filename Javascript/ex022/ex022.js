var filmes = []
var imageFilme = []

function cadFilme() {
    var novoFilme = document.getElementById("filme").value
    var linkFilme = document.getElementById("imageFilme").value
    filmes.push(novoFilme)
    imageFilme.push(linkFilme)
    document.getElementById('resultado').innerHTML = ''
    document.getElementById('resultado').innerHTML = ''

    for (var i in filmes) {
  //for(var i = 0; i < imageFilme.length; i++)
        document.getElementById('resultado').innerHTML +=
            `<div>
                <img class="imageFilm" src="${imageFilme[i]}">
                <br> ${filmes[i]}
            </div>`
    }
}
function indFilme() {
    var sorteio = parseInt(Math.random() * imageFilme.length)
    document.getElementById('indicado').innerHTML = `<div><img class="imageFilm" src="${imageFilme[sorteio]}"><br> ${filmes[sorteio]}</div>`
}