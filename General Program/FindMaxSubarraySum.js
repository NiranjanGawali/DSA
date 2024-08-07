/*
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
*/

// Below is the coding solution via brute force way
/*
function maxSubarray(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let num of arr) {
    console.log(num);
    partialSum += num;
    maxSum = Math.max(partialSum, maxSum);

    if (partialSum < 0) partialSum = 0; // zero if negative
  }
  return maxSum;
}
*/

function maxSubarray(arr) {
  if (arr.length == 0) {
    return 0;
  }
  let start = 0;
  let end = 0;
  let currentSum = arr[0];
  let maxSum = arr[0];

  while (end < arr.length) {
    if (start === end) {
      currentSum = arr[end];
    } else {
      //   currentSum += arr[end];
      currentSum = Math.max(arr[end], currentSum + arr[end]);
    }
    // if (currentSum < 0) {
    //   currentSum = 0;
    // }
    maxSum = Math.max(currentSum, maxSum);
    end++;
  }

  return maxSum;
}

console.log('Mixed numbers:');
let mixedNums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('Array:', mixedNums);
let maxSumMixed = maxSubarray(mixedNums);
console.log('Expected Max Subarray Sum: 6');
console.log('Actual Max Subarray Sum:', maxSumMixed);
console.log('---------------');

// ------------------------------------
//  Test array with all positive numbers
// ------------------------------------
console.log('All positive numbers:');
let allPositive = [1, 2, 3, 4, 5];
console.log('Array:', allPositive);
let maxSumPositive = maxSubarray(allPositive);
console.log('Expected Max Subarray Sum: 15');
console.log('Actual Max Subarray Sum:', maxSumPositive);
console.log('---------------');

// ------------------------------------
//  Test array with all negative numbers
// ------------------------------------
console.log('All negative numbers:');
let allNegative = [-1, -2, -3, -4, -5];
console.log('Array:', allNegative);
let maxSumNegative = maxSubarray(allNegative);
console.log('Expected Max Subarray Sum: -1');
console.log('Actual Max Subarray Sum:', maxSumNegative);
console.log('---------------');

// ------------------------------------
//  Test empty array
// ------------------------------------
console.log('Empty array:');
let emptyNums = [];
console.log('Array:', emptyNums);
let maxSumEmpty = maxSubarray(emptyNums);
console.log('Expected Max Subarray Sum: 0');
console.log('Actual Max Subarray Sum:', maxSumEmpty);
console.log('---------------');
