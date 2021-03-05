const symbol = '*';
let count = 5;

/*
 1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
 imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 
*/
for (index = 1; index <= count; index+=1) {
  console.log(symbol.repeat(count));
}

// 2. Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
for (index = 1; index <= count; index+=1) {
  console.log(symbol.repeat(index));
}

// 3. Agora inverta o lado do triângulo.
for (index = 1; index <= count; index+=1) {
  console.log(' '.repeat(count-index) + symbol.repeat(index));
}

// 4. Depois, faça uma pirâmide com n asteriscos de base.
for (index = 1; index <= count; index+=2) {
  let space = Math.floor((count-index)/2);
  console.log(' '.repeat(space) + symbol.repeat(index) + ' '.repeat(space));
}

// BÔNUS
// 5. Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar.
count = 7;
let space = Math.floor((count)/2);

for (index = 1; index <= count; index+=2) {

  if (index === 1) {
    console.log(' '.repeat(space) + symbol.repeat(index) + ' '.repeat(space))
    space -= 1;
  } else if (index === (count - 2)) {
    console.log(symbol.repeat(count));
    break;
  }

  console.log(' '.repeat(space) + symbol.repeat(1) + ' '.repeat(index) + symbol.repeat(1) + ' '.repeat(space))
  space -= 1;
}

/*
6. Faça um programa que diz se um número definido numa variável é primo ou não. Um número primo é um número que só é 
divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
Além disso, vai precisar de fazer uma checagem a cada iteração e armazenar os resultados em algum lugar.

Dica: você vai precisar de fazer um loop que vá de 0 ao número definido; 
*/
let number = 95;
for (let beforeNumber = 0; beforeNumber <= number; beforeNumber += 1) {
  if (number === 0) {
    console.log(`O número 0 não se encaixa como número primo.`);
    break;
  } else if (number === 1) {
    console.log(`O número 1 não se encaixa como número primo.`);
    break;
  } else if ((number > 2) && (number%2 === 0)) {
    console.log(`O número ${number} não é primo.`);
    break;
  } else if ((beforeNumber !== number) && (beforeNumber > 1) && (number > 2) && (number%beforeNumber === 0)) {
    console.log (`O número ${number} não é primo.`);
    break;
  } else if (beforeNumber === number) {
    console.log(`O número ${number} é primo.`)
  }
}