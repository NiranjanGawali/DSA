//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the length of the longest     |
//   |   consecutive sequence of integers in the given     |
//   |   array.                                            |
//   |                                                     |
//   | Return type: number                                 |
//   | - Returns the length of the longest consecutive     |
//   |   sequence.                                         |
//   | - Returns 0 if the array is empty.                  |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use a Set to track unique numbers.        |
//   | - The function iterates through each unique number  |
//   |   and finds streaks of consecutive numbers.         |
//   +=====================================================+

function longestConsecutiveSequence(arr) {
  if (arr.length === 0) return 0;
  let mySet = new Set(arr);
  let longestConsecutiveSequence = 0;
  for (const num of mySet) {
    if (!mySet.has(num - 1)) {
      let currentNum = num;
      let currentConsecutiveSequence = 1;

      while (mySet.has(currentNum + 1)) {
        currentNum++;
        currentConsecutiveSequence++;
      }
      longestConsecutiveSequence = Math.max(
        longestConsecutiveSequence,
        currentConsecutiveSequence
      );
    }
  }
  return longestConsecutiveSequence;
}

// -------------------
// No Consecutive Sequence
// -------------------
console.log('No Consecutive Sequence:');
console.log('Input: [1, 3, 5]');
console.log('Output: ', longestConsecutiveSequence([1, 3, 5]));
console.log('---------------');

// -------------------
// Single Element
// -------------------
console.log('Single Element:');
console.log('Input: [1]');
console.log('Output: ', longestConsecutiveSequence([1]));
console.log('---------------');

// -------------------
// Consecutive Sequence
// -------------------
console.log('Consecutive Sequence:');
console.log('Input: [1, 2, 3, 4, 5]');
console.log('Output: ', longestConsecutiveSequence([1, 2, 3, 4, 5]));
console.log('---------------');

// -------------------
// Unordered Input
// -------------------
console.log('Unordered Input:');
console.log('Input: [5, 2, 3, 1, 4]');
console.log('Output: ', longestConsecutiveSequence([5, 2, 3, 1, 4]));
console.log('---------------');

// -------------------
// Empty Array
// -------------------
console.log('Empty Array:');
console.log('Input: []');
console.log('Output: ', longestConsecutiveSequence([]));
console.log('---------------');

// -------------------
// Multiple Sequences
// -------------------
console.log('Multiple Sequences:');
console.log('Input: [1, 2, 3, 10, 11, 12]');
console.log('Output: ', longestConsecutiveSequence([1, 2, 3, 10, 11, 12]));
console.log('---------------');
