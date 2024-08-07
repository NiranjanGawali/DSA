/**
Given a set of non-negative integers and a value sum, the task is to check if there is a subset of the given set whose sum is equal to the given sum. 

Examples: 

Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 9
Output: True
Explanation: There is a subset (4, 5) with sum 9.

Input: set[] = {3, 34, 4, 12, 5, 2}, sum = 30
Output: False
Explanation: There is no subset that add up to 30.

*/

function isSubsetSumPresent(input, n, sum) {
  let dp = Array(n + 1)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (input[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let excludeItem = dp[i - 1][j];
        let includeItem = dp[i - 1][j - input[i - 1]];

        dp[i][j] = excludeItem || includeItem;
      }
    }
  }

  return dp[n][sum];
}

let input = [3, 34, 4, 12, 5, 2],
  sum = 9;
let n = input.length;

let result = isSubsetSumPresent(input, n, sum);
console.log('Result : ', result);
