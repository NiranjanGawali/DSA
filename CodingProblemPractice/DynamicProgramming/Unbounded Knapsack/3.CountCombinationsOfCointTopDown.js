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

function findMaxCoinCountCombinatin(n, sum, coins, memo = {}) {
  if (n === 0) return 0;
  if (sum === 0) return 1;

  let key = `${n}:${sum}`;

  if (key in memo) return memo[key];

  if (coins[n - 1] > sum) {
    memo[key] = findMaxCoinCountCombinatin(n - 1, sum, coins);
  } else {
    let excludeItem = findMaxCoinCountCombinatin(n - 1, sum, coins);
    let includeItem = findMaxCoinCountCombinatin(n, sum - coins[n - 1], coins);
    memo[key] = includeItem + excludeItem;
  }

  return memo[key];
}

// let sum = 4,
//   coins = [1, 2, 3];

let sum = 10,
  coins = [2, 5, 3, 6];

let result = findMaxCoinCountCombinatin(coins.length, sum, coins);
console.log('Result : ', result);
