function verificar() {
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value
    idade = Number(idade)

    if (idade >= "18" && idade <= "70") {
        document.getElementById("resultado").innerHTML = `<b class="verde">${nome}, você é obrigado a votar</b>`
    } else if (idade < "16") {
        document.getElementById("resultado").innerHTML = `<b class="vermelho">${nome}, você não pode votar</b>`
    } else {
        document.getElementById("resultado").innerHTML = `<b class="preto">${nome}, você não é obrigado a votar</b>`
    }
}