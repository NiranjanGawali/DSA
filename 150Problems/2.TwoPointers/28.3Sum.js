/*

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:
Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 
*/

function find3Sum(nums) {
  let results = [];

  nums.sort((a, b) => a - b); // You need to sort the aray as the logic works on sorted array

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue; // Skip duplicate elements for i
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates for left and right pointers
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++; // Need a larger sum, move left pointer to the right
      } else {
        right--; // Need a smaller sum, move right pointer to the left
      }
    }
  }

  return results;
}

let nums = [-1, 0, 1, 2, -1, -4];
let result = find3Sum(nums);
console.log('Result : ', result);

/*
Time Complexity: O(n^2) (its n square), the sorting takes O(nlogn) and finding the triplets takes O(n^2)
Space Complexity: O(n) 
*/
