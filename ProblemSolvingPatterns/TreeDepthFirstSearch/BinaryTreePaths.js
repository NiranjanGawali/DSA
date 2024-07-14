/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

Example 1:
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]

Example 2:
Input: root = [1]
Output: ["1"]
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findPaths(root) {
  let results = [];
  findAPaths(root, [], results);
  return results;
}

function findAPaths(currentNode, path, results) {
  if (!currentNode) {
    return;
  }

  path.push(currentNode.val);

  if (currentNode.left === null && currentNode.right === null) {
    results.push([...path]);
  } else {
    findAPaths(currentNode.left, path, results);
    findAPaths(currentNode.right, path, results);
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
let result = findPaths(root);

console.log('Result : ', result);

/*
       12
      /  \
     7    1
    /    / \
   4    10  5

   output : 12-7-4, 12-1-10, 12-1-5
*/
