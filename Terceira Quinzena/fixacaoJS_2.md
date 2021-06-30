```
function calculaPrecoTotal(quantidade) {
 let valorFinal
  if(quantidade < 12){
    const maca = 1.30
    valorFinal = maca*quantidade
  } else {
    const maca = 1.00
    valorFinal = maca*quantidade
  }
  return valorFinal
}

```