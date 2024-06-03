/*
Array: Remove Element ( ** Interview Question)
The removeElement function takes an array of integers (nums) and an integer value (val).
The function's purpose is to remove all instances of val in the array nums in-place and return the new length of the array.
In simpler terms, the function modifies the given array by shifting all elements that are not equal to val to the start of the array, and it returns the length of the array after the removal of val.

Constraints:
The array could have zero or more elements.
Do not allocate extra space for another array; you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Parameters:
nums: An array of integers, possibly containing duplicates.
val: An integer value that needs to be removed from nums.

Returns:
The function returns an integer representing the new length of the array nums.
*/

function removeElement(arr, num) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== num) {
      arr[i] = arr[j];
      i++;
    }
  }
  return i;
}

// ------------------------------------
//  Test empty array
// ------------------------------------
let arrEmpty = [];
console.log('Test empty array:');
console.log('Before:', arrEmpty); // Should print: []
let lenEmpty = removeElement(arrEmpty, 3);
console.log('After:', arrEmpty.slice(0, lenEmpty)); // Should print: []
console.log('Length:', lenEmpty); // Should print: 0
console.log('---------------');

// ------------------------------------
//  Test array without the element to remove
// ------------------------------------
let arrNoElem = [1, 2, 3, 4];
console.log('Test array without the element to remove:');
console.log('Before:', arrNoElem); // Should print: [1, 2, 3, 4]
let lenNoElem = removeElement(arrNoElem, 5);
console.log('After:', arrNoElem.slice(0, lenNoElem)); // Should print: [1, 2, 3, 4]
console.log('Length:', lenNoElem); // Should print: 4
console.log('---------------');

// ------------------------------------
//  Test array with one type of element to remove
// ------------------------------------
let arrOneType = [3, 3, 3, 3];
console.log('Test array with one type of element to remove:');
console.log('Before:', arrOneType); // Should print: [3, 3, 3, 3]
let lenOneType = removeElement(arrOneType, 3);
console.log('After:', arrOneType.slice(0, lenOneType)); // Should print: []
console.log('Length:', lenOneType); // Should print: 0
console.log('---------------');

// ------------------------------------
//  Test array with the element to remove scattered
// ------------------------------------
let arrScattered = [1, 2, 3, 4, 2, 2];
console.log('Test array with the element to remove scattered:');
console.log('Before:', arrScattered); // Should print: [1, 2, 3, 4, 2, 2]
let lenScattered = removeElement(arrScattered, 2);
console.log('NIRANJAN : ', arrScattered);
console.log('After:', arrScattered.slice(0, lenScattered)); // Should print: [1, 3, 4]
console.log('Length:', lenScattered); // Should print: 3
console.log('---------------');

// ------------------------------------
//  Test array with all unique elements
// ------------------------------------
let arrUnique = [1, 2, 3, 4];
console.log('Test array with all unique elements:');
console.log('Before:', arrUnique); // Should print: [1, 2, 3, 4]
let lenUnique = removeElement(arrUnique, 3);
console.log('After:', arrUnique.slice(0, lenUnique)); // Should print: [1, 2, 4]
console.log('Length:', lenUnique); // Should print: 3
console.log('---------------');

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let arrNegative = [-1, -2, -3, -4];
console.log('Test array with negative numbers:');
console.log('Before:', arrNegative); // Should print: [-1, -2, -3, -4]
let lenNegative = removeElement(arrNegative, -2);
console.log('After:', arrNegative.slice(0, lenNegative)); // Should print: [-1, -3, -4]
console.log('Length:', lenNegative); // Should print: 3
console.log('---------------');

// ------------------------------------
//  Test array with zeros
// ------------------------------------
let arrZeros = [0, 0, 0, 0];
console.log('Test array with zeros:');
console.log('Before:', arrZeros); // Should print: [0, 0, 0, 0]
let lenZeros = removeElement(arrZeros, 0);
console.log('After:', arrZeros.slice(0, lenZeros)); // Should print: []
console.log('Length:', lenZeros); // Should print: 0
console.log('---------------');
