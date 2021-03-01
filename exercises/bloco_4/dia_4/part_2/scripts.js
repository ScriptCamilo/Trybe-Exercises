// 1.
function isPalindrome(words) {
  words = words.split(' ').join('').toLowerCase()
  let reversedWords = words.split('').reverse().join('');

  if (words === reversedWords) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('Arara'));
console.log();

// 2.
function highestNumber(array) {
  let highest = null;

  for (let index in array) {
    if (highest === null) {
      highest = index;
    } else if (highest < array[index]) {
      highest = index;
    } else {
      continue;
    }
  }
  return highest;
}

console.log(highestNumber([2, 3, 6, 7, 10, 1]));
console.log();

// 3.
