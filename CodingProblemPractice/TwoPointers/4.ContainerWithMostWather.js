/*

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1
 
https://leetcode.com/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150

*/

/*

Approach: Two-Pointer Technique

Initialize Two Pointers:
Start with one pointer at the beginning of the array (left) and the other at the end (right).

Calculate Area:
At each step, calculate the area between the lines at the left and right pointers. The area is given by the formula:
Area = min(height[left], height[right]) × (right − left)

Move the Pointer:
To maximize the area, move the pointer pointing to the shorter line inward. The idea is that moving the shorter line might allow for a taller line that could increase the area.

Repeat:
Continue this process until the two pointers meet.

Return the Maximum Area:
Keep track of the maximum area encountered during the process.

*/

function findMaxArea(heights) {
  let start = 0;
  let end = heights.length - 1;
  let maxArea = 0;
  while (start < end) {
    let currentArea = Math.min(heights[start], heights[end]) * (end - start);
    maxArea = Math.max(currentArea, maxArea);

    if (heights[start] < heights[end]) {
      start++;
    } else {
      end--;
    }
  }

  return maxArea;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let height = [1, 1];

let result = findMaxArea(height);
console.log('Result : ', result);

/*
Time Complexity: O(n) 
Space Complexity: O(1) 
*/
