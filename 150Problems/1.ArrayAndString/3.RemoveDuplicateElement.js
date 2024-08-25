/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
*/

// Two pointers

function removeDuplicateElements(nums) {
  if (nums.length == 0) {
    return [];
  }

  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return nums.slice(0, i + 1);
}

// let nums = [1, 1, 2];
// expected op - [1,2]

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// expected op - [0,1,2,3,4]

let result = removeDuplicateElements(nums);
console.log('Result : ', result);
