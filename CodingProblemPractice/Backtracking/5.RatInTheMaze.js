/*

Consider a rat placed at (0, 0) in a square matrix mat of order n* n. It has to reach the destination at (n - 1, n - 1). Find all possible paths that the rat can take to reach from source to destination. The directions in which the rat can move are 'U'(up), 'D'(down), 'L' (left), 'R' (right). Value 0 at a cell in the matrix represents that it is blocked and rat cannot move to it while value 1 at a cell in the matrix represents that rat can be travel through it.
Note: In a path, no cell can be visited more than one time. If the source cell is 0, the rat cannot move to any other cell. In case of no path, return an empty list. The driver will output "-1" automatically.

Examples:
Input: mat[][] = [[1, 0, 0, 0],
                [1, 1, 0, 1], 
                [1, 1, 0, 0],
                [0, 1, 1, 1]]
Output: DDRDRR DRDDRR
Explanation: The rat can reach the destination at (3, 3) from (0, 0) by two paths - DRDDRR and DDRDRR, when printed in sorted order we get DDRDRR DRDDRR.

Input: mat[][] = [[1, 0],
                [1, 0]]
Output: -1

Explanation: No path exists and destination cell is blocked.
Expected Time Complexity: O(3n^2)
Expected Auxiliary Space: O(l * x)

Here l = length of the path, x = number of paths.

Constraints:
2 ≤ n ≤ 5
0 ≤ mat[i][j] ≤ 1



https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1

*/

function isChoiceValid(newX, newY, n, maze) {
  return (
    newX >= 0 && newX < n && newY >= 0 && newY < n && maze[newX][newY] == 1
  );
}

function isSolved(x, y, n) {
  return x == n - 1 && y == n - 1;
}

function findThePath(x, y, path, result, choices, maze, n) {
  if (isSolved(x, y, n)) {
    result.push(path.join(''));
    return;
  }

  for (const choice of choices) {
    let newX = x + choice.x;
    let newY = y + choice.y;

    if (isChoiceValid(newX, newY, n, maze)) {
      maze[newX][newY] = 0; // Marked as visited
      path.push(choice.path);

      findThePath(newX, newY, path, result, choices, maze, n);

      maze[newX][newY] = 1; // Marked as unvisited
      path.pop();
    }
  }
}

function main(input) {
  let result = [];
  let path = [];
  let choices = [
    {
      path: 'U',
      x: -1,
      y: 0,
    },
    {
      path: 'D',
      x: 1,
      y: 0,
    },
    {
      path: 'L',
      x: 0,
      y: -1,
    },
    {
      path: 'R',
      x: 0,
      y: 1,
    },
  ];

  if (input[0][0] == 1) {
    findThePath(0, 0, path, result, choices, input, input.length);
  }

  if (result.length === 0) {
    result = -1;
  }

  console.log('Final Result : ', result);
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

/*

For every step there are 4 choices. In the worst case scenario assume we have go through all the maze (all the values are one)

the we can calculate the time complexity as below : 

Time Complexity: O(4^(n^2))
Space Complexity: O(4^(n^2)), mainly for the result storage

*/
