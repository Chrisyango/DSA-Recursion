'use strict';

// URLify a string
function urlify(string) {
  const splitString = string.split('');
  let result = '';
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === ' ') {
      result += '%20';
    } else {
      result += splitString[i];
    }
  }
  return result;
}

console.log(urlify('Chris Yang'));

// Filtering an array
function filter(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= 5) {
      result.push(array[i]);
    }
  }
  result.sort();
  return result;
}

console.log(filter([1,2,3,4,5,6,7,8,9]));

// Max sum in the array
function maxSum(array) {
  let sum = [];
  for (let i = 0; i < array.length + 1; i++) {
    let newArray = array.slice(0, i);
    let newSum = 0;
    for (let j = 0; j < newArray.length; j++) {
      newSum = newSum+ newArray[j];
    }
    sum.push(newSum);
  }
  sum.sort((a, b) => {
    return a - b;
  });
  return sum.pop();
}

console.log(maxSum([4,6,-3,5,-2,1]));

// Merge Arrays
function mergeArrays(array1, array2) {
  let mergedArrays = [];
  for (let i = 0; i < array1.length; i++) {
    mergedArrays.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    mergedArrays.push(array2[i]);
  }
  return mergedArrays.sort((a, b) => {
    return a - b;
  });
}

console.log(mergeArrays([1,3,6,8,11], [2,3,5,8,9,10]));

// Remove Characters
function removeCharacters(string, characters) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    let characterMatch = false;
    for (let j = 0; j < characters.length; j++) {
      if (string[i] === characters[j]) {
        characterMatch = true;
      }
    }
    if (!characterMatch) {
      result += string[i];
    }
  }
  return result;
}

console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// Products
function products(array) {
  let product = [];
  for (let i = 0; i < array.length; i++) {
    let productElement = 1;
    for (let j = 0; j < array.length; j++) {
      if (j === i) {
        productElement *= 1;
      } else {
        productElement *= array[j];
      }
    }
    product.push(productElement);
  }
  return product;
}

console.log(products([1,3,9,4]));

// 2D array
function twoDArray(array) {
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    console.log(row);
    for (let j = 0; j < array.length; j++) {
      // if (row[j] === 0) {
        
      // }
    }
  }
}

console.log(twoDArray([
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
]));

// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

// String rotation
function stringRotation(string1, string2) {
  if (string1.split('').sort().join() === string2.split('').sort().join()) {
    return true;
  } else {
    return false;
  }
}

console.log(stringRotation('amazon', 'amazon'));