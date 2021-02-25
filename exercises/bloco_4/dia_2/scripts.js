let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log()
for (index = 0; index < numbers.length; index+=1) {
  console.log(numbers[index]);
}
console.log('')

// 2. Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado
let soma = 0;
for (index of numbers) {
  soma += index;
}
console.log(`A soma dos valores é: ${soma}`)
console.log('')

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
let media;
media = soma/numbers.length
console.log(`A média aritmética é: ${media}`)
console.log('')

/*
  4. Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: 
  "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
*/
if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20")
}
console.log('')

// 5. Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0;
for (number of numbers) {
  if (maiorNumero < number) {
    maiorNumero = number;
  }
}
console.log(`O maior número é: ${maiorNumero}`);
console.log('')

/*
  6. Descubra quantos valores ímpares existem no array e imprima o resultado. 
  Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
*/
let imparesCount = 0;
for (number of numbers) {
  if (number % 2 !== 0) {
    imparesCount++;
  }
}

if (imparesCount > 0) {
  console.log(`A quantidade de números ímpares é: ${imparesCount}`)
} else {
  console.log("Nenhum valor ímpar foi encontrado")
}
console.log('')

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o
let menorNumero = 0;
for (index in numbers) {
  if (numbers[menorNumero] > numbers[index]) {
    menorNumero = index;
  }
}
console.log(`O menor número é: ${numbers[menorNumero]}`)
console.log('')

// 8. Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado
// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2
for (count = 1; count <= 25; count++) {
  console.log(`Número: ${count}`)
  console.log(`Divisão por 2: ${count/2}`) // 9
  console.log('')
}