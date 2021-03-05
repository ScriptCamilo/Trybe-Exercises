/*
  Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos 
  uma das três for ímpar. Caso contrário, ele retorna false.

  Bonus: use somente um if.
*/

let firstNumber = 48;
let secondNumber = 36;
let thirdNumber = 22;

if ((firstNumber%2 !== 0) || (secondNumber%2 !== 0) || (thirdNumber%2 !== 0)) {
  console.log(true);
} else {
  console.log(false);
}