/*

Given a string S. The task is to print all unique permutations of the given string in lexicographically sorted order.

Example 1:

Input: ABC
Output:
ABC ACB BAC BCA CAB CBA
Explanation:
Given string ABC has permutations in 6 
forms as ABC, ACB, BAC, BCA, CAB and CBA .
Example 2:

Input: ABSG
Output:
ABGS ABSG AGBS AGSB ASBG ASGB BAGS 
BASG BGAS BGSA BSAG BSGA GABS GASB 
GBAS GBSA GSAB GSBA SABG SAGB SBAG 
SBGA SGAB SGBA
Explanation:
Given string ABSG has 24 permutations.

*/

// Below is code to find permutations of string

/*

function findPermutations(input, output, results) {
  if (input.length === 0) {
    results.push(output);
    return;
  }

  for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);

    let remainingInput = input.slice(0, i) + input.slice(i + 1);
    let modifiedOutput = output + char;
    findPermutations(remainingInput, modifiedOutput, results);
  }
}

function main(input) {
  let results = [];
  let output = '';
  findPermutations(input, output, results);
  return results;
}

let input = 'ABC';
let finalOutput = main(input);
console.log('Final Output : ', finalOutput);

*/

/// Below is code to find the permutations of stirng without duplicate

function findPermutations(input, output, results) {
  if (input.length === 0) {
    results.push(output);
    return;
  }

  let branchMap = {};

  for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);

    if (!branchMap[char]) {
      branchMap[char] = true;
      let remainingInput = input.slice(0, i) + input.slice(i + 1);
      let modifiedOutput = output + char;
      findPermutations(remainingInput, modifiedOutput, results);
    }
  }
}

function main(input) {
  let results = [];
  let output = '';
  findPermutations(input, output, results);
  return results;
}

let input = 'ABB';
let finalOutput = main(input);
console.log('Final Output : ', finalOutput);

// Time complexity of above code is 0(n * n!)
