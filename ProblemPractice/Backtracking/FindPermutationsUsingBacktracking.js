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

/// Below is code to find the permutations of stirng using backtracking

function findPermutations(inputArr, start, results) {
  if (inputArr.length - 1 === start) {
    results.push(inputArr.join(''));
    return;
  }

  let branchMap = {};
  for (let i = start; i < inputArr.length; i++) {
    if (!branchMap[inputArr[i]]) {
      branchMap[inputArr[i]] = true;
      if (inputArr[i] !== inputArr[start]) {
        [inputArr[i], inputArr[start]] = [inputArr[start], inputArr[i]];
        findPermutations(inputArr, start + 1, results);
        [inputArr[i], inputArr[start]] = [inputArr[start], inputArr[i]];
      } else {
        findPermutations(inputArr, start + 1, results);
      }
    }
  }
}

function main(input) {
  let results = [];
  findPermutations(input.split(''), 0, results);
  return results;
}

let input = 'ABC';
let finalOutput = main(input);
console.log('Final Output : ', finalOutput);

// Time complexity of above code is 0(n * n!)
