/*
  11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
  Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
*/

let salary = 3000;
let aliquotaINSS;
let aliquotaIR;
let portion;

if (salary <= 1556.94) {
  aliquotaINSS = 8/100;
} else if ((salary >= 1556.95) && (salary <= 2594.92)) {
  aliquotaINSS = 9/100;
} else if ((salary >= 2594.93) && (salary <= 5189.82)) {
  aliquotaINSS = 11/100;
} else {
  aliquotaINSS = 570.88;
}

if (aliquotaINSS === 570.88) {
  salary -= aliquotaINSS;
} else {
  salary -= (salary*aliquotaINSS);
}

if (salary <= 1903.98) {
  aliquotaIR = 0;
} else if ((salary >= 1903.98) && (salary <= 2826.65)) {
  aliquotaIR = 7.5/100;
  portion = 142.80
} else if ((salary >= 2826.66) && (salary <=  3751.05)) {
  aliquotaIR = 15/100;
  portion = 354.80
} else if ((salary >= 3751.06) && (salary <= 4664.68)) {
  aliquotaIR = 22.5/100;
  portion = 636.13;
} else {
  aliquotaIR = 27.5/100;
  portion = 869.36;
}

salary -= (salary*aliquotaIR) - portion;
console.log(salary);