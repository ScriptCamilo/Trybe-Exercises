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
function greaterNumber(array) {
  let greater = null;

  for (let index in array) {
    if (greater === null) {
      greater = index;
    } else if (greater < array[index]) {
      greater = index;
    } else {
      continue;
    }
  }
  return greater;
}

console.log(greaterNumber([2, 3, 6, 7, 10, 1]));
console.log();

// 3.
