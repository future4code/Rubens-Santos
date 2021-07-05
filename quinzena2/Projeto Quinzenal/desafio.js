const cartasJogador = []
const cartasComputador = []
let pontuacaoJogador = 0
let pontuacaoComputador = 0

if (confirm("Quer iniciar uma nova rodada?")) {
   console.log("Bem vindo ao Jogo de BlackJack")

   cartasIniciaisJogador()
   cartasIniciaisComputador()

   while (cartasJogador[0].texto.includes('A') && cartasJogador[1].texto.includes('A')) {
      cartasIniciaisJogador()

   }

   while (cartasComputador[0].texto.includes('A') && cartasComputador[1].texto.includes('A')) {
      cartasIniciaisComputador()
   }

   suasCartas = playerCards()
   cartasDoOponente = pcCards()



   console.log(`Suas cartas são ${suasCartas.join(" ")}. A carta revelada do computador é ${cartasDoOponente[0]}\nDeseja comprar mais uma carta?`)

   while (confirm("Jogador, deseja comprar uma nova carta?") && pontuacaoJogador <= 21) {
      cartasJogador.push(comprarCarta())
      suasCartas = playerCards()
      pontuacaoJogador = cartasJogador.reduce((valorInicial, valorPropriedade) => valorInicial + valorPropriedade.valor, 0)
      if (pontuacaoJogador >= 21) {
         break
      }
      console.log(`Suas cartas são ${suasCartas.join(" ")}. A carta revelada do computador é ${cartasDoOponente[0]}\nDeseja comprar mais uma carta?`)

   }

   while (pontuacaoComputador <= pontuacaoJogador) {
      cartasComputador.push(comprarCarta())
      cartasDoOponente = pcCards()
      pontuacaoComputador = cartasComputador.reduce((valorInicial, valorPropriedade) => valorInicial + valorPropriedade.valor, 0)
   }

   console.log(`Suas cartas são ${suasCartas.join(" ")}. Sua pontuação é ${pontuacaoJogador}\nAs cartas do computador são ${cartasDoOponente.join(" ")}. A pontuação do computador é ${pontuacaoComputador}`)

} else {
   console.log("O jogo terminou.")
}


if (pontuacaoJogador > 21) {
   console.log("Você perdeu o jogo")
} else if (pontuacaoJogador < 21 && pontuacaoComputador > 21) {
   console.log("Você ganhou o jogo")
} else if (pontuacaoJogador === pontuacaoComputador && pontuacaoJogador != 0) {
   console.log("Empate")
}

function cartasIniciaisJogador() {
   cartasJogador.splice(0, cartasJogador.length)
   cartasJogador.push(comprarCarta())
   cartasJogador.push(comprarCarta())
   pontuacaoJogador = cartasJogador.reduce((valorInicial, valorPropriedade) => valorInicial + valorPropriedade.valor, 0)

}
function cartasIniciaisComputador() {
   cartasComputador.splice(0, cartasComputador.length)
   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   pontuacaoComputador = cartasComputador.reduce((valorInicial, valorPropriedade) => valorInicial + valorPropriedade.valor, 0)
}

function playerCards() {
   return cartasJogador.map(cartasJogador => cartasJogador.texto)
}

function pcCards() {
   return cartasComputador.map(cartasComputador => cartasComputador.texto)
}
