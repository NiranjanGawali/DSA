/*
Given an array arr[] of size N and a given difference diff, the task is to count the number of partitions that we can perform such that the difference between the sum of the two subsets is equal to the given difference.

Note: A partition in the array means dividing an array into two parts say S1 and S2 such that the union of S1 and S2 is equal to the original array and each element is present in only of the subsets.

Examples:

Input: N = 4, arr[] = [5, 2, 6, 4], diff = 3
Output: 1
Explanation: We can only have a single partition which is shown below:
{5, 2} and {6, 4} such that S1 = 7 and S2 = 10 and thus the difference is 3

Input: N = 5, arr[] = [1, 2, 3, 1, 2], diff = 1
Output: 5
Explanation: We can have five partitions which is shown below
{1, 3, 1} and {2, 2} – S1 = 5, S2 = 4
{1, 2, 2} and {1, 3} – S1 = 5, S2 = 4
{3, 2} and {1, 1, 2} – S1 = 5, S2 = 4
{1, 2, 2} and {1, 3} – S1 = 5, S2 = 4
{3, 2} and {1, 1, 2} – S1 = 5, S2 = 4

https://www.geeksforgeeks.org/count-of-subsets-with-given-difference/
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

function main(n, arr, diff) {
  let arrSum = arr.reduce((acc, num) => acc + num, 0);

  /*
  
  s1 + s2 = arrSum
  s1 - s2 = diff

  s1 - (diff - s1) = arrSum 

  2s1 = arrSum + diff

  s1 = (arrSum + diff) / 2
  
  */

  let subSetSum = (arrSum + diff) / 2;

  let countOfSubsets = findCountOfSubsets(arr, n, subSetSum);
  return countOfSubsets;
}

// let n = 4,
//   arr = [5, 2, 6, 4],
//   diff = 3;

let n = 5,
  arr = [1, 2, 3, 1, 2],
  diff = 1;

let result = main(n, arr, diff);

console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛 × sum)
Space Complexity: 𝑂(𝑛 × sum)

*/
