// Queue using LinkedList
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    
    peek() {
        return this.first;
    }
    
    enqueue(value) {
        const newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    
    dequeue() {
        if (!this.first) {
            return null;
        } 
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

let myQueue = new Queue();
myQueue.enqueue('somu');
myQueue.enqueue('dudi');
myQueue.enqueue('Aju');
myQueue.dequeue();
console.log(myQueue);
