// Find the permutation with spaces
// ABC -> A_B_C, AB_C, A_BC, ABC

function findPermutationWithUnderscore(input, output, results) {
  if (input.length === 0) {
    results.push(output);
    return;
  }
  let firstElement = input.charAt(0);
  let remainingString = input.slice(1);

  let output1 = output + firstElement;
  let output2 = output + '_' + firstElement;

  findPermutationWithUnderscore(remainingString, output1, results);
  findPermutationWithUnderscore(remainingString, output2, results);
}

function main(input, results) {
  let output = input.charAt(0);
  let remainingString = input.slice(1);

  findPermutationWithUnderscore(remainingString, output, results);
}

let input = 'ABC';
let results = [];
main(input, results);

console.log('Result : ', results);
