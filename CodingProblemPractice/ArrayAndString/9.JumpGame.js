/*

You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
Return true if you can reach the last index, or false otherwise.

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

https://leetcode.com/problems/jump-game/description/?envType=study-plan-v2&envId=top-interview-150
*/

function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return maxReach >= nums.length - 1;
}

let nums = [2, 3, 1, 1, 4];
// let nums = [3, 2, 1, 0, 4];

let result = canJump(nums);
console.log('Is it possible to jump at the end of array : ', result);

/*
Time complexity : O(n)
Space complexity : O(1)
*/
