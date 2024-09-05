/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 
Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]
Output
[null,null,null,null,-3,null,0,-2]
Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:
-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.

https://leetcode.com/problems/min-stack/description/?envType=study-plan-v2&envId=top-interview-150

*/

// One way to implement the stack is below.

/*
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.minValue = [];
  }
}

class MinStack {
  constructor(value) {
    let newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
    this.minValue = [];
  }

  printStack() {
    let newTop = this.top;
    console.log('Elements of stack are : ');
    while (newTop != null) {
      console.log(newTop.value);
      newTop = newTop.next;
    }
  }

  push(value) {
    let newNode = new Node(value);

    if (
      this.minValue.length == 0 ||
      this.minValue[this.minValue.length - 1] > newNode.value
    ) {
      this.minValue.push(newNode.value);
    }

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return undefined;
    let currentTop = this.top;

    if (currentTop.value == this.minValue[this.minValue.length - 1]) {
      this.minValue.pop();
    }

    this.top = this.top.next;
    this.length--;
    return currentTop;
  }

  top() {
    if (!this.top) return undefined;
    return this.top.value;
  }

  getMin() {
    // let min = Number.MAX_SAFE_INTEGER;
    // let currentTop = this.top;
    // while (currentTop) {
    //   if (currentTop.value < min) {
    //     min = currentTop.value;
    //   }
    //   currentTop = currentTop.next;
    // }
    // return min;
    return this.minValue[this.minValue.length - 1];
  }
}

*/

// Another way to create stack implementation

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.length = 0;
  }

  push(value) {
    this.stack.push(value);

    // Storing variables such at the top position, smallest element will be there
    if (
      this.minStack.length == 0 ||
      value < this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }

    this.length++;
    return this.stack;
  }

  pop() {
    let poppedElement = this.stack.pop();

    // Removing the elements minStack array, if the same element we are removing from stack
    if (poppedElement === this.minStack[minStack.length - 1]) {
      this.minStack.pop();
    }

    return poppedElement;
  }

  topValue() {
    return this.stack[this.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

let minStack = new MinStack();
minStack.push(1);
minStack.push(2);
console.log(minStack.push(3));
console.log(minStack.pop());
console.log(minStack.getMin());

/*

Time and Space Complexity
Time Complexity:

push(): O(1) — because we're just adding to both the stack and the minValue stack.
pop(): O(1) — popping from both stacks if necessary.
topValue(): O(1) — directly returning the top value.
getMin(): O(1) — directly accessing the last element of minValue.
Space Complexity: O(n), where n is the number of elements in the stack. We are storing each element in both the stack and potentially the minValue stack.

This implementation meets the O(1) time complexity requirement for all operations (push, pop, top, and getMin).

*/
