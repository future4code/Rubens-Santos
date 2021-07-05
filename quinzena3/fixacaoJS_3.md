```
function calculaNota(ex, p1, p2) {
  const prova1 = p1*2
  const prova2 = p2*3
  const nota = (prova1+prova2+ex)/6
  let conceito 
  
  if(nota >=9){
   conceito = "A"
} else if(nota >= 7.5){
   conceito ="B"
} else if(nota >= 6){
  conceito = "C"
} else if(nota < 6){
  conceito ="D"
}
return conceito
}

```