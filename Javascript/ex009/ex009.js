function verificar() {
    debugger

    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if (idade >= 18) {
        document.getElementById("resultado").innerHTML = `<b class="verde">PARABÉNS ${nome}, você pode tirar CNH <br> <img src="CNH1.png"> </b>`
    }
    else {
        document.getElementById("resultado").innerHTML = `<b class="vermelho">${nome}, Você não possui a idade necessária, NÃO pode tirar CNH <br> <img src="CNH2.png"></b>`
    }
}