/* 
Find Averages of Sub Arrays
Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], (K = 5);
Expected Answer - [ 2.2, 2.8, 2.4, 3.6, 2.8 ]
*/

function findSubArrayAverage(nums, k) {
  let start = 0;
  let end = 0;

  let results = [];
  let subArrayTotal = 0;

  while (end < nums.length) {
    subArrayTotal += nums[end];
    if (end - start + 1 === k) {
      results.push(subArrayTotal / k);

      subArrayTotal -= nums[start];
      start++;
    }
    end++;
  }

  return results;
}

let input = [1, 3, 2, 6, -1, 4, 1, 8, 2],
  k = 5;

let result = findSubArrayAverage(input, k);
console.log('Result : ', result);

/*
Time Complexity: O(n) - n is length of the array
Space Complexity: O(n) - n is length of the array
*/
