/*Exercício de interpretação de código 1
    a.False
    b.False
    c.True
    d.boolean
*/

/*Exercício de interpretação de código 2
    Ele não converteu as strings para Number.
    O console.log vai imprimir um número seguido do outro. primeiroNumerosegundoNumero
*/

/*Exercício de interpretação de código 3
    let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
*/


//Exercício de escrita de código 1

const minhaIdade = prompt("Qual é a sua idade?")
const idadeAmigo = prompt("Qual é a idade do seu melhor amigo?")

console.log("Sua idade é maior do que a do seu melhor amigo?", minhaIdade > idadeAmigo)

//Exercício de escrita de código 2

const numeroPar = Number(prompt("Digite um número par."))
console.log(numeroPar % 2)
//O resto de um número par dividido por 2 é sempre 0
//Se o usuário inserir um número ímpar, o resto passa a ser 1.


//Exercício de escrita de código 3

const idade = Number(prompt("Quantos anos você tem?"))
const meses = idade*12
const dias = idade*365
const horas = idade*8760


console.log(`Você tem ${idade} anos, ou ${meses} meses, ou ${dias} dias, ou ${horas} horas`)

//Exercício de escrita de código 4

const numero1 = Number(prompt("Escolha o primeiro número."))
const numero2 = Number(prompt("Escolha o segundo número"))

console.log("O primeiro número é maior do que o segundo?", numero1 > numero2)
console.log("O primeiro número é igual ao segundo?", numero1 == numero2)
console.log("O primero número é divisível pelo segundo?", numero1 % numero2 == 0)
console.log("O segundo número é divisível pelo primero?", numero2 % numero1 ==0)


//Desafio 1


checaUnidade()

function checaUnidade() {
    const unidadeTemperatura = prompt("Farenheit ou Celsius?")

    if (unidadeTemperatura == "Farenheit" || unidadeTemperatura == "farenheit") {
        farenheit = Number(prompt("Quantos graus Farenheit?"))
        farenheitParaCelsius()
        farenheitParaKelvin()
    } else if (unidadeTemperatura == "celsius" || unidadeTemperatura == "Celsius") {
        celsius = Number(prompt("Quantos graus Celsius?"))
        celsiusParaFarenheit()
        celsiusParaKelvin()
    } else {
        checaUnidade();
    }

}

function celsiusParaKelvin(){
    kelvin = celsius + 273.15
    console.log(`${kelvin}K`)
}
function farenheitParaCelsius(){
    celsius = (farenheit -32) * (5/9)
    console.log(`${celsius} °C`)
}
function celsiusParaFarenheit(){
    farenheit = celsius*(9/5) + 32
    console.log(`${farenheit} °F`)
}
function farenheitParaKelvin(){
    kelvin = (farenheit - 32)*(5/9) + 273.15
    console.log(`${kelvin} K`)
}