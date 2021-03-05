/*
  Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par.
  Caso contrário, ele retorna false.

  Bonus: use somente um if.
*/

let firstNumber = 47;
let secondNumber = 35;
let thirdNumber = 21;

if ((firstNumber%2 === 0) || (secondNumber%2 === 0) || (thirdNumber%2 === 0)) {
  console.log(true);
} else {
  console.log(false);
}