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

  const a = Array.from(Array(100).keys())

  let b = 0
  let pares = []

  for (let numero of a) {
    if (numero % 2 == 0) {
      pares.push(numero)
      b += 1
    }

    if (b == n) {
      break
    }

  }

  return pares


}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  if (a == b && a == c) {
    return `Equilátero`

  } else if (a == b || a == c || b == c) {
    return `Isósceles`

  } else if (a != b && b != c && a != c) {
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

  const a = array.sort((a,b) => {
    return a - b
  })
  
  novoarray.push(a[a.length-2])
  novoarray.push(a[1])


  return novoarray

}

// EXERCÍCIO 11
function ordenaArray(array) {
  
let a = array.sort(function comparaNumeros(a,b){
  return a - b
})

return a

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
