const checkAnswer = (correctAnswer) => (userAnswer) => {
  return correctAnswer.toLowerCase() === userAnswer.toLowerCase();
}

// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

// const answers = checkAnswer(correctAnswer);
// console.log(answers(userAnswer));
console.log(checkAnswer(correctAnswer)(userAnswer))