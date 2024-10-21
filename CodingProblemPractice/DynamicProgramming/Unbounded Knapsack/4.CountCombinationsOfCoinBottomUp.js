/*
Given an integer array of coins[ ] of size N representing different types of denominations and an integer sum, the task is to count all combinations of coins to make a given value sum.  

Note: Assume that you have an infinite supply of each type of coin. 

Examples: 

Input: sum = 4, coins[] = {1,2,3}
Output: 4
Explanation: there are four solutions: {1, 1, 1, 1}, {1, 1, 2}, {2, 2}, {1, 3}

Input: sum = 10, coins[] = {2, 5, 3, 6}
Output: 5
Explanation: There are five solutions: 
{2,2,2,2,2}, {2,2,3,3}, {2,2,6}, {2,3,5} and {5,5}

https://www.geeksforgeeks.org/coin-change-dp-7/
*/

function findMaxCoinCountCombinatin(n, sum, coins) {
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(sum + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (coins[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let excludeItem = dp[i - 1][j];
        let includeItem = dp[i][j - coins[i - 1]];
        dp[i][j] = includeItem + excludeItem;
      }
    }
  }

  return dp[n][sum];
}

let sum = 4,
  coins = [1, 2, 3];

// let sum = 10,
//   coins = [2, 5, 3, 6];

let result = findMaxCoinCountCombinatin(coins.length, sum, coins);
console.log('Result : ', result);
