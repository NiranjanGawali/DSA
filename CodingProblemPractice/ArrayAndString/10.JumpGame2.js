/*

You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

0 <= j <= nums[i] and
i + j < n

Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

 
Example 1:
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [2,3,0,1,4]
Output: 2

https://leetcode.com/problems/jump-game-ii/description/?envType=study-plan-v2&envId=top-interview-150

*/

function findJumps(nums) {
  let jumps = 0;
  let currentEnd = 0;
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return 0;
    }

    maxReach = Math.max(maxReach, i + nums[i]);

    if (i === currentEnd) {
      jumps++;
      currentEnd = maxReach;
      if (currentEnd >= nums.length - 1) {
        return jumps;
      }
    }
  }
}

// let nums = [2, 3, 1, 1, 4];
let nums = [2, 3, 0, 1, 4];

let result = findJumps(nums);
console.log('Min number jumps to reach end : ', result);

/*
Time complexity : O(n)
Space complexity : O(1)
*/
