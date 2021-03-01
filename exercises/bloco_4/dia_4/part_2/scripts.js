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

// 2.