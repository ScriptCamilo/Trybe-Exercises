/* 
  Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
  Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
  Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

  Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
  Um ângulo será considerado inválido se não tiver um valor positivo.
*/

let firstAngle = 90;
let secondAngle = 45;
let thirdAngle = -45;

if (firstAngle < 0 || secondAngle < 0 || thirdAngle < 0) {
  console.log('Error! Os ângulos de um triângulo não podem ser negativos.');
} else if (firstAngle + secondAngle + thirdAngle === 180) {
  console.log(true);
} else {
  console.log(false);
}