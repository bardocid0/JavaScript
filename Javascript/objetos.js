var listaCarros = []

//Declarando um objeto e informando os atributos
//Todo objeto declrao com {}
var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'Volkswagen'
}

//Para exibir o atributo do objeto faço da seguinte forma 
//objeto.atributo
console.log (carro.ano + ' - ' + carro.modelo)
console.log (`${carro.ano} - ${carro.modelo}`)

//Adicionando o objeto carro ao vetor listaCarros
listaCarros.push(carro)

console.log (listaCarros.length) //1 - Só existe 1 item

//Novo objeto
carro = {
    ano: '2022',
    modelo: 'Onix',
    marca: 'GM'
}
//Adicionando novo objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log (listaCarros)
//Exibimdo uma lista apenas com o modelo do carro
for (var pos in listaCarros) {
    //Acessando o indice do vetor e o atributo modelo
    console.log (listaCarros[pos].modelo)
}
