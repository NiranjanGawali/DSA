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

function isSubsetExists(n, nums, sum) {
  let dp = Array(n + 1)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (nums[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let excludeItem = dp[i - 1][j];
        let includeItem = dp[i - 1][j - nums[i - 1]];
        dp[i][j] = includeItem || excludeItem;
      }
    }
  }

  return dp[n][sum];
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
