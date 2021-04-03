const assert = require('assert');

const checkTest = (correctAnswers, studentAnswers, action) => action(correctAnswers, studentAnswers);

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const studentAnswers2 = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers3 = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'N.A', 'D']

const checkAnswers = (correctAnswers, studentAnswers) => {
  let point = 0;
  studentAnswers.forEach((element, index) => {
    if (element === correctAnswers[index]) {
      point += 1;
    } else if (element !== 'N.A') {
      point -= 0.5;
    }
  })
  return point;
}

assert.strictEqual(checkTest(rightAnswers, studentAnswers, checkAnswers), 5);
assert.strictEqual(checkTest(rightAnswers, studentAnswers2, checkAnswers), 10);
assert.strictEqual(checkTest(rightAnswers, studentAnswers3, checkAnswers), 7.5);