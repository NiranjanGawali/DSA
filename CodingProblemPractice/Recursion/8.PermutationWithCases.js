// Find the permutation with spaces
// ABC -> A_B_C, AB_C, A_BC, ABC

function findPermutations(input, output, result) {
  if (input.length === 0) {
    result.push(output);
    return;
  }

  let firstElement = input.charAt(0);
  let remainingInput = input.slice(1);

  let output1 = output + firstElement;
  let output2 = output + '_' + firstElement;

  findPermutations(remainingInput, output1, result);
  findPermutations(remainingInput, output2, result);
}

function main(input, result) {
  let output = input.charAt(0);
  let remainingInput = input.slice(1);

  console.log(output);
  console.log(remainingInput);
  findPermutations(remainingInput, output, result);
}

let input = 'ABC';
let result = [];
main(input, result);
console.log('Final Result : ', result);

/*

Time Complexity: O(2^n), due to exploring all possible subsets.
Space Complexity: O(n * 2^n), due to the storage of the result array containing all subsets. The call stack space is O(n).

*/
