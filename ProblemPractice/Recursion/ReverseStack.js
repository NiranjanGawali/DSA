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

function insertAtBottom(stack, temp) {
  if (stack.isEmpty()) {
    stack.push(temp);
    return;
  }

  let val = stack.pop();
  insertAtBottom(stack, temp);
  stack.push(val);
}

function reverseStack(stack) {
  console.log('In REVERSE STACK function....');
  if (stack.isEmpty()) {
    return;
  }

  let temp = stack.pop();

  reverseStack(stack);
  insertAtBottom(stack, temp);
}

console.log('Before : ', stack);

reverseStack(stack);

console.log('After : ', stack);
