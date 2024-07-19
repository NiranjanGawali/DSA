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

function insert(stack, temp) {
  if (stack.size() === 0 || stack.peek() < temp) {
    stack.push(temp);
    return;
  }

  let val = stack.pop();
  insert(stack, temp);
  stack.push(val);
}

function sort(stack) {
  if (stack.isEmpty()) {
    return;
  }

  let temp = stack.pop();

  sort(stack);
  insert(stack, temp);
}

const stack = new Stack();
stack.push(9);
stack.push(0);
stack.push(1);
stack.push(4);
stack.push(90);
stack.push(67);
stack.push(2);
stack.push(120);

console.log('Before stack sort: ');
console.log(stack.print());

console.log('After stack sort');

sort(stack);

console.log(stack.print());
