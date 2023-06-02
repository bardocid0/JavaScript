function login() {
    var usuario = document.getElementById("usuario").value
    var senha = document.getElementById("senha").value
    senha = Number(senha)

    if (usuario == "adm" && senha == "123") {
        document.getElementById("resultado").innerHTML = `<b class="verde">Bem vindo de volta ${usuario}</b>`
    } else {
        document.getElementById("resultado").innerHTML = `<b class="vermelho">Usuário ou Senha incorretos</b>`
    }
}