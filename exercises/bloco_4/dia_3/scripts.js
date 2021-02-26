const symbol = '*'
let number = 5;

/*
 1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
 imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
*/
for (index = 1; index <= number; index+=1) {
  console.log(symbol.repeat(number))
}

// 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
for (index = 1; index <= number; index+=1) {
  console.log(symbol.repeat(index))
}

// 3. Agora inverta o lado do triângulo.
for (index = 1; index <= number; index+=1) {
  console.log(' '.repeat(number-index) + symbol.repeat(index))
}