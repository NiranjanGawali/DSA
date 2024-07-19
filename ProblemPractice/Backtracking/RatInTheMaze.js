/*

Consider a rat placed at (0, 0) in a square matrix mat of order n* n. It has to reach the destination at (n - 1, n - 1).
 Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 
 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell 
 in the matrix represents that rat can be travel through it.

Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell. In case of no path, 
return an empty list. The driver will output "-1" automatically.

Examples:

Input: mat[][] = {{1, 0, 0, 0},
         {1, 1, 0, 1}, 
         {1, 1, 0, 0},
         {0, 1, 1, 1}}
Output:
DDRDRR DRDDRR
Explanation:
The rat can reach the destination at 
(3, 3) from (0, 0) by two paths - DRDDRR 
and DDRDRR, when printed in sorted order 
we get DDRDRR DRDDRR.


Input: mat[][] = {{1, 0},
         {1, 0}}
Output:
-1
Explanation:
No path exists and destination cell is 
blocked.

*/

function isSolved(x, y, n) {
  return x === n - 1 && y === n - 1;
}

function isValid(x, y, n, arr) {
  return x >= 0 && x < n && y >= 0 && y < n && arr[x][y] === 1;
}

function findThePath(x, y, n, path, results, arr, choices) {
  if (isSolved(x, y, n)) {
    results.push(path.join(''));
    return;
  }

  for (const choice of choices) {
    let newX = x + choice.x;
    let newY = y + choice.y;

    if (isValid(newX, newY, n, arr)) {
      arr[x][y] = 0; // Mark as visited
      path.push(choice.path);

      findThePath(newX, newY, n, path, results, arr, choices);

      arr[x][y] = 1; // Unmark
      path.pop();
    }
  }
}

function main(maze) {
  let n = maze.length;
  let path = [];
  let results = [];

  let choices = [
    { path: 'U', x: -1, y: 0 },
    { path: 'D', x: 1, y: 0 },
    { path: 'L', x: 0, y: -1 },
    { path: 'R', x: 0, y: 1 },
  ];

  if (maze[0][0] === 1) {
    findThePath(0, 0, n, path, results, maze, choices);
  }

  if (results.length === 0) {
    console.log('-1');
  } else {
    console.log(results.join(' '));
  }
}

let input = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
// let input = [
//   [1, 0],
//   [1, 0],
// ];

main(input);

// Time complexity - 0(4n^2)
