// Maximum Sum Subarray of Size K (easy)

// Brute force algorithm

function maxSubarrayOfSizeKBrute(arr, k) {
  let maxValue = Number.MIN_VALUE;
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    if (sum > maxValue) maxValue = sum;
  }
  return maxValue;
}

// let result = maxSubarrayOfSizeKBrute([2, 1, 5, 1, 3, 2], 3);
// console.log(result); // result should be 9

/*
Time complexity: Since for every element of the input array, we are calculating the sum of its next K elements, 
the time complexity of the above algorithm will be O(N*K) where N is the number of elements in the input array.
*/

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------

function maxSubarrayOfSizeK(arr, k) {
  let maxValue = Number.MIN_VALUE;
  let sum = 0;
  let startIndex = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }

  if (sum > maxValue) maxValue = sum;
  for (let j = k; j < arr.length; j++) {
    sum -= arr[startIndex];
    sum += arr[j];
    if (sum > maxValue) maxValue = sum;
    startIndex++;
  }
  return maxValue;
}

let result = maxSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3);
console.log(result); // result should be 9
