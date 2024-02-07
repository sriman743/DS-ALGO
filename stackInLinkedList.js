// stacks
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    
    printList() {
        let currentNode = this.top;
        let arr = [];
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
    
    peek() {
        return this.top;
    }
    
    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
    
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(15);
myStack.push(20);
myStack.pop();
console.log(myStack.printList());
