class Stack {
  constructor() {
    this.store = [];
  }
  push(item) {
    this.store.push(item);
  }

  pop() {
    return this.store.pop();
  }

  length() {
    return this.store.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(4);
console.log(stack.length());
