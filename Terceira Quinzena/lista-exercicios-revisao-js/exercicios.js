// EXERCÍCIO 01
function inverteArray(array) {
  const novoarray = []
  for (let i = array.length - 1; i >= 0; i--) {
    const pessoa = array.pop()
    novoarray.push(pessoa)
  }
  return novoarray
}


// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {

  function retornaPar(numero) {
    return numero % 2 === 0

  }
  const novoarray = array.filter(retornaPar)

  return novoarray.map(function (numero) {
    return Math.pow(numero, 2)
  })


}


// EXERCÍCIO 03
function retornaNumerosPares(array) {

  function retornaPar(numero) {
    return numero % 2 === 0
  }

  return array.filter(retornaPar)

}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {


  let pessoa = 0

  for (let numero of array) {
    if (pessoa < numero) {
      pessoa = numero
    }
  }

  return pessoa

}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {

  let quantidade = 0

  for (let numero of array) {
    quantidade += 1
  }

  return quantidade

}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const respostas = [false, false, true, true, true]
  return respostas

}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

  const menorNumero = Array.from(Array(100).keys())

  let comparador = 0
  let pares = []

  for (let numero of menorNumero) {
    if (numero % 2 == 0) {
      pares.push(numero)
      comparador += 1
    }

    if (comparador == n) {
      break
    }

  }

  return pares


}

// EXERCÍCIO 08
function checaTriangulo(menorNumero, comparador, c) {
  if (menorNumero == comparador && menorNumero == c) {
    return `Equilátero`

  } else if (menorNumero == comparador || menorNumero == c || comparador == c) {
    return `Isósceles`

  } else if (menorNumero != comparador && comparador != c && menorNumero != c) {
    return `Escaleno`
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  let maior
  let divisivel
  let diferenca

  if (num1 > num2) {
    maior = num1
    divisivel = ((num1 % num2) === 0)
    diferenca = num1 - num2

  } else if (num2 > num1) {

    maior = num2
    divisivel = ((num2 % num1) === 0)
    diferenca = num2 - num1

  } else if (num1 === num2) {
    maior = num1
    divisivel = true
    diferenca = 0
  }

  return { maiorNumero: maior, maiorDivisivelPorMenor: divisivel, diferenca: diferenca }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  const novoarray = []

  const menorNumero = array.sort((menorNumero, comparador) => {
    return menorNumero - comparador
  })

  novoarray.push(menorNumero[menorNumero.length - 2])
  novoarray.push(menorNumero[1])


  return novoarray

}

// EXERCÍCIO 11
function ordenaArray(array) {

  let menorNumero = array.sort(function comparaNumeros(menorNumero, comparador) {
    return menorNumero - comparador
  })

  return menorNumero

}

// EXERCÍCIO 12
function filmeFavorito() {

  const menorNumero = { nome: "O Diabo Veste Prada", ano: 2006, diretor: "David Frankel", atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"] }

  return menorNumero
}

// EXERCÍCIO 13
function imprimeChamada() {
  const menorNumero = { nome: "O Diabo Veste Prada", ano: 2006, diretor: "David Frankel", atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"] }

  return `Venha assistir ao filme ${menorNumero.nome}, de ${menorNumero.ano}, dirigido por ${menorNumero.diretor} e estrelado por ${menorNumero.atores[0]}, ${menorNumero.atores[1]}, ${menorNumero.atores[2]}, ${menorNumero.atores[3]}.`

}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

  const retangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2
  }

  return retangulo

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  const menorNumero = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return menorNumero
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

  return arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 18
  })


}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

  return arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 18
  })

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  return array.map((numero) => {
    return numero * 2
  })
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

  return array.map((numero) => {
    return (numero * 2).toString()
  })
}

// EXERCÍCIO 17C
function verificaParidade(array) {

  return array.map((numero) => {
    if (numero % 2 != 0) {
      return `${numero} é ímpar`
    } else {
      return `${numero} é par`
    }

  })

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

  return pessoas.filter((pessoa) => {
    return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
  })
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter((pessoa) => {
    return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60
  })
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  const listaOrdenada = consultasNome.sort(function (menorNumero, comparador) {
              if (menorNumero.nome > comparador.nome) {
                return 1
              }
              if (menorNumero.nome < comparador.nome) {
                return -1
              }
              return 0
            })

  return listaOrdenada
}


// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

  // let timestamp = consultasData.map((data) =>{
  //   let time = new Date(data.dataDaConsulta).getTime()
  //   return time
  // })

  // return timestamp.sort((a,b) => {
  //   return a - b
  // })

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

  contas.forEach((conta) => {
    let gastoTotal = conta.compras.reduce((valorInicial, valorFinal) => valorInicial + valorFinal, 0)
    conta.saldoTotal -= gastoTotal
  })

  return contas
}