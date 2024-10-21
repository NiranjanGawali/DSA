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

function findCountOfSubsets(arr, n, sum, memo = {}) {
  if (sum === 0) return 1;
  if (n === 0) return 0;

  let key = `${n}:${sum}`;
  if (key in memo) {
    return memo[key];
  }

  if (arr[n - 1] > sum) {
    memo[key] = findCountOfSubsets(arr, n - 1, sum, memo);
  } else {
    let includeItem = findCountOfSubsets(arr, n - 1, sum - arr[n - 1], memo);
    let excludeItem = findCountOfSubsets(arr, n - 1, sum, memo);

    memo[key] = includeItem + excludeItem;
  }

  return memo[key];
}

function main(nums, target) {
  let arrSum = nums.reduce((acc, num) => acc + num, 0);

  /*
  s1 + s2 = arrSum 
  s1 - s2 = diff (target)

  s1 + s1 - diff = arrSum 
  2s1 = arrSum + diff

  s1 = (arrSum + diff) / 2
  */

  let subSetSum = (arrSum + target) / 2;
  let subSetCount = findCountOfSubsets(nums, nums.length, subSetSum);
  return subSetCount;
}

let nums = [1, 1, 1, 1, 1],
  target = 3;

// let nums = [1],
//   target = 1;

let result = main(nums, target);

console.log('Result : ', result);

/*

Time Complexity: 𝑂(𝑛 × sum)
Space Complexity: 𝑂(𝑛 × sum)

*/
