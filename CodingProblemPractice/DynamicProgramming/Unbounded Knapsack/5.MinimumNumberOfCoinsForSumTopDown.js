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
  // Base case: if sum is 0, no coins are needed
  if (sum === 0) return 0;

  // If no coins are left and sum is still positive, return a large number
  if (n === 0) return Number.MAX_SAFE_INTEGER;

  let key = `${n}:${sum}`;

  if (key in memo) return memo[key];

  // If the current coin is larger than the remaining sum, skip it
  if (coins[n - 1] > sum) {
    memo[key] = findMinimumCoinCount(n - 1, sum, coins, memo);
  } else {
    let excludeItem = findMinimumCoinCount(n - 1, sum, coins, memo);
    let includeItem =
      1 + findMinimumCoinCount(n, sum - coins[n - 1], coins, memo);

    // Return the minimum of both choices
    memo[key] = Math.min(includeItem, excludeItem);
  }

  return memo[key];
}

let coins = [25, 10, 5],
  sum = 30;

let result = findMinimumCoinCount(coins.length, sum, coins);
console.log('Result : ', result);
