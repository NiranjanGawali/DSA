/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
*/

/*
This problem can be solved by usin Boyer-Moore Voting Algorithm
*/

function findMajorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += candidate === num ? 1 : -1;
  }

  return candidate;
}

let nums = [3, 2, 3];
// output : 3

// let nums =[2,2,1,1,1,2,2]
// output : 2

let result = findMajorityElement(nums);
console.log('Result : ', result);
