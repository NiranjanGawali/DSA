/*

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

Constraints:
0 <= nums.length <= 105
-109 <= nums[i] <= 109


https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150

*/

function longestConsecutive(nums) {
  let numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of numSet) {
    // Check if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      //After identifying the start of a sequence with num, you need to count how long the sequence extends.
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(currentStreak, longestStreak);
    }
  }

  return longestStreak;
}

// let nums = [100, 4, 200, 1, 3, 2];
let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

let result = longestConsecutive(nums);
console.log('Longest consecutive sequence : ', result);

/*

Time Complexity: O(n)
Space Complexity: O(n)

*/
