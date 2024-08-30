/*

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
 

Example 1:


Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
 

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.

https://leetcode.com/problems/valid-sudoku/description/?envType=study-plan-v2&envId=top-interview-150

*/

function isValidSudoku(board) {
  // Create an array `rows` of length 9, where each element is an empty Set.
  // This will be used to track the numbers in each row of the Sudoku board.
  let rows = Array.from({ length: 9 }, () => new Set());

  // Create an array `cols` of length 9, where each element is an empty Set.
  // This will be used to track the numbers in each column of the Sudoku board.
  let cols = Array.from({ length: 9 }, () => new Set());

  // Create an array `boxes` of length 9, where each element is an empty Set.
  // This will be used to track the numbers in each 3x3 sub-box of the Sudoku board.
  let boxes = Array.from({ length: 9 }, () => new Set());

  // Example of how to use these arrays
  // Iterate through the Sudoku board
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j];

      if (num === '.') {
        continue;
      }

      // Check if the number already exists in the row
      if (rows[i].has(num)) return false;
      rows[i].add(num);

      // Check if the number already exists in the column
      if (cols[j].has(num)) return false;
      cols[j].add(num);

      // Check if the number already exists in the sub-box
      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      if (boxes[boxIndex].has(num)) return false;
      boxes[boxIndex].add(num);
    }
  }

  return true;
}

let board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
];

let result = isValidSudoku(board);

console.log('Result : ', result);

/*
Time Complexity: O(1)
Space Complexity: O(1)
*/
