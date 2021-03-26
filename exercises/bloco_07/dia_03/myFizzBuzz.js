const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', 'Number not divided by 3 and 5');
assert.strictEqual(myFizzBuzz(9), 'fizz', 'Number not divided by only 3');
assert.strictEqual(myFizzBuzz(10), 'buzz', 'Number not divided by only 5');
assert.strictEqual(myFizzBuzz(14), 14, 'Number must be the same');
assert.strictEqual(myFizzBuzz('10'), false, 'String shall not pass');