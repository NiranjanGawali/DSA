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

function letterCasePermutation(str) {
  let results = [];
  backtrack(results, str.split(''), 0);
  return results;
}

function backtrack(results, temp, index) {
  if (temp.length === index) {
    results.push(temp.join(''));
    return;
  }

  const currentChar = temp[index];
  if (isNaN(currentChar)) {
    // If it's a letter, branch out to lowercase and uppercase
    temp[index] = currentChar.toLowerCase();
    backtrack(results, temp, index + 1);
    temp[index] = currentChar.toUpperCase();
    backtrack(results, temp, index + 1);
  } else {
    // If it's a digit, just continue
    backtrack(results, temp, index + 1);
  }
}

const s1 = 'a1b2';
const s2 = '3z4';
console.log(letterCasePermutation(s1)); // ["a1b2","a1B2","A1b2","A1B2"]
console.log(letterCasePermutation(s2)); // ["3z4","3Z4"]
