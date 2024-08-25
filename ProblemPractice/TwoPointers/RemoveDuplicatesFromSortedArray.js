/*

Given a sorted array arr[] of size N, the task is to remove the duplicate elements from the array.

Examples: 

Input: arr[] = {2, 2, 2, 2, 2}
Output: arr[] = {2}
Explanation: All the elements are 2, So only keep one instance of 2.

Input: arr[] = {1, 2, 2, 3, 4, 4, 4, 5, 5}
Output: arr[] = {1, 2, 3, 4, 5}

Input: arr[] = {1, 2, 3}
Output : arr[] = {1, 2, 3}
Explanation : No change as all elements are distinct

https://www.geeksforgeeks.org/remove-duplicates-sorted-array/
*/

function removeDuplicates(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++; // Increment the unique element pointer
      arr[i] = arr[j]; // Move the unique element to the next position
    }
  }

  arr.splice(i + 1); // Adjust the array to have only unique elements
}

// let input = [2, 2, 2, 2, 2];
let input = [1, 2, 2, 3, 4, 4, 4, 5, 5];
removeDuplicates(input);

console.log('Result : ', input);
