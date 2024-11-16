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

function findPermutations(inputArr, startIndex, result) {
  if (startIndex === inputArr.length - 1) {
    result.push(inputArr.join(''));
    return;
  }

  let map = new Map();

  for (let i = startIndex; i < inputArr.length; i++) {
    if (!map.has(inputArr[i])) {
      map.set(inputArr[i], true);
      if (i !== startIndex) {
        [inputArr[i], inputArr[startIndex]] = [
          inputArr[startIndex],
          inputArr[i],
        ];
        findPermutations(inputArr, startIndex + 1, result);
        [inputArr[i], inputArr[startIndex]] = [
          inputArr[startIndex],
          inputArr[i],
        ];
      } else {
        findPermutations(inputArr, startIndex + 1, result);
      }
    }
  }
}

let input = 'ABC';

let result = [];
findPermutations(input.split(''), 0, result);

console.log('Output: ', result);

/*

Time complexity: O(n * n!)
Space complexity: O(n * n!)

*/
