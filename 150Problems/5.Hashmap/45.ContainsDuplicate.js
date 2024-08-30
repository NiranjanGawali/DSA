/*

Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:
Input: nums = [1,0,1,1], k = 1
Output: true

Example 3:
Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 
Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105

https://leetcode.com/problems/contains-duplicate-ii/description/?envType=study-plan-v2&envId=top-interview-150

*/

function containsNearbyDuplicate(nums, k) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    // when we in the map we check if it exist or not, then we check the condition i == j
    if (map.has(num) && i - map.get(num) <= k) {
      return true;
    }
    map.set(num, i);
  }

  return false;
}

let nums = [1, 2, 3, 1],
  k = 3;

// let nums = [1, 0, 1, 1],
//   k = 1;

// let nums = [1, 2, 3, 1, 2, 3],
//   k = 2;

let result = containsNearbyDuplicate(nums, k);
console.log('Result : ', result);

/*

Time Complexity: O(n)
Space Complexity: O(n)

*/
