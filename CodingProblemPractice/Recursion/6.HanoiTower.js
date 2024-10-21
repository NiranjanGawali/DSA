// Tower hanoi

/*
The tower of Hanoi is a famous puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod. 
You are given the number of discs n. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all 
the discs reach the 3rd rod. Also, you need to find the total moves.

You only need to complete the function toh() that takes following parameters: n (number of discs), from (The rod number from which we move the disc), 
to (The rod number to which we move the disc), aux (The rod that is used as an auxiliary rod) and prints the required moves inside function 
body (See the example for the format of the output) as well as return the count of total moves made.

Note: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered n. Also, all the discs have different sizes 
and a bigger disc cannot be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.

 
Examples:

Input:
n = 2
Output:
move disk 1 from rod 1 to rod 2
move disk 2 from rod 1 to rod 3
move disk 1 from rod 2 to rod 3
3
Explanation: For N=2 , steps will be as follows in the example and total 3 steps will be taken.

Input:
n = 3
Output:
move disk 1 from rod 1 to rod 3
move disk 2 from rod 1 to rod 2
move disk 1 from rod 3 to rod 2
move disk 3 from rod 1 to rod 3
move disk 1 from rod 2 to rod 1
move disk 2 from rod 2 to rod 3
move disk 1 from rod 1 to rod 3
7
Explanation: For N=3 , steps will be as follows in the example and total 7 steps will be taken.
Expected Time Complexity: O(2n).
*/

function solveHanoi(n, source, aux, destination) {
  if (n === 1) {
    console.log(`Moving disk ${n} from ${source} to ${destination}`);
    return;
  }

  solveHanoi(n - 1, source, destination, aux);
  console.log(`Moving disk ${n} from ${source} to ${destination}`);
  solveHanoi(n - 1, aux, source, destination);
}

let n = 2;
solveHanoi(n, 1, 2, 3);

/*

Time Complexity: O(2^n), because the function performs 2^n - 1 moves.
Space Complexity: O(n), because of the recursive call stack depth.

*/

/*


Let's break down the number of steps (moves) for the **Tower of Hanoi** function `solveHanoi` for different values of `n` (the number of disks). We'll look at the pattern to see how the number of moves grows as `n` increases.

### Base Case:
For **n = 1**:
- There is only 1 move: Move the single disk from the source to the destination.

[T(1) = 1]

### Recursive Cases:
For **n = 2**:
- First, move disk 1 from the source to the auxiliary peg.
- Then, move disk 2 from the source to the destination peg.
- Finally, move disk 1 from the auxiliary peg to the destination peg.

So, for `n = 2`, there are **3 moves**.

[T(2) = 2^2 - 1 = 3]

For **n = 3**:
- First, move the top 2 disks to the auxiliary peg (this takes 3 moves as seen for `n = 2`).
- Then, move disk 3 (the largest) from the source to the destination peg.
- Finally, move the 2 disks from the auxiliary peg to the destination peg (again, this takes 3 moves).

So, for `n = 3`, there are **7 moves**.

[T(3) = 2^3 - 1 = 7]

For **n = 4**:
- First, move the top 3 disks to the auxiliary peg (this takes 7 moves as seen for `n = 3`).
- Then, move disk 4 (the largest) from the source to the destination peg.
- Finally, move the 3 disks from the auxiliary peg to the destination peg (again, this takes 7 moves).

So, for `n = 4`, there are **15 moves**.

[T(4) = 2^4 - 1 = 15]

For **n = 5**:
- First, move the top 4 disks to the auxiliary peg (this takes 15 moves as seen for `n = 4`).
- Then, move disk 5 (the largest) from the source to the destination peg.
- Finally, move the 4 disks from the auxiliary peg to the destination peg (again, this takes 15 moves).

So, for `n = 5`, there are **31 moves**.

[T(5) = 2^5 - 1 = 31]

For **n = 6**:
- First, move the top 5 disks to the auxiliary peg (this takes 31 moves as seen for `n = 5`).
- Then, move disk 6 (the largest) from the source to the destination peg.
- Finally, move the 5 disks from the auxiliary peg to the destination peg (again, this takes 31 moves).

So, for `n = 6`, there are **63 moves**.

[T(6) = 2^6 - 1 = 63]

For **n = 7**:
- First, move the top 6 disks to the auxiliary peg (this takes 63 moves as seen for `n = 6`).
- Then, move disk 7 (the largest) from the source to the destination peg.
- Finally, move the 6 disks from the auxiliary peg to the destination peg (again, this takes 63 moves).

So, for `n = 7`, there are **127 moves**.

[T(7) = 2^7 - 1 = 127]

### Summary of Moves for Each `n`:

- **n = 1**: 1 move
- **n = 2**: 3 moves
- **n = 3**: 7 moves
- **n = 4**: 15 moves
- **n = 5**: 31 moves
- **n = 6**: 63 moves
- **n = 7**: 127 moves

### General Formula:

The number of moves required for `n` disks in the Tower of Hanoi problem is given by the formula:

[T(n) = 2^n - 1]

This shows that the number of moves grows exponentially as the number of disks increases.

*/
