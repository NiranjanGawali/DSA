/*
Given an integer array nums of unique elements, return all possible 
subsets
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:
Input: nums = [0]
Output: [[],[0]]
 
*/

/**
 * Normal Way
 */

/*
function findSubsets(nums) {
  let results = [];
  results.push([]);
  for (const num of nums) {
    let resultLength = results.length;
    for (let i = 0; i < resultLength; i++) {
      let subset = [...results[i]];
      subset.push(num);
      results.push(subset);
    }
  }
  return results;
}

// let results = findSubsets([1, 3]);
let results = findSubsets([1, 5, 3]);
console.log('Result : ', results);
*/

/*
Time Complexity: O(2^N * N) - due to the exponential growth in subset combinations and linear time to copy subsets.
Space Complexity: O(2^N * N) - due to storing all subsets and their potential maximum size
*/

/**
 * Recursive Way with better performance
 */

function findSubsets(nums) {
  let results = [];
  let temp = [];

  function recursiveSubset(nums, i) {
    if (i === nums.length) {
      return results.push([...temp]);
    }

    temp.push(nums[i]);
    recursiveSubset(nums, i + 1);
    temp.pop();
    recursiveSubset(nums, i + 1);
  }

  recursiveSubset(nums, 0);
  return results;
}

let output = findSubsets([1, 2]);
console.log('Result : ', output);
