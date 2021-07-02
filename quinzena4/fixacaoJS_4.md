```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let ocorrencias = 0
  for(numero of arrayDeNumeros){
    if(numero === numeroEscolhido){
      ocorrencias +=1
    }
  }
  
  if(ocorrencias === 0){
    return `Número não encontrado`
  } else{
    return `O número ${numeroEscolhido} aparece ${ocorrencias}x`
  }
  
  
}
```