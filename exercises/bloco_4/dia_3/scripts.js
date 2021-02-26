const symbol = '*'
let n = 10;

/*
 1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
 imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
*/

for (index = 1; index <= n; index+=1) {
  console.log(`${symbol.repeat(n)}`)
}