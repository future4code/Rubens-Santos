/*Exercício de interpretação de código 1
    O código está somando 1 na váriavel valor a cada loop.
    O valor impresso é 5
 */

/*Exercício de interpretação de código 2
    a)10,11,12,15
    b)Sim.
    let i = 0
    for (let numero of lista) {
        console.log(lista[i])
        i++
    }
*/ 

/*Exercício de interpretação de código 3
    *
    **
    ***
    ****
*/


//Exercício de Escrita de Código 1

const numeroAnimais = (Number(prompt("Quantos animais de estimação você tem?")))
const nomeAnimais = []

if (numeroAnimais === 0) {
    console.log("Que pena, você pode adotar um pet!")
} 

while (nomeAnimais.length < numeroAnimais) {
    const nome = prompt("Qual o nome do seu animal de estimação?")
    nomeAnimais.push(nome)
}
console.log(nomeAnimais)

//Exercício de Escrita de Código 2

const listaNumeros = [5,10,20,25,30,35,40,50,80,90,110]

//a
for(const numero of listaNumeros){
    const numeroAtual = numero
    console.log(numeroAtual)
}

//b
for(const numero of listaNumeros){
    const numeroAtual = numero
    console.log(numeroAtual/10)
}

//c
const numerosPares = []
for(const numero of listaNumeros){
    if (numero % 2 === 0) {
        numerosPares.push(numero)
    }
}
console.log(numerosPares)

//d
const arrayStrings = []

for (let i = 0 ; i < listaNumeros.length ; i++){
    const frase = `O elemento do index ${i} é: ${listaNumeros[i]}`
    arrayStrings.push(frase)
}
console.log(arrayStrings)

//e
let maiorNumero = listaNumeros[0]
let menorNumero = listaNumeros[0]

for(const numero of listaNumeros){
    if(numero > maiorNumero){
        maiorNumero = numero
    }
}

for(const numero of listaNumeros){
    if(numero < menorNumero){
        menorNumero = numero
    }
}
console.log(`O maior número é ${maiorNumero}`)
console.log(`O menor número é ${menorNumero}`)


//Desafio 1
let numeroJogador1 = Number(prompt("Jogador 1, escolha um número."))
console.log("Vamos Jogar!")
let numeroJogador2 = Number(prompt("Jogador 2, escolha um número."))
let numeroDeTentativas = 1

while (numeroJogador2 !== numeroJogador1){
    console.log(`Número escolhido: ${numeroJogador2}`)
    console.log("Você errou")
    numeroDeTentativas += 1
    numeroJogador2 = Number(prompt("Jogador 2, escolha um número."))
}

console.log(`Número escolhido ${numeroJogador2}`)
console.log("Você acertou")
console.log(`Número de tentativas ${numeroDeTentativas}`)


