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

// Below is findng the solution for knapsack

/*

function findMaxProfit(W, N, weight, profit) {
  if (N === 0 || W === 0) {
    return 0;
  }

  if (weight[N - 1] > W) {
    return findMaxProfit(W, N - 1, weight, profit);
  } else {
    let includeItem =
      profit[N - 1] + findMaxProfit(W - weight[N - 1], N - 1, weight, profit);
    let excludeItem = findMaxProfit(W, N - 1, weight, profit);

    return Math.max(includeItem, excludeItem);
  }
}

let N = 3,
  W = 4,
  profit = [1, 2, 3],
  weight = [4, 5, 1];

let result = findMaxProfit(W, N, weight, profit);
console.log('Result : ', result);

pace Complexity} = O(N)
\]*/

/*
Time Complexity : O(2^N) (exponential, due to the number of subsets being considered).
Space Complexity : O(N) (due to the recursion depth).
*/

// Below is findng the solution for knapsack using memoization

function findMaxProfit(W, N, weight, profit, memo = {}) {
  if (N === 0 || W === 0) {
    return 0;
  }

  let key = `${N}:${W}`;

  if (key in memo) {
    return memo[key];
  }

  if (weight[N - 1] > W) {
    memo[key] = findMaxProfit(W, N - 1, weight, profit, memo);
  } else {
    let includeItem =
      profit[N - 1] +
      findMaxProfit(W - weight[N - 1], N - 1, weight, profit, memo);
    let excludeItem = findMaxProfit(W, N - 1, weight, profit, memo);

    memo[key] = Math.max(includeItem, excludeItem);
  }

  return memo[key];
}

// let N = 3,
//   W = 4,
//   profit = [1, 2, 3],
//   weight = [4, 5, 1];
// Expected output : 3

let profit = [60, 100, 120];
let weight = [10, 20, 30];
let W = 50;
let N = profit.length;
// Expected output: 220

let result = findMaxProfit(W, N, weight, profit);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑁×𝑊) O(N×W), since each unique subproblem is solved only once.
Space Complexity: 𝑂(𝑁×𝑊) O(N×W), due to the memoization table storing results of subproblems.

*/
