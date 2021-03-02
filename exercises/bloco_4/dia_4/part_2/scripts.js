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
function repeatedNumber(array) {
  let moreRepeated = null;
  let count = 0;
  for (let index of array) {
    let aux = 0;

    for (let repeatIndex = 0; repeatIndex < array.length; repeatIndex += 1) {
      if (index === array[repeatIndex]) {
        aux += 1;
      }
    }

    if (moreRepeated === null) {
      moreRepeated = index;
    } else if (aux > count) {
      moreRepeated = index;
      count = aux;
    }
  }
  return moreRepeated;
}

console.log(repeatedNumber([2, 3, 2, 5, 8, 2, 3]));
console.log();

// 6.
function beforeNumberSum(number) {
  let sum = 0;
  for (let index = 1; index <= number; index += 1) {
    sum += index;
  }
  return sum;
}

console.log(beforeNumberSum(5));
console.log();

// 7.