/*
https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150
*/

// Two pointers

function removeElement(nums, key) {
  let i = 0;
  let j = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== key) {
      nums[i] = nums[j];
      i++;
    }
  }
  //   nums.splice(i);
  for (let k = i; k < nums.length; k++) {
    nums[k] = '-';
  }

  return nums;
}

// let nums = [3, 2, 2, 3],
//   val = 3;
// Expected output : [2,2,_,_]

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
  val = 2;
// Expected output : [0, 1,   3,   0, 4, '-', '-', '-']

let result = removeElement(nums, val);
console.log('RESULT : ', result);
