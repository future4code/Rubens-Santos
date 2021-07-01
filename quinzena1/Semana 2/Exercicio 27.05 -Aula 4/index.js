/*Exercício de interpretação de código 1
    undefined
    null
    11
    3
    [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    f.9
*/

/* Exercício de interpretação de código 2
    SUBI NUM ONIBUS EM MARROCOS 27

*/


//Exercício de escrita de código 1
const nome = prompt("Qual é o seu nome?")
const email = prompt("Qual é o seu Email?")

console.log(`O email ${email} foi cadastrado com sucesso. Seja bem vindo(a) ${nome}.`)

//Exercício de escrita de código 2

const arrayComidas = ["Pizza","Chocolate","Macarrao","Churrasco","Pao"]
console.log(arrayComidas);
console.log("Essas são minhas comidas preferidas:","\n", arrayComidas.toString().replaceAll(",", "\n"))

let escolhaComida = prompt("Qual é a sua comida preferida?")
arrayComidas.splice(1,1,escolhaComida)
console.log(arrayComidas)

//Exercício de Escrita de código 3

const listaDeTarefas = []

let tarefa1 = prompt("Primeira tarefa")
let tarefa2 = prompt("Segunda tarefa")
let tarefa3 = prompt("Terceira tarefa")

listaDeTarefas.push("1."+tarefa1)
listaDeTarefas.push("2."+tarefa2)
listaDeTarefas.push("3."+tarefa3)
console.log(listaDeTarefas)

const i = Number(prompt("Qual tarefa você já fez? (0,1 ou 2)"))

listaDeTarefas.splice(listaDeTarefas[i-1],1)
console.log(listaDeTarefas)


