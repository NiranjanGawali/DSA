/*
Given an array coins[] of size N and a target value V, where coins[i] represents the coins of different denominations. You have an infinite supply of each of coins. 
The task is to find minimum number of coins required to make the given value V. If it’s not possible to make a change, print -1.

Examples:  

Input: coins[] = {25, 10, 5}, V = 30
Output: Minimum 2 coins required We can use one coin of 25 cents and one of 5 cents 

Input: coins[] = {9, 6, 5, 1}, V = 11
Output: Minimum 2 coins required We can use one coin of 6 cents and 1 coin of 5 cents

Lecture : https://www.youtube.com/watch?v=I-l6PBeERuc&list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go&index=17

https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/

*/

function findMinimumCoinCount(n, sum, coins, memo = {}) {
  let MAX_INTEGER = Number.MAX_SAFE_INTEGER;

  let dp = Array(n + 1)
    .fill()
    .map(() => Array(sum + 1).fill(MAX_INTEGER));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }

  for (let i = 1; i <= sum; i++) {
    dp[0][i] = MAX_INTEGER;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (coins[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let excludeItem = dp[i - 1][j];
        let includeItem = 1 + dp[i][j - coins[i - 1]];
        dp[i][j] = Math.min(includeItem, excludeItem);
      }
    }
  }

  return dp[n][sum] === MAX_INTEGER ? -1 : dp[n][sum];
}

// let coins = [25, 10, 5],
//   sum = 30; // expected answer : 2 (25 + 5)

// let coins = [9, 6, 5, 1],
//   sum = 12; // expected answer : 2 (6+6)

let coins = [5, 10],
  sum = 3; // expected answer : -1

let result = findMinimumCoinCount(coins.length, sum, coins);
console.log('Result : ', result);
