/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
 

Constraints:

1 <= s.length <= 1000
s consists of English letters (lower-case and upper-case), ',' and '.'.
1 <= numRows <= 1000


https://leetcode.com/problems/zigzag-conversion/description/?envType=study-plan-v2&envId=top-interview-150

*/

function zigzagString(s, numRows) {
  // If numRows is 1, return the string as it is (no zigzag pattern needed)
  if (numRows === 1) return s;

  // Create an array of strings, one for each row
  let rows = Array.from({ length: Math.min(numRows, s.length) }, () => '');

  let currentRow = 0; // Start at the first row
  let goingDown = false; // Direction flag (initially not going down)

  // Iterate over each character in the input string
  for (let char of s) {
    // Append the character to the current row
    rows[currentRow] += char;

    // Change direction if we are at the top or bottom row
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown; // Toggle the direction
    }

    // Move to the next row depending on the direction
    currentRow += goingDown ? 1 : -1;
  }

  // Join all rows to form the final string
  return rows.join('');
}
let s = 'PAYPALISHIRING',
  numRows = 3;

// let s = 'PAYPALISHIRING',
//   numRows = 4;

let result = zigzagString(s, numRows);
console.log('Result : ', result);

/*
Time Complexity: O(n), where n is the length of the input string.
Space Complexity: O(n), primarily due to the space required for storing the rows.
*/
