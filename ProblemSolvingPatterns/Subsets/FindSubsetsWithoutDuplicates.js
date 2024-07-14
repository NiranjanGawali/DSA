/*
Given an integer array nums that may contain duplicates, return all possible 
subsets
 (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 
*/
function findSubsets(nums) {
  let results = [];
  nums.sort((a, b) => a - b); // Sort nums to handle duplicates

  results.push([]);

  let startIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentLength = results.length;
    for (let j = startIndex; j < currentLength; j++) {
      let subset = [...results[j]];
      subset.push(nums[i]);
      results.push(subset);

      if (i < currentLength && nums[i] === nums[i + 1]) {
        startIndex = startIndex + 1;
      } else {
        startIndex = 0;
      }
    }
  }
  return results;
}

let results = findSubsets([1, 2, 2]);
console.log('Result : ', results);
