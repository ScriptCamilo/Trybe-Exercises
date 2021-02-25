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