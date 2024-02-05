
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
	constructor(value) {
  	this.head = {
    	value: value,
        next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
  	const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
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
   newNode.next = holdingPointer;
   this.length++;
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
      leader.next = unwantedNode.next;
      // OR
    //   const holdingPointer = this.traverseToIndex(index+1);
    //   leader.next = holdingPointer;
      this.length--;
  }
  
      reverse() {
      if (!this.head.next) {
        return this.head;
      }
      let current = this.head;
      let prev = null;
      let next = null;
      while (current !== null) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
      }
      this.head = prev;
      return this.printList();
      
      //        OR      //
    //   let first = this.head;
    //   this.tail = this.head;
    //   let second = first.next;
      
    //   while(second) {
    //     const temp = second.next;
    //     second.next = first;
    //     first = second;
    //     second = temp;
    //   }
  
    //   this.head.next = null;
    //   this.head = first;
    //   return this.printList();
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
// myLinkedList.remove(2)
myLinkedList.reverse()
console.log(myLinkedList.printList());
