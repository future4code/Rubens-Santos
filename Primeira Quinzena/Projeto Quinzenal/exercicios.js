// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = Number(prompt("Qual é a altura?"))
  const largura = Number(prompt("Qual é a largura?"))

  const areaReatangulo = (altura*largura)
  console.log(areaReatangulo)
}

// Exercício 2
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoNascimento = Number(prompt("Em qual ano voce nasceu?"))

  const Idade = (anoAtual - anoNascimento)
  console.log(Idade)
}

// Exercício 3
function calculaIMC() {
  const peso = Number(prompt("Qual é a sua altura?"))
  const altura = Number(prompt("Qual é o seu peso?"))

  const IMC = peso/(altura*altura)

  console.log(IMC)
}

// Exercício 4
function imprimeInformacoesUsuario() {
    const nome = prompt("Qual é o seu nome?")
    const idade = prompt("Quantos anos você tem?")
    const email = prompt("Qual é o seu email")

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
    const cor1 = prompt("Escolha uma cor")
    const cor2 = prompt("Escolha uma cor")
    const cor3 = prompt("Escolha uma cor")

    let listaCores = [cor1,cor2,cor3]
    
    console.log(listaCores)

  }

// Exercício 6
function retornaStringEmMaiuscula() {
    const nome = prompt("nome")
    const nomeMaiusculo = nome.toUpperCase()

    console.log(nomeMaiusculo)
  }

// Exercício 7
function calculaIngressosEspetaculo() {
    const valorTotal = prompt("Qual é o valor?")
    const valorIngresso = prompt("Valor do ingresso?")

    const totalIngressos = valorTotal/valorIngresso
    console.log(totalIngressos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  const string1 = prompt("Primeira string")
  const string2 = prompt("Segunda String")

  const tamanhoString1 = string1.length
  const tamanhoString2 = string2.length

  console.log(tamanhoString1 === tamanhoString2)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("string1")
  const string2 = prompt("string2")

  const comparacao = string1.toLowerCase() === string2.toLowerCase()

  console.log(comparacao)
 
}

// Exercício 10
function checaRenovacaoRG() {

  const anoAtual = Number(prompt("Qual é o ano atual?"))
  const anoNascimento = Number(prompt("Em qual ano você nasceu?"))
  const anoEmissao = Number(prompt("Em qual ano seu rg foi emitido?"))
  const idade = anoAtual - anoNascimento
  

  if (idade <= 20) {
    checaRenovacao = anoAtual - anoEmissao >= 5
    console.log(checaRenovacao)
  } else if (idade > 20 && idade <= 50) {
    checaRenovacao = anoAtual - anoEmissao >=10
    console.log(checaRenovacao)
  } else if (idade > 50){
    checaRenovacao = anoAtual - anoEmissao >=15
    console.log(checaRenovacao)
  }

}

// Exercício 11
function checaAnoBissexto() {
  const ano = prompt("qual é o ano?")
  
  if (ano % 4 == 0 && ano % 100 !== 0) {
    const checaBissexto = true
    console.log(checaBissexto)
  }else if (ano % 400 === 0 && ano % 100 === 0) {
    const checaBissexto = true
    console.log(checaBissexto)
  } else {
    const checaBissexto = false
    console.log(checaBissexto)
  }

}

// Exercício 12
function checaValidadeInscricaoLabenu() {

  const idade = (prompt("Tem mais de 18??"))
  const ensinoMedio = prompt("Tem ensino médio completo?")
  const disponibilidade = prompt("Tem disponibilidade de horário?")

  if (idade ==="sim" && ensinoMedio  ==="sim" && disponibilidade === "sim") {
    const validade = true
    console.log(validade)
  } else {
    const validade = false
    console.log(validade)
  }

}