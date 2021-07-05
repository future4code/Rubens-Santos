/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
let pontuacaoJogador

if(confirm("Quer iniciar uma nova rodada?")){
   console.log("Bem vindo ao Jogo de BlackJack")
   const cartasJogador =[]
   const cartasComputador = []
 

   cartasJogador.push(comprarCarta())
   cartasJogador.push(comprarCarta())
   cartasComputador.push(comprarCarta())
   cartasComputador.push(comprarCarta())

   pontuacaoJogador = cartasJogador.reduce((valorInicial,valorPropriedade) => valorInicial + valorPropriedade.valor,0)
   pontuacaoComputador = cartasComputador.reduce((valorInicial,valorPropriedade) => valorInicial + valorPropriedade.valor,0)

   const suasCartas = cartasJogador.map(cartasJogador => cartasJogador.texto)
   const cartasDoOponente = cartasComputador.map(cartasJogador => cartasJogador.texto)

   
   console.log(`Usuário - cartas: ${suasCartas.join(" ")} - pontuação ${pontuacaoJogador}`)
   console.log(`Oponente - cartas: ${cartasDoOponente.join(" ")} - pontuação ${pontuacaoComputador}`)



   if (pontuacaoJogador > pontuacaoComputador) {
      console.log(`Você venceu!`)
   }else{
      console.log(`Você perdeu.`)
   }

} else {
   console.log("O jogo acabou.")
}

