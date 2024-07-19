/*
Given a positive integer n. Your task is to generate a string list of all n-bit binary numbers where, for any prefix of the number, 
there are more or an equal number of 1's than 0's. The numbers should be sorted in decreasing order of magnitude.


Input:  
n = 2
Output: 
{"11", "10"}
Explanation: Valid numbers are those where each prefix has more 1s than 0s:
11: all its prefixes (1 and 11) have more 1s than 0s.
10: all its prefixes (1 and 10) have more 1s than 0s.
So, the output is "11, 10".


Input:  
n = 3
Output: 
{"111", "110", "101"}
Explanation: Valid numbers are those where each prefix has more 1s than 0s.
111: all its prefixes (1, 11, and 111) have more 1s than 0s.
110: all its prefixes (1, 11, and 110) have more 1s than 0s.
101: all its prefixes (1, 10, and 101) have more 1s than 0s.
So, the output is "111, 110, 101".

*/

function printBinaryNumbers(ones, zeros, n, output, results) {
  if (n == 0) {
    results.push(output);
    return;
  }

  if (ones >= zeros) {
    let output1 = output + '1';
    printBinaryNumbers(ones + 1, zeros, n - 1, output1, results);
  }

  if (zeros < ones) {
    let output2 = output + '0';
    printBinaryNumbers(ones, zeros + 1, n - 1, output2, results);
  }
}

// Here we need to pass ones, zeros, total number, output and results

let results = [];
let input = 3;
printBinaryNumbers(0, 0, input, '', results);
console.log('OUTPUT : ', results);
