/*

 Given an integer array nums of length n and an integer target, find three integers in nums such that the 
 sum is closest to target.
 
 Return the sum of the three integers.
 
 You may assume that each input would have exactly one solution.
 
 Example 1:
 Input: nums = [-1,2,1,-4], target = 1
 Output: 2
 Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 
 Example 2:
 Input: nums = [0,0,0], target = 1
 Output: 0
 Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

https://leetcode.com/problems/3sum-closest/description/

*/

function tripletSumCloseToTarget(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let currentSum = nums[i] + nums[left] + nums[right];
      if (currentSum === target) {
        return currentSum;
      }
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
}

// const nums1 = tripletSumCloseToTarget([-2, 0, 1, 2], 2); //1, he triplet [-2, 1, 2] has the closest sum to the target.
// const nums1 = tripletSumCloseToTarget([-3, -1, 1, 2], 1); //0, The triplet [-3, 1, 2] has the closest sum to the target.
// const nums1 = tripletSumCloseToTarget([1, 0, 1, 1], 100); //3, The triplet [1, 1, 1] has the closest sum to the target.
const result = tripletSumCloseToTarget([-1, 2, 1, -4], 1); //2, The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
console.log('Result : ', result);
