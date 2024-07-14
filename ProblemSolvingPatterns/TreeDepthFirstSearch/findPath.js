/*
Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum. 
Each path should be returned as a list of the node values, not node references.

A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

Example 1:
Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: [[5,4,11,2],[5,8,4,5]]
Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22

Example 2:
Input: root = [1,2,3], targetSum = 5
Output: []

Example 3:
Input: root = [1,2], targetSum = 0
Output: []
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findPaths(root, targetSum) {
  let results = [];
  dfs(root, targetSum, 0, [], results);
  return results;
}

function dfs(currentNode, targetSum, currentSum, path, results) {
  if (!currentNode) return;

  path.push(currentNode.val);

  currentSum += currentNode.val;

  if (currentNode.left === null && currentNode.right === null) {
    if (currentSum === targetSum) {
      results.push([...path]);
    }
  } else {
    dfs(currentNode.left, targetSum, currentSum, path, results);
    dfs(currentNode.right, targetSum, currentSum, path, results);
  }

  // backtracking the path so it comes back from leaf node
  path.pop();
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let result = findPaths(root, 23);
console.log(`Paths found : `, result);

/*
       12
      /  \
     7    1
    /     / \
   4    10   5

*/

/**
The time complexity of the above algorithm is O(N^2), where N is the total number of nodes in the tree. This is due to the fact that we traverse each node 
once (which will take O(N)), and for every leaf node, we might have to store its path (by making a copy of the current path) which will take O(N).

We can calculate a tighter time complexity of O(NlogN) from the space complexity discussion below.
If we ignore the space required for the allPaths list, the space complexity of the above algorithm will be O(N) in the worst case. 
This space will be used to store the recursion stack. The worst-case will happen when the given tree is a linked list (i.e., every node has only one child).
 */
