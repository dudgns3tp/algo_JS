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

class Queue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(item) {
    this.inStack.push(item);
  }

  dequeue() {
    if (this.inStack.length() === 0) {
      return false;
    }

    if (this.inStack.length() === 1) {
      return this.inStack.pop();
    }

    while (this.inStack.length() !== 1) {
      this.outStack.push(this.inStack.pop());
    }

    const item = this.inStack.pop();

    while (this.outStack.length()) {
      this.inStack.push(this.outStack.pop());
    }

    return item;
  }

  qsize() {
    return this.inStack.length();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.qsize());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
