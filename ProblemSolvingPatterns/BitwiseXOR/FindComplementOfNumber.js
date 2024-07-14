/*
The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
Given an integer n, return its complement.

Example 1:
Input: n = 5
Output: 2
Explanation: 5 is "101" in binary, with complement "010" in binary, which is 2 in base-10.

Example 2:
Input: n = 7
Output: 0
Explanation: 7 is "111" in binary, with complement "000" in binary, which is 0 in base-10.

Example 3:
Input: n = 10
Output: 5
Explanation: 10 is "1010" in binary, with complement "0101" in binary, which is 5 in base-10.
*/

/*
Approach 1
*/

/*
function findComplementOfNumber(number) {
  let binary = number.toString(2);
  let binaryComplement = '';
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] == 0) {
      binaryComplement += 1;
    } else {
      binaryComplement += 0;
    }
  }
  let complementNumber = parseInt(binaryComplement, 2);
  return complementNumber;
}

let result = findComplementOfNumber(5);
console.log('Result : ', result);
*/

/**
 Approch 2: Using bitwise operator
 */

function findComplement(n) {
  // Find the number of bits in the binary representation of n
  let bitLength = n.toString(2).length;

  // Create a mask with all bits set to 1
  let mask = (1 << bitLength) - 1;

  // XOR n with the mask to get the complement
  return n ^ mask;
}

// Example usage
console.log(findComplement(5)); // Output: 2
console.log(findComplement(7)); // Output: 0
console.log(findComplement(10)); // Output: 5
