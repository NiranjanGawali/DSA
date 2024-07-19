// Delete the middle element from the stack
class Stack {
  constructor() {
    this.items = [];
  }

  push(elt) {
    this.items.push(elt);
  }

  // Remove and return the top element of the stack
  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.items.pop();
  }

  // Return the top element of the stack without removing it
  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }

  // Print the stack
  print() {
    if (this.isEmpty()) {
      console.log('Stack is empty');
    } else {
      console.log(this.items);
    }
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

function deleteMiddleElement(stack, k) {
  if (stack.size() === k) {
    stack.pop();
    return;
  }

  let temp = stack.pop();
  deleteMiddleElement(stack, k);
  stack.push(temp);
}

console.log('BEFORE  : ', stack);

let middleElement = Math.floor(stack.size() / 2) + 1;
deleteMiddleElement(stack, middleElement);

console.log('AFTER  : ', stack);
