/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.


Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?


https://leetcode.com/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150

*/

// Since its not a sorted array then we can use it using map

function returnTwoSumIndices(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
}

let nums = [2, 7, 11, 15],
  target = 9;

// let nums = [3, 2, 4],
//   target = 6;

// let nums = [3, 3],
//   target = 6;

let result = returnTwoSumIndices(nums, target);
console.log('Result  : ', result);

/*

Time Complexity: O(n)
Space Complexity: O(n)

*/
