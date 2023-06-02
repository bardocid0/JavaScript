var listaFilmes = [];

function exibirFilmes() {
  document.getElementById('resultado').innerHTML = '';
  for (var i in listaFilmes) {
    document.getElementById('resultado').innerHTML +=
      `<div>
         <img class="imageFilm" src="${listaFilmes[i].link}">
         <br> ${listaFilmes[i].nome}
       </div>`;
  }
}

function validarCadastro(novoFilme, linkFilme) {
  return novoFilme !== '' && linkFilme !== '';
}

function cadFilme() {
  var novoFilme = document.getElementById('filme').value;
  var linkFilme = document.getElementById('imageFilme').value;

  var possoCadastrar = validarCadastro(novoFilme, linkFilme);
  if (!possoCadastrar) {
    alert('Verifique os dados antes de cadastrar');
    return;
  }

  var filme = {
    nome: novoFilme,
    link: linkFilme,
  };
  listaFilmes.push(filme);
  localStorage.setItem('bdFilmes', JSON.stringify(listaFilmes));

  exibirFilmes();
}

function indFilme() {
  var sorteio = Math.floor(Math.random() * listaFilmes.length);

  document.getElementById('indicado').innerHTML =
    `<div>
       <img class="imageFilm" src="${listaFilmes[sorteio].link}">
       <br> ${listaFilmes[sorteio].nome}
     </div>`;
}

// Carregar dados do localStorage
window.addEventListener('DOMContentLoaded', function () {
  listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'));
  if (listaFilmes == null) {
    listaFilmes = [];
  }

  exibirFilmes();

  console.log(listaFilmes);
})

function botaoLimpar() {
    listaFilmes = []
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes))
    exibirFilmes()
}