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

function findCountOfSubsets(coins, n, sum, map = {}) {
  if (sum === 0) return 1;
  if (n === 0) return 0;

  let key = `${n}:${sum}`;

  if (coins[n - 1] > sum) {
    map[key] = findCountOfSubsets(coins, n - 1, sum, map);
  } else {
    let excludeItem = findCountOfSubsets(coins, n - 1, sum, map);
    let includeItem = findCountOfSubsets(coins, n, sum - coins[n - 1], map);
    map[key] = includeItem + excludeItem;
  }

  return map[key];
}

let coins = [1, 2, 3];
let sum = 4;

// let coins = [2, 5, 3, 6];
// let sum = 10;

let n = coins.length;

let result = findCountOfSubsets(coins, n, sum);
console.log('Result : ', result);
