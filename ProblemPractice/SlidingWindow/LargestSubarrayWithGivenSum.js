/*
Find the largest sub array for the given sum, in the provided array, sliding window way for positive numbers
*/

function findLargestSubarrayWithGivenSumForPositiveNumbers(
  arr,
  arraySize,
  sum
) {
  let maxLength = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let end = 0;
  let currentSum = 0;

  while (end < arraySize) {
    currentSum += arr[end];

    // While the current sum is greater than the target sum
    while (currentSum > sum && start <= end) {
      currentSum -= arr[start]; // Subtract the element at the start of the window from the current sum
      start++; // Move the start pointer to the right
    }

    if (currentSum == sum) {
      maxLength = Math.max(maxLength, end - start + 1); // Update maxLength if a larger subarray is found
    }
    end++;
  }
  return maxLength === Number.MIN_SAFE_INTEGER ? 0 : maxLength; // If the given sum is greater than combined array sum then return 0
}

// let arr = [4, 1, 1, 1, -2, 3, 5];
// let arraySize = arr.length;
// let sum = 5;

// let result = findLargestSubarrayWithGivenSumForPositiveNumbers(
//   arr,
//   arraySize,
//   sum
// );
// console.log('Result : ', result); //4

//================================================================================================================================================

/***
 *
 * Below is the same function only for negative numbers
 *
 *
 */

function findLargestSubarrayWithGivenSumForNegativeNumbers(arr, arrSize, sum) {
  let maxLength = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let end = 0;
  let currentSum = 0;
  let maxSum = {};

  while (end < arrSize) {
    currentSum += arr[end]; // Add the current element to the current sum

    // Check if the cumulative sum equals the target sum
    if (currentSum === sum) {
      maxLength = Math.max(maxLength, end - start + 1); // Update maxLength if a larger subarray is found
    }

    // If (currentSum - sum) exists in sumMap, we found a subarray with the target sum
    if (currentSum - sum in maxSum) {
      maxLength = Math.max(maxLength, end - maxSum(currentSum - sum));
    }

    // Store the cumulative sum if it hasn't been stored before
    if (!(currentSum in maxSum)) {
      maxSum[currentSum] = end;
    }
    // console.log(maxSum);
    end++; // Move the end pointer to the right
  }
  return maxLength;
}

let arr = [-5, 8, -14, 2, 4, 12];
let arraySize = arr.length;
let sum = -5;
let result = findLargestSubarrayWithGivenSumForNegativeNumbers(
  arr,
  arraySize,
  sum
);
console.log('Result : ', result); //4
