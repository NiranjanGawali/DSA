/*
Find the maximum sum of sub array of size window of k
*/

// Belwo we re solving the problem with brute force approach
/*
function findMaxSubArraySum(arr, windowSize) {
  if (windowSize > arr.length) {
    return null; // When window size is greater than array size return null
  }

  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length - windowSize; i++) {
    let currentSum = 0;
    for (let j = i; j < i + windowSize; j++) {
      currentSum += arr[j];
      maxSum = Math.max(maxSum, currentSum);
    }
  }
  return maxSum;
}

let result = findMaxSubArraySum([2, 5, 1, 8, 2, 9, 1], 5);
console.log('Result : ', result);
*/

// Belwo we re solving the problem with sliding window patten its one way

function findMaxSubArraySum(arr, windowSize) {
  if (windowSize > arr.length) {
    return null; // When window size is greater than array size return null
  }
  let start = 0;
  let end = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;

  while (end < arr.length) {
    currentSum += arr[end];
    if (end - start + 1 === windowSize) {
      maxSum = Math.max(maxSum, currentSum);
      currentSum -= arr[start];
      start++;
    }
    end++;
  }
  return maxSum;
}

let result = findMaxSubArraySum([2, 5, 1, 8, 2, 9, 1], 5);
console.log('Result : ', result);

/**
 * Below is another way find the result vai sliding window pattern
 */

/*

function findMaxSubArraySum(arr, windowSize) {
  if (windowSize > arr.length) {
    return null; // When window size is greater than array size return null
  }
  let maxSum = Number.MIN_SAFE_INTEGER;
  let currentSum = 0;
  let startIndex = 0;

  for (let i = 0; i < windowSize; i++) {
    currentSum += arr[i];
  }

  for (let j = windowSize; j < arr.length; j++) {
    maxSum = Math.max(maxSum, currentSum);
    currentSum += arr[j];
    currentSum -= arr[startIndex];
    startIndex++;
  }

  return maxSum;
}

let result = findMaxSubArraySum([2, 5, 1, 8, 2, 9, 1], 3);
console.log('Result : ', result);
*/
