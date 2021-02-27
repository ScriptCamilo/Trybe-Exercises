const symbol = '*'
let count = 5;

/*
 1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
 imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
*/
for (index = 1; index <= count; index+=1) {
  console.log(symbol.repeat(count))
}

// 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
for (index = 1; index <= count; index+=1) {
  console.log(symbol.repeat(index))
}

// 3. Agora inverta o lado do triângulo.
for (index = 1; index <= count; index+=1) {
  console.log(' '.repeat(count-index) + symbol.repeat(index))
}

// 4. Depois, faça uma pirâmide com n asteriscos de base.
for (index = 1; index <= count; index+=2) {
  let space = Math.floor((count-index)/2);
  console.log(' '.repeat(space) + symbol.repeat(index) + ' '.repeat(space))
}

// BÔNUS
// 5. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar.
count = 7
for (index = 1; index <= count; index+=2) {
  let space = Math.floor((count-index)/2);
  if (index === count) {
    console.log(symbol.repeat(count))
  } else {
    console.log(' '.repeat(space) + symbol.repeat(1) + symbol.repeat(1) + ' '.repeat(space))
  }
}