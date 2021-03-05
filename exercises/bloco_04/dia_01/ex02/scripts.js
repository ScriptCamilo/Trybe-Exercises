/* 
  2. Faça um programa que retorne o maior de dois números. 
  Defina no começo do programa duas variáveis com os valores que serão comparados.
*/

let firstNumber = 245;
let secondNumber = 321;

if (firstNumber > secondNumber) {
  console.log(`The number ${firstNumber} is greater than ${secondNumber}.`)
} else if (secondNumber > firstNumber) {
  console.log(`The number ${secondNumber} is greater than ${firstNumber}.`)
} else {
  console.log(`The numbers are equal.`)
}