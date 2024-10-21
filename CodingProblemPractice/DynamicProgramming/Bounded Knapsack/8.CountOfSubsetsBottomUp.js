/*
Given an array arr[] of length N and an integer X, the task is to find the number of subsets with a sum equal to X.

Examples: 

Input: arr[] = {1, 2, 3, 3}, X = 6 
Output: 3 
All the possible subsets are {1, 2, 3}, 
{1, 2, 3} and {3, 3}

Input: arr[] = {1, 1, 1, 1}, X = 1 
Output: 4 

https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/
*/

function findCountOfSubsets(arr, n, sum) {
  let dp = Array(n + 1)
    .fill(0)
    .map(() => Array(sum + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let excludeItem = dp[i - 1][j];
        let includeItem = dp[i - 1][j - arr[i - 1]];
        dp[i][j] = includeItem + excludeItem;
      }
    }
  }

  return dp[n][sum];
}

let arr = [1, 2, 3, 3];
let sum = 6;
let n = arr.length;

let result = findCountOfSubsets(arr, n, sum);
console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛 × sum), because we are solving each subproblem only once using memoization.
Space Complexity: 𝑂(𝑛 × sum), due to the memoization table and recursion stack.

*/
