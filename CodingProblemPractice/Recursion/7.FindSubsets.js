// Find the subsets of array
/*
let input = [1,2];
let output = [[],[1],[2],[12]]
*/

// Method 1: Brute force

/*

function findSubsets(input, result) {
  result.push([]);
  for (const num of input) {
    let resultLength = result.length;
    for (let i = 0; i < resultLength; i++) {
      result.push([...result[i], num]);
    }
  }

  console.log(result);
}

let input = [1, 2];
let result = [];
findSubsets(input, result);

console.log('Result : ', result);

/*

Time Complexity: O(n * 2^n), where n is the length of the input array.
Space Complexity: O(n * 2^n), due to storing all subsets.

*/

// Method 2: Via Recursion

function findSubsets(input, output, result) {
  if (input.length == 0) {
    result.push(output);
    return;
  }

  let firstElement = input[0];
  let remainingInput = input.slice(1);

  let output1 = output;
  let output2 = [...output, firstElement];

  findSubsets(remainingInput, output1, result);
  findSubsets(remainingInput, output2, result);
}

let input = [1, 2];
let result = [];
findSubsets(input, [], result);

console.log('Result : ', result);

/*

Time Complexity: O(2^n), due to exploring all possible subsets.
Space Complexity: O(n * 2^n), due to the storage of the result array containing all subsets. The call stack space is O(n).

*/
