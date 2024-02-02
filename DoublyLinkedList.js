class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}
class LinkedList {
	constructor(value) {
  	this.head = {
    	value: value,
        next: null,
        previous: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
  	const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    newNode.previous = this.tail;
    this.length++;
    return this;
  }
  
  prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.previous = newNode;
      this.head = newNode;
      this.length++;
      return this;
  }
  
  printList() {
      const array = [];
      let currentNode = this.head;
      while (currentNode !== null) {
          array.push(currentNode.value);
          currentNode = currentNode.next;
      }
      return array;
  }
  
  insert(index, value) {
   if (index >= this.length) {
       return this.append(value);
   }
   if (index === 0) {
       return this.prepend(value);
   }
   const newNode = new Node(value);
   const leader = this.traverseToIndex(index-1);
   const holdingPointer = leader.next;
   leader.next = newNode;
   newNode.previous = leader;
   newNode.next = holdingPointer;
   holdingPointer.previous = newNode;
   this.length++;
   return this;
  }
  
  traverseToIndex(index) {
      let counter = 0;
      let currentNode = this.head;
      while (counter !== index) {
          currentNode = currentNode.next;
          counter++;
      }
      return currentNode;
  }
  
  remove(index) {
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      if (index+1 === this.length) {
          leader.next = null;
          this.length--;
          return this;
      }
      const holdingPointer = unwantedNode.next;
      leader.next = holdingPointer;
      holdingPointer.previous = leader;
      this.length--;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
// console.log(myLinkedList);
