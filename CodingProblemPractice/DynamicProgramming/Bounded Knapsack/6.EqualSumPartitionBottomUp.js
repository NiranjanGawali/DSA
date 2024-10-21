/*
The partition problem is to determine whether a given set can be partitioned into two subsets such that the sum of elements in both subsets is the same. 

Examples: 

Input: arr[] = {1, 5, 11, 5}
Output: true 
The array can be partitioned as {1, 5, 5} and {11}

Input: arr[] = {1, 5, 3}
Output: false 

The array cannot be partitioned into equal sum sets.

https://www.geeksforgeeks.org/partition-problem-dp-18/

*/

function isEqualPartitionExists(arr, n, targetSum) {
  let dp = Array(n + 1)
    .fill(false)
    .map(() => Array(targetSum + 1).fill(false));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= targetSum; j++) {
      if (arr[i - 1] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        let excludeItem = dp[i - 1][j];
        let includeItem = dp[i - 1][j - arr[i - 1]];
        dp[i][j] = excludeItem || includeItem;
      }
    }
  }

  return dp[n][targetSum];
}

function main(arr, n) {
  let arrSum = arr.reduce((acc, num) => acc + num, 0);
  console.log(arrSum);

  if (arrSum % 2 !== 0) {
    return false;
  }

  let targetSum = arrSum / 2;
  return isEqualPartitionExists(arr, n, targetSum);
}

let arr = [1, 5, 11, 5];
// let arr = [1, 5, 3];

let n = arr.length;
let result = main(arr, n);
console.log('Result : ', result);
