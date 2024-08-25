/*
Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.

https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
*/

function removeElements(nums) {
  if (nums.length == 0) {
    return [];
  }

  let i = 0;
  let count = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
      count = 1;
    } else if (count < 2) {
      i++;
      nums[i] = nums[j];
      count++;
    }
  }

  //   console.log(nums.slice(0, i + 1));
  //   console.log(i);
  return nums.slice(0, i + 1);
}

let nums = [1, 1, 1, 2, 2, 3];
// expected op - 5, nums = [1,1,2,2,3,_]

// let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
// expected op - 7, nums = [0,0,1,1,2,3,3,_,_]

let result = removeElements(nums);
console.log('Result : ', result);
