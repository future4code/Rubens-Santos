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

  const a = array.sort((a, b) => {
    return a - b
  })

  novoarray.push(a[a.length - 2])
  novoarray.push(a[1])


  return novoarray

}

// EXERCÍCIO 11
function ordenaArray(array) {

  let a = array.sort(function comparaNumeros(a, b) {
    return a - b
  })

  return a

}

// EXERCÍCIO 12
function filmeFavorito() {

  const a = { nome: "O Diabo Veste Prada", ano: 2006, diretor: "David Frankel", atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"] }

  return a
}

// EXERCÍCIO 13
function imprimeChamada() {
  const a = { nome: "O Diabo Veste Prada", ano: 2006, diretor: "David Frankel", atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"] }

  return `Venha assistir ao filme ${a.nome}, de ${a.ano}, dirigido por ${a.diretor} e estrelado por ${a.atores[0]}, ${a.atores[1]}, ${a.atores[2]}, ${a.atores[3]}.`

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
  const a = {
    ...pessoa,
    nome: "ANÔNIMO"
  }
  return a
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

  return arrayDePessoas.filter((pessoa)=>{
    return pessoa.idade >= 18
  })


}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

  return arrayDePessoas.filter((pessoa)=>{
    return pessoa.idade < 18
  })

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

  return array.map((numero) =>{
    return numero*2
  })
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  
  return array.map((numero) =>{
    return (numero*2).toString()
  })
}

// EXERCÍCIO 17C
function verificaParidade(array) {

  return array.map((numero) =>{
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

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
