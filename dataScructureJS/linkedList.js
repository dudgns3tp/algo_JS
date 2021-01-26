class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node("head");
  }

  find(item) {
    let currNode = this.head;
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement, item) {
    let newNode = new Node(newElement);
    let currNode = this.find(item);
    newNode.next = currNode.next;
    currNode.next = newNode;
  }

  display() {
    let currNode = this.head;
    let lists = [];
    while (!(currNode.next == null)) {
      lists.push(currNode.next.element);
      currNode = currNode.next;
    }
    console.log(lists.join(" -> "));
  }

  findPrevious(item) {
    let currNode = this.head;
    while (!(currNode.head === null) && currNode.next.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  remove(item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.insert("Seoul", "head");
linkedList.insert("Daejone", "Seoul");
linkedList.insert("DaeGoo", "Daejone");
linkedList.insert("Busan", "DaeGoo");
linkedList.display();
linkedList.remove("DaeGoo");
linkedList.display();
