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
// BELOW SOLUTION IS USING TOM DOWN APPROACH

function isEqualSumParitionExists(arr, n, targetSum, memo = {}) {
  if (targetSum === 0) return true;
  if (n === 0) return false;

  let key = `${n}:${targetSum}`;

  if (key in memo) {
    return memo[key];
  }

  if (arr[n - 1] > targetSum) {
    memo[key] = isEqualSumParitionExists(arr, n - 1, targetSum, memo);
  } else {
    let includeItem = isEqualSumParitionExists(
      arr,
      n - 1,
      targetSum - arr[n - 1],
      memo
    );

    let excludeItem = isEqualSumParitionExists(arr, n - 1, targetSum, memo);

    memo[key] = includeItem || excludeItem;
  }

  return memo[key];
}

function main(arr) {
  let n = arr.length;
  let sum = arr.reduce((acc, elt) => acc + elt, 0);
  if (sum % 2 !== 0) return false;

  let targetSum = sum / 2;

  return isEqualSumParitionExists(arr, n, targetSum);
}

let arr = [1, 5, 11, 5];

let result = main(arr);

console.log('Result : ', result);
