/**
Given a set of non-negative integers and a value sum, the task is to check if there is a subset of the given set whose sum is equal to the given sum. 

Examples: 

Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
Output: True
Explanation: There is a subset (4, 5) with sum 9.

Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
Output: False
Explanation: There is no subset that add up to 30.


https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
*/

// Below is solution using top down approach
/*
function isSubsetExists(n, nums, sum) {
  if (sum === 0) {
    return true;
  }

  if (n === 0) {
    return false;
  }

  if (nums[n - 1] > sum) {
    return isSubsetExists(n - 1, nums, sum);
  } else {
    let excludeItem = isSubsetExists(n - 1, nums, sum);
    let includeItem = isSubsetExists(n - 1, nums, sum - nums[n - 1]);

    return excludeItem || includeItem;
  }
}

let nums = [3, 34, 4, 12, 5, 2];
let sum = 9;
let n = nums.length;

let result = isSubsetExists(n, nums, sum);
console.log('Result : ', result);
*/
/*
Time Complexity : O(2^N) (exponential, due to the number of subsets being considered).
Space Complexity : O(N) (due to the recursion depth).
*/

// Below is solution using top down approach using memoization

function isSubsetExists(n, nums, sum, memo = {}) {
  if (sum === 0) {
    return true;
  }

  if (n === 0) {
    return false;
  }

  let key = `${n}:${sum}`;

  if (key in memo) {
    return memo[key];
  }

  if (nums[n - 1] > sum) {
    memo[key] = isSubsetExists(n - 1, nums, sum, memo);
  } else {
    let excludeItem = isSubsetExists(n - 1, nums, sum, memo);
    let includeItem = isSubsetExists(n - 1, nums, sum - nums[n - 1], memo);

    memo[key] = excludeItem || includeItem;
  }

  return memo[key];
}

let nums = [3, 34, 4, 12, 5, 2];
let sum = 9;
let n = nums.length;

let result = isSubsetExists(n, nums, sum);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛×sum), because we are solving each subproblem only once using memoization.
Space Complexity: 𝑂(𝑛×sum), due to the memoization table and recursion stack.

*/
