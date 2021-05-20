/*Exercício interpretação 1
    10
    10 5
*/

/*Exercício interpretação 2
    10 10 10
*/

/*Exercício interpretação 3
    let horasDiarias
    let valorDiario
*/


/*Exercício de escrita 1*/
let nome 
let idade

//Váriaveis sem valor atribuído tem o tipo undefined.
console.log(typeof(nome), typeof(idade))


nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

//Quando os valores são atribuídos os dois retornam o tipo string, porque o retorno do prompt sempre é uma string.
console.log(typeof(nome), typeof(idade))

console.log("Olá ",nome,", você tem ",idade, " anos.")

/*Exercício de escrita 2*/
let promptPergunta1 = prompt("Você pegou o ônibus?")
let promptPergunta2 = prompt("Você acordou na hora?")
let promptPergunta3 = prompt("Você teve aula?")

const pergunta1 = "Você pegou o ônibus? "
const pergunta2 = "Você acordou na hora? "
const pergunta3 = "Você teve aula? "

console.log(pergunta1,"- ", promptPergunta1)
console.log(pergunta2,"- ", promptPergunta2)
console.log(pergunta3,"- ", promptPergunta3)

/*Exercício de escrita 3*/

let a = 45 
let b = 80

let novoA = b
let novoB = a

a = novoA
b = novoB

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


/*Desafio*/

valor1 = Number(prompt("Qual é o primeiro valor?"))
valor2 = Number(prompt("Qual é o segundo valor?"))

multiplicaValores = valor1*valor2
somaValores = valor1+valor2

console.log("O primeiro valor somado ao segundo resulta em: ", somaValores)
console.log("O primeiro valor multiplicado pelo segundo valor resulta em: ",multiplicaValores)






