/*
  Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. 
  A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) 
  a empresa terá ao vender mil desses produtos.

  Atente que, sobre o custo do produto, incide um imposto de 20%.

  Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

  O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, 
  sendo que o imposto de 20% também faz parte do valor de custo.

  valorCustoTotal = valorCusto + impostoSobreOCusto
  lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

let productCost = 200;
let productSell = 400;

if (productCost < 0 || productSell < 0) {
  return console.log('Error! The product value cannot be less than 0.');
}

let productTotal = (productCost + (productCost*0.2)) * 1000;
let profit = (productSell*1000) - productTotal;

console.log(`The final profit will be ${profit} dollars.`);