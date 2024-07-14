function findDuplicates(arr) {
  let map = new Map();
  let output = [];
  for (let elt of arr) {
    let earlierEntry = map.get(elt);
    map.set(elt, 1);
    if (earlierEntry) {
      map.set(elt, earlierEntry + 1);
    }
  }

  for (let [key, value] of map.entries()) {
    if (value >= 2) {
      output.push(key);
    }
  }

  return output;
}

// ---------------
// No Duplicates
// ---------------
console.log('No Duplicates:');
console.log('Input: [1, 2, 3, 4, 5]');
console.log('Output: ', JSON.stringify(findDuplicates([1, 2, 3, 4, 5])));
console.log('---------------');

// ---------------
// Single Duplicate
// ---------------
console.log('Single Duplicate:');
console.log('Input: [1, 2, 2, 3, 4]');
console.log('Output: ', JSON.stringify(findDuplicates([1, 2, 2, 3, 4])));
console.log('---------------');

// ---------------
// Multiple Duplicates
// ---------------
console.log('Multiple Duplicates:');
console.log('Input: [1, 1, 2, 2, 3, 4]');
console.log('Output: ', JSON.stringify(findDuplicates([1, 1, 2, 2, 3, 4])));
console.log('---------------');

// ---------------
// Repeating Duplicates
// ---------------
console.log('Repeating Duplicates:');
console.log('Input: [1, 1, 1, 2, 2, 2, 3]');
console.log('Output: ', JSON.stringify(findDuplicates([1, 1, 1, 2, 2, 2, 3])));
console.log('---------------');

// ---------------
// Empty Array
// ---------------
console.log('Empty Array:');
console.log('Input: []');
console.log('Output: ', JSON.stringify(findDuplicates([])));
console.log('---------------');

// ---------------
// Single Element
// ---------------
console.log('Single Element:');
console.log('Input: [1]');
console.log('Output: ', JSON.stringify(findDuplicates([1])));
console.log('---------------');
