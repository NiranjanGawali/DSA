/*
Given an array arr[] of length N and an integer X, the task is to find the number of subsets with a sum equal to X.

Examples: 

Input: arr[] = {1, 2, 3, 3}, X = 6 
Output: 3 
All the possible subsets are {1, 2, 3}, 
{1, 2, 3} and {3, 3}

Input: arr[] = {1, 1, 1, 1}, X = 1 
Output: 4 

https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/
*/

// Solution usin top down approach

/*

function findCountOfSubsets(arr, n, sum) {
  if (sum === 0) return 1;
  if (n === 0) return 0;

  if (arr[n - 1] > sum) {
    return findCountOfSubsets(arr, n - 1, sum);
  } else {
    let excludeItem = findCountOfSubsets(arr, n - 1, sum);
    let includeItem = findCountOfSubsets(arr, n - 1, sum - arr[n - 1]);
    return includeItem + excludeItem;
  }
}

let arr = [1, 2, 3, 3];
let sum = 6;
let n = arr.length;

let result = findCountOfSubsets(arr, n, sum);
console.log('Result : ', result);

/*
Time Complexity : O(2^N) (exponential, due to the number of subsets being considered).
Space Complexity : O(N) (due to the recursion depth).
*/

// Solution usin top down approach using memoization

function findCountOfSubsets(arr, n, sum, memo = {}) {
  if (sum === 0) return 1;
  if (n === 0) return 0;

  let key = `${n}:${sum}`;

  if (key in memo) {
    return memo[key];
  }

  if (arr[n - 1] > sum) {
    memo[key] = findCountOfSubsets(arr, n - 1, sum, memo);
  } else {
    let excludeItem = findCountOfSubsets(arr, n - 1, sum, memo);
    let includeItem = findCountOfSubsets(arr, n - 1, sum - arr[n - 1], memo);
    memo[key] = includeItem + excludeItem;
  }

  return memo[key];
}

let arr = [1, 2, 3, 3];
let sum = 6;
let n = arr.length;

let result = findCountOfSubsets(arr, n, sum);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛 × sum), because we are solving each subproblem only once using memoization.
Space Complexity: 𝑂(𝑛 × sum), due to the memoization table and recursion stack.

*/
