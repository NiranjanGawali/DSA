// Print all permutations of a string keeping the sequence but changing cases.

/*
Input : ab
Output : AB Ab ab aB

Input : ABC
Output : abc Abc aBc ABc abC AbC aBC ABC
*/

function findPermutations(input, output, results) {
  if (input.length === 0) {
    results.push(output);
    return;
  }

  let firstElement = input.charAt(0);
  let remainingString = input.slice(1);

  let output1 = output + firstElement.toUpperCase();
  let output2 = output + firstElement;

  findPermutations(remainingString, output2, results);
  findPermutations(remainingString, output1, results);
}

let input = 'ab';
let results = [];
findPermutations(input, '', results);
console.log('Results : ', results);
