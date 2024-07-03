/*
Given the root of a binary tree, imagine yourself standing on the right side of it, 
return the values of the nodes you can see ordered from top to bottom.

Example 1:
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:
Input: root = [1,null,3]
Output: [1,3]

Example 3:
Input: root = []
Output: []
*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findRightSideView(root) {
  if (!root) return [];

  let results = [];
  let queue = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;
    let lastNodeVal = null;

    for (let i = 0; i < levelSize; i++) {
      let currentNode = queue.shift();
      lastNodeVal = currentNode.val;

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    if (lastNodeVal !== null) {
      results.push(lastNodeVal);
    }
  }

  return results;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log('Tree right view: ' + findRightSideView(root));

/*
         12
       /    \
      7      1
     /      / \
    9      10  5
   /
  3

*/
