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

function jump(nums) {
  let jumps = 0; // To count the number of jumps required to reach the end
  let currentEnd = 0; // Marks the end of the range that we can reach with the current number of jumps
  let farthest = 0; // Tracks the farthest index that we can reach in the next jump

  // Loop through each element in the array, except the last one (nums.length - 1)
  for (let i = 0; i < nums.length - 1; i++) {
    // Update the farthest index we can reach from the current index
    farthest = Math.max(farthest, i + nums[i]);

    // If at any point, the current position exceeds the farthest point we can reach, return 0.
    if (i > farthest) {
      return 0;
    }

    // If we have reached the end of the current range
    if (i === currentEnd) {
      jumps++; // We need to make another jump
      currentEnd = farthest; // Update the currentEnd to the farthest point we can reach

      // If the currentEnd reaches or exceeds the last index, we can stop
      if (currentEnd >= nums.length - 1) {
        return jumps; // Return the total number of jumps required
      }
    }
  }

  return 0;
}

// Example usage:
let nums1 = [2, 3, 1, 1, 4];
console.log(jump(nums1)); // Output: 2

let nums2 = [2, 3, 0, 1, 4];
console.log(jump(nums2)); // Output: 2

let nums3 = [3, 2, 1, 0, 4];
console.log(jump(nums3)); // Output: 0

/*
Time complexity : O(n)
Space complexity : O(1)
*/
