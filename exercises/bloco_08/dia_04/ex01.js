
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  const putTogether = (Together, one) => {
    return Together.concat(one);
  };
  const newArray = arrays.reduce(putTogether);

  return newArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);