/*

Given a string s. The task is to return a vector of string of all unique permutations of the given string, s that may contain duplicates in lexicographically sorted order. 

Examples:
Input: "ABC"
Output: ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
Explanation: Given string ABC has permutations in 6 forms as "ABC", "ACB", "BAC", "BCA", "CAB" and "CBA".

Input: "ABSG"
Output: ["ABGS", "ABSG", "AGBS", "AGSB", "ASBG", "ASGB", "BAGS", "BASG", "BGAS", "BGSA", "BSAG", "BSGA", "GABS", "GASB", "GBAS", "GBSA", "GSAB", "GSBA", "SABG", "SAGB", "SBAG", "SBGA", "SGAB", "SGBA"]
Explanation: Given string ABSG has 24 permutations.

Input: "AAA"
Output: ["AAA"]
Explanation: No other unique permutations can be formed as all the characters are same.

Constraints:
1 <= s.size() <= 5

*/

function findPermutations(input, output, result) {
  if (input.length === 0) {
    result.push(output);
    return;
  }

  let map = new Map();

  for (let i = 0; i < input.length; i++) {
    let firstElement = input.charAt(i);
    if (!map.has(firstElement)) {
      map.set(firstElement, true);
      let remainingInput = input.slice(0, i) + input.slice(i + 1);

      let modifiedOutput = output + firstElement;

      findPermutations(remainingInput, modifiedOutput, result);
    }
  }
}

let input = 'ABC';

let result = [];
findPermutations(input, '', result);

console.log('Output: ', result);

/*
Time complexity: O(n * n!) - n step and n factorial values to get result
Space complexity: O(n * n!)

*/
