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

function findLettercasePermutations(input, output, results) {
  if (input.length === 0) {
    results.push(output);
    return;
  }

  let firstElement = input.charAt(0);
  let remainingInput = input.slice(1);

  if (isNaN(firstElement)) {
    let output1 = output + firstElement.toLowerCase();
    let output2 = output + firstElement.toUpperCase();

    findLettercasePermutations(remainingInput, output1, results);
    findLettercasePermutations(remainingInput, output2, results);
  } else {
    let output3 = output + firstElement;
    findLettercasePermutations(remainingInput, output3, results);
  }
}

let input = 'a1b2';
let results = [];
findLettercasePermutations(input, '', results);
console.log('Results : ', results);
