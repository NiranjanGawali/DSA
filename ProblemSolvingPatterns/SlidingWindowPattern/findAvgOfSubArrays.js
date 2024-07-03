/* 
Find Averages of Sub Arrays
Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], (K = 5);
Expected Answer - [ 2.2, 2.8, 2.4, 3.6, 2.8 ]
*/

// Brute force approach
function findAvgOfSubarraysBrute(arr, k) {
  let results = [];
  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    results.push(sum / k);
  }
  return results;
}

// let answer = findAvgOfSubarraysBrute([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
// console.log('Answer : ', answer);

/*
Time complexity: Since for every element of the input array, we are calculating the sum of its next K elements, 
the time complexity of the above algorithm will be O(N*K) where N is the number of elements in the input array.
*/

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------------------------

// Sliding window approach
function findAvgOfSubArrays(arr, k) {
  let results = [];
  let sum = 0;
  let startIndex = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  results.push(sum / k);

  for (let j = k; j < arr.length; j++) {
    sum -= arr[startIndex];
    sum += arr[j];
    results.push(sum / k);
    startIndex++;
  }

  return results;
}

let answer = findAvgOfSubArrays([1, 3, 2, 6, -1, 4, 1, 8, 2], 5);
console.log('Answer : ', answer);

// The time complexity of this solution is O(n)
