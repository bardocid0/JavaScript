var cadastro = []
cadastro = JSON.parse(localStorage.getItem('bdUsers'))
if (cadastro == null)
    cadastro = []

exibirUsuarios()

function login() {
    var nome = document.getElementById('nome').value
    var usuario = document.getElementById('user').value
    var senha = document.getElementById('senha').value
    var confSenha = document.getElementById('confSenha')

    var possoCadastrar = log(nome, usuario, senha, confSenha);
    if (possoCadastrar == true) {
        alert('Verifique os dados antes de cadastrar');
        return;
    }

    var logado = {
        nome: nome,
        user: usuario,
        password: senha
    }

    cadastro.push(logado);
    localStorage.setItem('bdUsers', JSON.stringify(cadastro))
    exibirUsuarios()

}

function exibirUsuarios() {
    document.getElementById('resultado').innerHTML = ''

    cadastro.forEach( (item, indice) => {
            document.getElementById('resultado').innerHTML += 
            `<div>
                <p>
                    <strong>Nome:</strong> ${item.nome} - <strong>Usuário:</strong> ${item.user}
                    <img src="excluir.svg" onclick="excluirUsuário(${indice})">
                </p>
            </div>`
    }  )
}

function excluirUsuário(indice) {
    cadastro.splice (indice, 1)
    localStorage.setItem( 'bdUsers', JSON.stringify(cadastro))
    exibirUsuarios()
}

function log(nome, usuario, senha, confSenha) {
    if (nome == '' || usuario == ''|| senha == '' || confSenha == '') {
        return true
    } else {
        return false
    }
}

function loginCadastrar() {
    location.href = "login.html"
}

function telaCadastro() {
    location.href = "cadastro.html"
}

function botaoLogin (){
    var usuario = document.getElementById("user").value
    var senha = document.getElementById("senha").value

    var encontrou = false
    cadastro.forEach ( item => {
        if (usuario == item.user && senha == item.password) {
            alert (`Bem vindo ao sistema, ${item.nome}`)
            encontrou = true
        }
    } )
     if (encontrou == false) {
        alert('Usuário não encontrado')
     }
}