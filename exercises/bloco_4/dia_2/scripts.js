let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado
let soma = 0;
for (i of numbers) {
  soma += i;
}
console.log(`A soma dos valores é: ${soma}`)

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
let media;
media = soma/numbers.length
console.log(`A média aritmética é: ${media}`)

/*
  4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: 
  "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
*/
if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20")
}

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0;
for (i of numbers) {
  if (maiorNumero < i) {
    maiorNumero = i;
  }
}
console.log(`O maior número é: ${maiorNumero}`);

/*
  6. Descubra quantos valores ímpares existem no array e imprima o resultado. 
  Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
*/
let imparesCount = 0;
for (i of numbers) {
  if (i % 2 !== 0) {
    imparesCount++;
  }
}

if (imparesCount > 0) {
  console.log(`A quantidade de números ímpar é: ${imparesCount}`)
} else {
  console.log("Nenhum valor ímpar foi encontrado")
}

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o
let menorNumero = 0;
for (i in numbers) {
  if (numbers[menorNumero] > numbers[i]) {
    menorNumero = i;
  }
}
console.log(`O menor número é: ${numbers[menorNumero]}`)