/*

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.


https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

*/

// Method 1 : Brute Force

/*

function mergeArrays(arr1, m, arr2, n, arr3) {
  for (let i = 0; i < m; i++) {
    arr3[i] = arr1[i];
  }

  for (let i = 0; i < n; i++) {
    arr3[m + i] = arr2[i];
  }

  arr3.sort();
}

let arr1 = [1, 3, 4, 5];
let m = arr1.length;
let arr2 = [2, 4, 6, 8];
let n = arr2.length;

let arr3 = new Array(m + n);

mergeArrays(arr1, m, arr2, n, arr3);

console.log('Result : ', arr3);

// Time Complexity : O((m+n) log(m+n)) , the whole size of arr3 is m+n
// Auxiliary Space: O(m+n), where m is the size of arr1 and n is the size of arr2.

*/

// Method 2: Another way we can do it using insertion sort, move arr2 into the arr3 and perform inserting sort while inserting arr2

/*

function mergeArrays(arr1, m, arr2, n, arr3) {
  for (let i = 0; i < m; i++) {
    arr3[i] = arr1[i];
  }

  for (let i = 0; i < n; i++) {
    const current = arr2[i];

    let j = m + i - 1;

    while (j >= 0 && arr3[j] > current) {
      arr3[j + 1] = arr3[j];
      j--;
    }

    arr3[j + 1] = current;
  }
}

let arr1 = [1, 3, 4, 5];
let m = arr1.length;
let arr2 = [2, 4, 6, 8];
let n = arr2.length;

let arr3 = new Array(m + n);

mergeArrays(arr1, m, arr2, n, arr3);

console.log('Result : ', arr3);

//  O(n1 * n2) Time and O(n1+n2) Extra Space

*/

// Method 2 : Efficient way using Merge sort

function mergeArrays(arr1, m, arr2, n, arr3) {
  let i = 0,
    j = 0,
    k = 0;
  while (i < m && j < n) {
    if (arr1[i] > arr2[j]) {
      arr3[k] = arr2[j];
      j++;
    } else {
      arr3[k] = arr1[i];
      i++;
    }
    k++;
  }

  while (i < m) {
    arr3[k] = arr1[i];
    i++;
    k++;
  }

  while (j < n) {
    arr3[k] = arr2[j];
    j++;
    k++;
  }
}

let arr1 = [1, 3, 4, 5];
let m = arr1.length;
let arr2 = [2, 4, 6, 8];
let n = arr2.length;

let arr3 = new Array(m + n);

mergeArrays(arr1, m, arr2, n, arr3);

console.log('Result : ', arr3);

// O(n1 + n2) Time and O(n1 + n2) Extra Space
