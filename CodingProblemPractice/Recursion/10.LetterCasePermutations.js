/*
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

Example 1:
Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:
Input: s = "3z4"
Output: ["3z4","3Z4"]
*/

function findLetterCasePermutations(input, output, result) {
  if (input.length === 0) {
    result.push(output);
    return;
  }

  let firstChar = input.charAt(0);
  let remainingInput = input.slice(1);

  if (isNaN(firstChar)) {
    let output1 = output + firstChar.toUpperCase();
    let output2 = output + firstChar.toLowerCase();

    findLetterCasePermutations(remainingInput, output1, result);
    findLetterCasePermutations(remainingInput, output2, result);
  } else {
    let output3 = output + firstChar;
    findLetterCasePermutations(remainingInput, output3, result);
  }
}

let s = 'a1b2';
let result = [];

findLetterCasePermutations(s, '', result);

console.log('Result : ', result);

/*

Time Complexity: O(2^k), where k is the number of alphabetic characters in the input string.
Space Complexity: O(n * 2^k), where n is the length of the input string and k is the number of alphabetic characters.

*/
