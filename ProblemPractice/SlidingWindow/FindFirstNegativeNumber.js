/**
 * Find first negative number in the every window of size k
 */

// Below is the approach via brute force
/*
function findFirstNegativeNumberFromSubArray(arr, windowSize) {
  if (windowSize > arr.length) return null;

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < windowSize + i; j++) {
      if (arr[j] < 0) {
        result.push(arr[j]);
        break;
      }
    }
  }

  return result;
}

let input = [12, -1, -7, 8, -15, 30, 16, 28];
let windowSize = 3;
let result = findFirstNegativeNumberFromSubArray(input, windowSize);
console.log('RESULT => ', result);
// Expected Result : [ -1, -1, -7, -15, -15, 0 ]
*/

// Below is the approach via sliding window pattern

function findFirstNegativeNumberFromSubArray(arr, windowSize) {
  if (windowSize > arr.length) return null;

  let start = 0;
  let end = 0;
  let negativeNumbers = [];
  let result = [];

  while (end < arr.length) {
    if (arr[end] < 0) {
      negativeNumbers.push(arr[end]);
    }

    if (end - start + 1 === windowSize) {
      if (negativeNumbers.length === 0) {
        result.push(0);
      } else {
        result.push(negativeNumbers[0]);
      }

      if (arr[start] === negativeNumbers[0]) {
        negativeNumbers.shift();
      }
      start++;
    }

    end++;
  }
  return result;
}

let input = [12, -1, -7, 8, -15, 30, 16, 28];
let windowSize = 3;
let result = findFirstNegativeNumberFromSubArray(input, windowSize);
console.log('RESULT => ', result);

// Expected Result : [ -1, -1, -7, -15, -15, 0 ]
