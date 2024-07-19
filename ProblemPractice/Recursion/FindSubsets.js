// Find the subsets of array
/*
let input = [1,2];
let output = [[],[1],[2],[12]]
*/

// BRUTE FORCE APPROACH
/*
function findSubsets(input, output) {
  let results = [[]];

  for (let num of input) {
    let resultLength = results.length;
    for (let i = 0; i < resultLength; i++) {
      let subset = [...results[i], num];
      results.push(subset);
    }
  }

  return results;
}

let input = [1, 2];
let output = [];

let results = findSubsets(input, output);
console.log('Results : ', results);
*/

// Find subsets of array using recursion
/*
function findSubsets(input, output, results) {
  if (input.length === 0) {
    results.push(output);
    return;
  }

  let firstElement = input[0];
  let remainingArray = input.slice(1);

  let output1 = output;
  let output2 = [...output, firstElement];

  findSubsets(remainingArray, output1, results);
  findSubsets(remainingArray, output2, results);
}

let input = [1, 2];
let output = [];
let results = [];
findSubsets(input, output, results);
console.log('Results : ', results);
*/

// Find the subsets of string
// let input = ab;
// let output = ['','a','b','ab']

function findSubsets(input, output, results) {
  if (input.length == 0) {
    results.push(output);
    return;
  }

  let firstCharacter = input.charAt(0);
  let remainingInput = input.slice(1);

  let output1 = output;
  let output2 = output.concat(firstCharacter);

  findSubsets(remainingInput, output1, results);
  findSubsets(remainingInput, output2, results);
}

let input = 'ab';
let output = '';
let results = [];
findSubsets(input, output, results);
console.log('Results : ', results);
