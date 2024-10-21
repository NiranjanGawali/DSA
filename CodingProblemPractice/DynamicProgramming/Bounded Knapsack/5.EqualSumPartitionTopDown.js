/*
The partition problem is to determine whether a given set can be partitioned into two subsets such that the sum of elements in both subsets is the same. 

Examples: 

Input: arr[] = {1, 5, 11, 5}
Output: true 
The array can be partitioned as {1, 5, 5} and {11}

Input: arr[] = {1, 5, 3}
Output: false 

The array cannot be partitioned into equal sum sets.

https://www.geeksforgeeks.org/partition-problem-dp-18/

*/

// Solution using top down approach

/*

function isEqualPartitionExists(arr, n, targetSum) {
  if (targetSum === 0) return true;
  if (n === 0) return false;

  if (arr[n - 1] > targetSum) {
    return isEqualPartitionExists(arr, n - 1, targetSum);
  } else {
    let excludeItem = isEqualPartitionExists(arr, n - 1, targetSum);
    let includeItem = isEqualPartitionExists(
      arr,
      n - 1,
      targetSum - arr[n - 1]
    );
    return excludeItem || includeItem;
  }
}

function main(arr, n) {
  let arrSum = arr.reduce((acc, num) => acc + num, 0);
  console.log(arrSum);

  if (arrSum % 2 !== 0) {
    return false;
  }

  let targetSum = arrSum / 2;
  return isEqualPartitionExists(arr, n, targetSum);
}

let arr = [1, 5, 11, 5];
// let arr = [1, 5, 3];

let n = arr.length;
let result = main(arr, n);
console.log('Result : ', result);

*/

/*
Time Complexity : O(2^N) (exponential, due to the number of subsets being considered).
Space Complexity : O(N) (due to the recursion depth).
*/

// Solution using top down approach using memoization

function isEqualPartitionExists(arr, n, targetSum, memo = {}) {
  if (targetSum === 0) return true;
  if (n === 0) return false;

  let key = `${n}:${targetSum}`;

  if (key in memo) {
    return memo[key];
  }

  if (arr[n - 1] > targetSum) {
    memo[key] = isEqualPartitionExists(arr, n - 1, targetSum, memo);
  } else {
    let excludeItem = isEqualPartitionExists(arr, n - 1, targetSum, memo);
    let includeItem = isEqualPartitionExists(
      arr,
      n - 1,
      targetSum - arr[n - 1],
      memo
    );
    memo[key] = excludeItem || includeItem;
  }

  return memo[key];
}

function main(arr, n) {
  let arrSum = arr.reduce((acc, num) => acc + num, 0);
  console.log(arrSum);

  if (arrSum % 2 !== 0) {
    return false;
  }

  let targetSum = arrSum / 2;
  return isEqualPartitionExists(arr, n, targetSum);
}

let arr = [1, 5, 11, 5];
// let arr = [1, 5, 3];

let n = arr.length;
let result = main(arr, n);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛 × targetSum), because we are solving each subproblem only once using memoization.
Space Complexity: 𝑂(𝑛 × targetSum), due to the memoization table and recursion stack.

*/
