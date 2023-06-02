function mes() {
    var nrMes = parseInt(Math.random() * 13) +1
    var nome = document.getElementById("nome").value
        switch (nrMes) {
            case 1:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Janeiro <br> <img src="feliz1.png">`
                break
            case 2:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Fevereiro <br> <img src="feliz2.png">`
                break
            case 3:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Março <br> <img src="feliz3.png">`
                break
            case 4:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Abril <br> <img src="feliz4.png">`
                break
            case 5:
                document.getElementById("").innerHTML = `${nome}, você irá se casar no mês de Maio <br> <img src="feliz5.png">`
                break
            case 6:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Junho <br> <img src="feliz6.png">`
                break
            case 7:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Julho <br> <img src="feliz7.png">`
                break
            case 8:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Agosto <br> <img src="feliz8.png">`
                break
            case 9:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Setembro <br> <img src="feliz9.png">`
                break
            case 10:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Outubro <br> <img src="feliz10.png">`
                break
            case 11:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Novembro <br> <img src="feliz11.png">`
                break
            case 12:
                document.getElementById("resultado").innerHTML = `${nome}, você irá se casar no mês de Dezembro <br> <img src="feliz12.png">`
                break
            default:
                document.getElementById("resultado").innerHTML = `${nome}, VOCÊ NÃO IRÁ SE CASAR <br> <img src="triste.png">`
        }
}