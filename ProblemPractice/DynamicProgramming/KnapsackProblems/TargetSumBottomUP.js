/*
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
Return the number of different expressions that you can build, which evaluates to target.

 

Example 1:
Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

Example 2:
Input: nums = [1], target = 1
Output: 1
 
https://leetcode.com/problems/target-sum/description/

*/

/*
EXPLATION

In this problem what we are doing in simple words is we are finding two sub sets such as s1 and s2 and finding the difference between them. 
So this problem is example like the problem mentioned in the CountsTheSubsetsWithGivenDifferenc file.

So there the logic remains same such as Given array and difference is  given, 

from that using the mathematical formula we can find the required sum and array is already there 

after that we can find the subset sum in the given array

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
        let includeItem = dp[i - 1][j - arr[i - 1]];
        let excludeItem = dp[i - 1][j];
        dp[i][j] = includeItem + excludeItem;
      }
    }
  }

  return dp[n][sum];
}

function main(input, diff) {
  /*
    The logic to find the sum is as below 

    s1 - s2 = diff
    s1 + s2 = arrSum 

    2s1 = diff + arrSum

    s1 = (diff + arrSum) / 2

    Now we need to find count of subsets in the given array where Sum is as per above formula s1. 
    So count of where subset sum is s1 will provide is the answer.
    */

  let arrSum = input.reduce((acc, elt) => acc + elt, 0);

  let subSet1Sum = (arrSum + diff) / 2;

  let subSetCount = findCountOfSubsets(input, input.length, subSet1Sum);

  return subSetCount;
}

let input = [1, 1, 1, 1, 1];
let target = 3;

let result = main(input, target);
console.log('Result : ', result);
