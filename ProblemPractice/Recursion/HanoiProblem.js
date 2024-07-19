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

function solveHanoi(n, source, auxiliary, destination) {
  if (n == 1) {
    console.log(`move disk ${n} from ${source} to ${destination}`);
    return;
  }
  solveHanoi(n - 1, source, destination, auxiliary);
  console.log(`move disk ${n} from ${source} to ${destination}`);
  solveHanoi(n - 1, auxiliary, source, destination);
}

let n = 3; // Number of disks
solveHanoi(n, 1, 2, 3);
