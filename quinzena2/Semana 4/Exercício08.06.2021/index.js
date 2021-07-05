//Exercício de escrita de código 1

const idade = Number(prompt("Qual é a sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}

//Exercício de escrita de código 2

const turno = prompt("Em qual turno você estuda? Matutino(M) Vespertirno(V) ou Noturno(N)")

function turnoF() {
    if (turno != "M" && turno != "V" && turno != "N") {
        console.log("Insira um turno válido")
    } else if (turno === "M") {
        console.log("Bom dia")
    } else if (turno === "V") {
        console.log("Boa tarde.")
    } else if (turno === "N") {
        console.log("Boa noite")
    } else{
        turnoF()
    }
    
}

//Exercício de escrita de código 3

switch (turno) {
    case "M":
        console.log("Bom dia")
        break;

    case "V":
        console.log("Boa tarde")
        break

    case "N":
        console.log("Boa noite")
        break
}

//Exercício de escrita de código 4

const genero = prompt("Qual é o genêro do filme?").toLowerCase
const preco = Number(prompt("Qual é o preço do ingresso?"))

if (genero == "fantasia" && preco < 15) {
    const lanche = prompt("Qual lanche você vai comprar?")
    console.log(`Bom Filme! Aproveite o seu ${lanche}`)
} else {
    console.log("Escolha outro filme :(")
}


//Desafio 2

// const nomeCompleto = prompt("Qual é o seu nome completo?")
// const tipoDeJogo = prompt("Qual é o tipo de jogo?")
// const etapaDoJogo = prompt("Qual é a etapa do jogo")
// const categoria = prompt("Qual é a categoria?")
// const quantidadeDeIngressoa = prompt("Quantos ingressos?")


