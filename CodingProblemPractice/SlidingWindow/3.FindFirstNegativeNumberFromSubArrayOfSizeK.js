/*

Given an array A[] of size N and a positive integer K, find the first negative integer for each and every window(contiguous subarray) of size K.

Example 1:
Input : 
N = 5
A[] = {-8, 2, 3, -6, 10}
K = 2
Output : 
-8 0 -6 -6
Explanation :
First negative integer for each window of size k
{-8, 2} = -8
{2, 3} = 0 (does not contain a negative integer)
{3, -6} = -6
{-6, 10} = -6
 
Example 2:
Input : 
N = 8
A[] = {12, -1, -7, 8, -15, 30, 16, 28}
K = 3
Output :
-1 -1 -7 -15 -15 0 
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function printFirstNegativeInteger() which takes the array A[], its size N and an integer K as inputs and returns the first negative number in every window of size K starting from the first till the end. If a window does not contain a negative integer , then return 0 for that window.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(K)

Constraints:
1 <= N <= 105
-105 <= A[i] <= 105
1 <= K <= N


https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1

*/

function findFirstNegativeNumberFromSubArray(nums, k) {
  if (k > nums.length) {
    return null;
  }

  let start = 0;
  let end = 0;
  let results = [];
  let negativeNumbers = [];

  while (end < nums.length) {
    if (nums[end] < 0) {
      negativeNumbers.push(nums[end]);
    }

    if (end - start + 1 === k) {
      if (negativeNumbers.length === 0) {
        results.push(0);
      } else {
        results.push(negativeNumbers[0]);
      }

      if (nums[start] === negativeNumbers[0]) {
        negativeNumbers.shift();
      }
      start++;
    }

    end++;
  }

  return results;
}

let input = [12, -1, -7, 8, -15, 30, 16, 28];
let windowSize = 3;
let result = findFirstNegativeNumberFromSubArray(input, windowSize);
console.log('RESULT => ', result);

// Expected Result : [ -1, -1, -7, -15, -15, 0 ]

/*
Time Complexity: O(n) - n is length of the array
Space Complexity: O(n) - n is length of the array
*/
