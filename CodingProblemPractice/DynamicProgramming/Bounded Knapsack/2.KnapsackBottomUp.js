/*

 Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] 
 which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum  
 of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item, or don’t pick  it (0-1 property).

Input: N = 3, W = 4, profit[] = {1, 2, 3}, weight[] = {4, 5, 1}
Output: 3
Explanation: There are two items which have weight less than or equal to 4. If we select the item with weight 4, the possible profit is 1. And if we select the item with weight 1, the possible profit is 3. So the maximum possible profit is 3. Note that we cannot put both the items with weight 4 and 1 together as the capacity of the bag is 4.


Input: N = 3, W = 3, profit[] = {1, 2, 3}, weight[] = {4, 5, 6}
Output: 0

PROBLEM STATEMENT LINK: https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
*/

function findMaxProfit(W, N, weight, profit) {
  let dp = Array(N + 1)
    .fill(0)
    .map(() => Array(W + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= W; j++) {
      if (weight[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let excludeItem = dp[i - 1][j];
        let includeItem = profit[i - 1] + dp[i - 1][j - weight[i - 1]];
        dp[i][j] = Math.max(includeItem, excludeItem);
      }
    }
  }

  return dp[N][W];
}

// let N = 3,
//   W = 4,
//   profit = [1, 2, 3],
//   weight = [4, 5, 1];
// // Expected output : 3

let profit = [60, 100, 120];
let weight = [10, 20, 30];
let W = 50;
let N = profit.length;
// Expected output: 220

let result = findMaxProfit(W, N, weight, profit);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑁×𝑊), due to the two nested loops iterating over all items and all possible weights.
Space Complexity: 𝑂(𝑁×𝑊), due to the 2D dp array storing values for each subproblem.

*/
