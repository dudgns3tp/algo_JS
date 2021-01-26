class PriorityQueue {
  constructor() {
    this.store = [];
  }

  enqueue(item) {
    this.store.push(item);
  }

  dequeue() {
    let entry = 0;
    this.store.forEach((_, index) => {
      if (this.store[entry].score < this.store[index].score) {
        entry = index;
      }
    });
    return this.store.splice(entry, 1);
  }
}

class Student {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const priorityQueue = new PriorityQueue();
const pensoo = new Student("pengsoo", 1);
const kim = new Student("kin", 51);
const ryu = new Student("Ryu", 32);

priorityQueue.enqueue(pensoo);
priorityQueue.enqueue(kim);
priorityQueue.enqueue(ryu);

console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
