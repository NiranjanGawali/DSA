class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  #rInsert(value, newNode = this.root) {
    if (newNode === null) return new Node(value);

    if (value < newNode.value) {
      newNode.left = this.#rInsert(value, newNode.left);
    } else {
      newNode.right = this.#rInsert(value, newNode.right);
    }
    return newNode;
  }

  rInsert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else this.root = this.#rInsert(value);
  }

  rContains(value, currentNode = this.root) {
    if (currentNode === null) {
      return false;
    }
    if (currentNode.value === value) {
      return true;
    }
    if (value < currentNode.value) {
      return this.rContains(value, currentNode.left);
    } else {
      return this.rContains(value, currentNode.right);
    }
  }

  // Deleting the node
  #deleteNode(value, currentNode) {
    if (currentNode === null) return null;

    if (value < currentNode.value) {
      currentNode.left = this.#deleteNode(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.#deleteNode(value, currentNode.right);
    } else {
      if (currentNode.left === null && currentNode.right === null) {
        currentNode = null;
      } else if (currentNode.left === null) {
        currentNode = currentNode.right;
      } else if (currentNode.right === null) {
        currentNode = currentNode.left;
      } else {
        let subTreeMin = this.minValue(currentNode.right);
        currentNode.value = subTreeMin;
        currentNode.right = this.#deleteNode(subTreeMin, currentNode.right);
      }
    }

    return currentNode;
  }

  deleteNode(value) {
    this.#deleteNode(value, this.root);
  }

  minValue(currentNode) {
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  // BFS traversal
  BFS() {
    let currentNode = this.root;
    let queue = [];
    let result = [];
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }

  // DFS Pre order
  DFSPreOrder() {
    let results = [];
    function traverse(currentNode) {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }

  // DFS Post order
  DFSPostOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    }
    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    let results = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(this.root);
    return results;
  }
}

let myBST = new BST();

myBST.rInsert(47);
myBST.rInsert(21);
myBST.rInsert(76);
myBST.rInsert(18);
myBST.rInsert(27);
myBST.rInsert(52);
myBST.rInsert(82);

// console.log('BST Contains 27:');
// console.log(myBST.rContains(27));

// console.log('\nBST Contains 17:');
// console.log(myBST.rContains(17));

let res = myBST.DFSInOrder();

console.log(res);

// let myBST = new BST();
// myBST.rInsert(2);
// myBST.rInsert(1);
// myBST.rInsert(3);

// console.log('\n Before deleting the node (2)');
// console.log(JSON.stringify(myBST));
// console.log('----------------------------------');
// console.log('Root : ', myBST.root.value);
// console.log('Root->left : ', myBST.root.left.value);
// console.log('Root->right : ', myBST.root.right.value);

// myBST.deleteNode(2);

// console.log('\n After deleting the node (2)');
// console.log('----------------------------------');
// console.log('Root : ', myBST.root.value);
// console.log('Root->left : ', myBST.root.left.value);
// console.log('Root->right : ', myBST.root.right);
