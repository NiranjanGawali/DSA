/*

 Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] 
 which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum  
 of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item, or don’t pick  it (0-1 property).

PROBLEM STATEMENT LINK: https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
*/

function findMaxValueInKnapsack(W, weight, profit, n) {
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(W + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      if (weight[i - 1] <= j) {
        let includeItem = profit[i - 1] + dp[i - 1][j - weight[i - 1]];
        let excludeItem = dp[i - 1][j];
        dp[i][j] = Math.max(includeItem, excludeItem);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[n][W];
}

let profit = [60, 100, 120];
let weight = [10, 20, 30];
let W = 50;
let n = profit.length;

let result = findMaxValueInKnapsack(W, weight, profit, n);
console.log('The maximum profit we get : ', result); // Expeted maximum profit is 220
