function gol1() {
    var pt = document.getElementById("pt1").innerHTML
    pt++
    document.getElementById("pt1").innerHTML = pt
}
function gol2() {
    var pt = document.getElementById("pt2").innerHTML
    pt++
    document.getElementById("pt2").innerHTML = pt
}
function um() {
    var pt = document.getElementById("PT2").innerHTML
    pt++
    document.getElementById("PT2").innerHTML = pt
}
function dois() {
    var pt = document.getElementById("PT2").innerHTML
    pt = parseFloat(pt)
    var soma = pt + 2
    document.getElementById("PT2").innerHTML = soma
}
function tres() {
    var pt = document.getElementById("PT2").innerHTML
    pt = parseFloat(pt)
    var soma = pt + 3
    document.getElementById("PT2").innerHTML = soma
}
function UM() {
    var pt = document.getElementById("PT1").innerHTML
    pt++
    document.getElementById("PT1").innerHTML = pt
}
function DOIS() {
    var pt = document.getElementById("PT1").innerHTML
    pt = parseFloat(pt)
    var soma = pt + 2
    document.getElementById("PT1").innerHTML = soma
}
function TRES() {
    var pt = document.getElementById("PT1").innerHTML
    pt = parseFloat(pt)
    var soma = pt + 3
    document.getElementById("PT1").innerHTML = soma
}