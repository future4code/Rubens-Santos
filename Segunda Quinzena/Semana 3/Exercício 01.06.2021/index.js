// const pokemons = [
//     {nome:"Bulbasur",tipo:"planta"},
//     {nome:"Charmander",tipo:"fogo"},
//     {nome:"Squirtle",tipo:"agua"},
// ]

// for (const pkmn of pokemons){
//     console.log(`${pkmn.nome} é de ${pkmn.tipo}`)
// }

//Exercício de Escrita de Código 1
function sobreMim(){
    const frase = "Eu sou Rubens, tenho 24 anos, moro em maricá e sou Estudante"
    return frase
}
console.log(sobreMim())


function sobreMimParametros(nome,idade,endereco,profissao){
    const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao} `
    return frase
}
console.log(sobreMimParametros("Rubens",24,"Maricá","Estudante"))

//Exercício de Escrita de Código 2

/*a*/ function somaNumeros(numero1, numero2) {
    const soma = numero1 + numero2
    return soma
}
console.log(somaNumeros(4,3))

/*b*/ function comparaNumeros(numero1, numero2) {
    const maior = numero1 >= numero2
    return maior
}
console.log(comparaNumeros(2,3))

/*c*/ function par(numero) {
    if (numero % 2 === 0) {
        return `O número é par`
    } else {
        return `O número não é par`
    }
}
console.log(par(3))

/*d*/function upperLength(frase){
    return `A frase tem ${frase.length} caracteres.\n${frase.toUpperCase()}`
} 

console.log(upperLength("Meu nome é Rubens"))


//Exercício de Escrita de Código 3
const numero1 = 30
const numero2 = 25

console.log(soma(numero1,numero2))
console.log(subtracao(numero1,numero2))
console.log(multiplicacao(numero1,numero2))
console.log(divisao(numero1,numero2))


function soma(numero1,numero2){
    return numero1+numero2
}

function subtracao(numero1,numero2){
    return numero1 - numero2
}

function multiplicacao(numero1,numero2){
    return numero1*numero2
}

function divisao(numero1,numero2){
    return numero1/numero2
}
