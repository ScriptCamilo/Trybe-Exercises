/*
  3. Faça um programa que retorne o maior de três números. 
  Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let firstNumber = 24;
let secondNumber = 39;
let thirdNumber = 8;

if ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) {
  console.log(`O maior número é: ${firstNumber}`);
} else if ((secondNumber > firstNumber) && (secondNumber > thirdNumber)) {
  console.log(`O maior número é: ${secondNumber}`);
} else if ((thirdNumber > secondNumber) && (thirdNumber > firstNumber)) {
  console.log(`O maior número é: ${thirdNumber}`);
}