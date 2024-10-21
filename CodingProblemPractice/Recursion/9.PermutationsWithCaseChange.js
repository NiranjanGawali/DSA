// Print all permutations of a string keeping the sequence but changing cases.

/*
Input : ab
Output : AB Ab ab aB

Input : ABC
Output : abc Abc aBc ABc abC AbC aBC ABC
*/

function findPermutations(input, output, result) {
  if (input.length === 0) {
    result.push(output);
    return;
  }

  let firstElement = input.charAt(0);
  let remainingInput = input.slice(1);

  let output1 = output + firstElement;
  let output2 = output + firstElement.toUpperCase();

  findPermutations(remainingInput, output1, result);
  findPermutations(remainingInput, output2, result);
}

let input = 'ab';
let result = [];
findPermutations(input, '', result);

console.log('Result : ', result);

/*

Time Complexity: O(2^n), due to exploring all possible subsets.
Space Complexity: O(n * 2^n), due to the storage of the result array containing all subsets. The call stack space is O(n).

*/
