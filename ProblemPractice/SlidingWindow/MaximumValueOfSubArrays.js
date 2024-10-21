/*
Find the maximum value in the subarray of given window, in the provided array.
exmaple :
Array size = 8,
Array = [1,3,-1,-3,5,3,6,7]
Window = 3
Result = [3,3,5,5,6,7]
*/

// Brute Force Way

/*
function findMaximumValueOfSubArray(arr, arraySize, window) {
  let results = [];
  for (let i = 0; i < arraySize - window + 1; i++) {
    let maxValue = Number.MIN_SAFE_INTEGER;
    for (let j = i; j < i + window; j++) {
      if (arr[j] > maxValue) {
        maxValue = arr[j];
      }
    }
    results.push(maxValue);
  }
  //   console.log(results);
  return results;
}

let input = [1, 3, -1, -3, 5, 3, 6, 7];
let arraySize = 8;
let window = 3;

let output = findMaximumValueOfSubArray(input, arraySize, window);
console.log('Output : ', output);
*/

/// Sliding window way

function findMaximumValueOfSubArray(arr, arraySize, window) {
  if (window > -arraySize) {
    let maxElt = arr.sort((a, b) => b - a)[0]; // Find the largest element in the array and return it.
    return maxElt;
  }

  let results = []; // Array to store results (maximum values of subarrays)
  let start = 0; // Start index of the sliding window
  let end = 0; // End index of the sliding window
  let maxElements = []; // Array to store maximum elements in current window

  // Iterate through the array
  while (end < arraySize) {
    // Maintain a decreasing monotonic deque of indices of array elements
    while (
      maxElements.length > 0 &&
      maxElements[maxElements.length - 1] < arr[end]
    ) {
      maxElements.pop();
    }
    maxElements.push(arr[end]); // Add the current element to the deque

    // Once the window size reaches `window`, process the maximum element of the window
    if (end - start + 1 === window) {
      results.push(maxElements[0]); // Add the maximum element of the current window to results

      // If the element going out of the window was the maximum, remove it from maxElements
      if (arr[start] === maxElements[0]) {
        maxElements.shift();
      }
      start++; // Slide the window by incrementing start
    }
    end++; // Slide the window by incrementing end
  }

  return results; // Return the array containing maximum values of all subarrays of size `window`
}

// Example usage:
let arr = [1, 3, -1, -3, 5, 3, 6, 7];
let arraySize = arr.length;
let window = 3;
let result = findMaximumValueOfSubArray(arr, arraySize, window);
console.log('Result : ', result); // Output: [3, 3, 5, 5, 6, 7]
