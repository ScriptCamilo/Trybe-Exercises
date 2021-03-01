// 1.
function isPalindrome(words) {
  words = words.split(' ').join('').toLowerCase();
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
    } 
  }
  return highest;
}

console.log(highestNumber([2, 3, 6, 7, 10, 1]));
console.log();

// 3.
function smallestNumber(array) {
  let smallest = null;

  for (let index in array) {
    if (smallest === null) {
      smallest = index;
    } else if (smallest > array[index]) {
      smallest = index;
    }
  }
  return smallest;
}

console.log(smallestNumber([2, 4, 6, 7, 10, 0, -3]));
console.log();

// 4.
function moreCharacters(array) {
  let more = null;

  for (let index in array) {
    if (more === null) {
      more = array[index];
    } else if (more.length < array[index].length) {
      more = array[index];
    } 
  }
  return more;
}

console.log(moreCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
console.log();

// 5.