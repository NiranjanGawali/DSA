/*

A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. 
Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any non-empty path.

 

Example 1:
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.


Example 2:
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

https://leetcode.com/problems/binary-tree-maximum-path-sum/description/

https://www.geeksforgeeks.org/find-maximum-path-sum-in-a-binary-tree/
*/

function findMaxPathSum(node, result) {
  if (node === null) return 0; // Base condition: if node is null then return 0

  let left = findMaxPathSum(node.left, result); // Hypothesis : Moving the left node
  let right = findMaxPathSum(node.right, result); // Hypothesis : Moving the right node

  let temp = Math.max(Math.max(left, right) + node.val, node.val); // Induction :  Its passing values to upper node in the tree, here we are finding the maximum of sum between max of left, right and node value,
  // and this is also max of this sum and node value, as if output of Math.max(left, right) is less than node value no point in adding it.

  let ans = Math.max(temp, left + right + node.val); // Induction : If the node itself is candidate from which path is moved to right side of the tree. Finding ans which is max of temp and left + right and its node value
  result.maxElement = Math.max(ans, result.maxElement); // Induction : As we need to find largest answer hence maximum value is set to the variable.

  return temp; // We are returning temp here as we liked to moved to upper nodes so temp value is passed.
}

function main(rootNode) {
  let result = {
    maxElement: Number.MIN_SAFE_INTEGER,
  };

  findMaxPathSum(rootNode, result);
  return result.maxElement;
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);

let root = new Node(-10);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

let result = main(root);
console.log('Binary Tree Maximum path sum is : ', result);
