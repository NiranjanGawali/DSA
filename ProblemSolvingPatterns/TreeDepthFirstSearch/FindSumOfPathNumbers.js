/*
You are given the root of a binary tree containing digits from 0 to 9 only.
Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

Example 1:
Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.

Example 2:
Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
*/

/*
Below is one way to do it. 
*/

/*

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function findSumOfPathNumbers(root) {
  let resultSum = 0;
  function findASumOfPathNumbers(currentNode, path) {
    if (!currentNode) return 0;

    path.push(currentNode.val);

    if (currentNode.left === null && currentNode.right === null) {
      let pathNumber = path.join('');
      resultSum += Number(pathNumber);
    } else {
      findASumOfPathNumbers(currentNode.left, path);
      findASumOfPathNumbers(currentNode.right, path);
    }

    // Remvoing element from stack so it moves to previous parent
    path.pop();
  }
  findASumOfPathNumbers(root, []);
  return resultSum;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let result = findSumOfPathNumbers(root);
console.log('Result : ', result);

*/

/**
 * Below is another way to achieve same
 */

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function findSumOfPathNumbers(root) {
  return findRootToLeafPathNumbers(root, 0);
}

function findRootToLeafPathNumbers(currentNode, pathSum) {
  if (currentNode === null) {
    return 0;
  }

  // Calculate the path number of the current node
  pathSum = 10 * pathSum + currentNode.value;

  // If the currentNode is a leaf, return the current pathSum
  if (currentNode.left === null && currentNode.right === null) {
    return pathSum;
  }

  // Traverse the left and the right sub-tree
  return (
    findRootToLeafPathNumbers(currentNode.left, pathSum) +
    findRootToLeafPathNumbers(currentNode.right, pathSum)
  );
}

const root = new TreeNode(1);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(8);
root.right.right = new TreeNode(5);

let result = findSumOfPathNumbers(root);
console.log('Result : ', result);

// The time complexity of the above algorithm is O(N), where N is the total number of nodes in the tree. This is due to the fact that we traverse each node once.
// The space complexity of the above algorithm will be O(N) in the worst case. This space will be used to store the recursion stack. The worst case will happen when the given tree is a linked list (i.e., every node has only one child).

/*
       12
      /  \
     7    1
    /     / \
   4    10   5

*/
