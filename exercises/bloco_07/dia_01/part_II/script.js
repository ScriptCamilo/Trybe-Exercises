// First exercise
const fatorial = (n) => (n <= 1) ? 1 : n * fatorial(n - 1);

console.log(fatorial(5));

// Second exercise
const longestWord = (setence) => {
  const words = setence.split(' ');
  let mainWord = '';
  
  for (let index = 0; index < words.length; index += 1) {
    if (mainWord.length < words[index].length) {
      mainWord = words[index];
    }
  }
  return mainWord;
};

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Third exercise
const clickCount = () => {
  const count = Number(document.querySelector('#numberCount').textContent);

  document.querySelector('#numberCount').innerText = count + 1 
};

const clickButton = document.querySelector('button');
clickButton.addEventListener('click', clickCount);

// Fourth exercise
const skills = ['Organização', 'JavaScript', 'Python'];

const findX = word => `Trybe x aqui!`.replace('x', word);
console.log(findX('Bebeto'));

const concat = string => `${string} Minhas três principais habilidades são: ${skills}`
console.log(concat(findX('Bebeto')));