/*
Given an array of n-1 integers in the range from 1 to n, find the one number that is missing from the array.
*/

/**
 * Approach 1
 */
/*
function findMissingNumber(arr) {
  let allSum = 0;
  for (let i = 1; i <= arr.length; i++) {
    allSum += i;
  }

  let arrSum = 0;
  for (const num of arr) {
    arrSum += num;
  }

  let missingNumber = arrSum - allSum;
  return missingNumber;
}

let result = findMissingNumber([1, 5, 2, 6, 4]); //3
console.log('Result : ', result);
*/

// The time complexity of the above algorithm is O(n) and the space complexity is O(1).
// While finding the sum of numbers from 1 to n, we can get integer overflow when n is large.

/**
 * Approach 2: Using XOR operator
 */

function findMissingNumber(arr) {
  let n = arr.length + 1;

  let xorAll = 0;
  for (let i = 1; i <= n; i++) {
    xorAll ^= i;
  }

  let xorArr = 0;
  for (let num of arr) {
    xorArr ^= num;
  }

  let missingNumber = xorArr ^ xorAll;
  return missingNumber;
}

let result = findMissingNumber([1, 5, 2, 6, 4]); //3
console.log('Result : ', result);

/*
The time complexity of the above algorithm is O(n) and the space complexity is O(1). The time and space complexities are the same
as that of the previous solution but, in this algorithm, we will not have any integer overflow problem.
*/
