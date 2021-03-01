/*
  1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , 
  definidas no começo com os valores que serão operados. Faça programas para:

  Adição
  Subtração
  Multiplicação
  Divisão
  Módulo
*/

let firstNumber = 8;
let secondNumber = 5;

function sum(x, y) {
  return x+y;
}

function difference(x, y) {
  return x-y;
}

function product(x, y) {
  return x*y;
}

function quotient(x, y) {
  return x/y;
}

function modulo(x, y) {
  return x%y;
}

console.log(`Sum: ${sum(firstNumber, secondNumber)}`);
console.log(`Difference: ${difference(firstNumber, secondNumber)}`);
console.log(`Product: ${product(firstNumber, secondNumber)}`);
console.log(`Quotient: ${quotient(firstNumber, secondNumber)}`);
console.log(`Modulo: ${modulo(firstNumber, secondNumber)}`);