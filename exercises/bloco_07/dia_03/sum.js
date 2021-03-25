const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(typeof(sum), 'function', 'That must be a function');
assert.strictEqual(sum(4, 5), 9, 'This sum must be 9');
assert.strictEqual(sum(0, 0), 0, 'This sum must be 0');
assert.strictEqual(sum(4, '5'), 9);