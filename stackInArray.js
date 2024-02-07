// stacks in array

class Stack {
    constructor() {
        this.array = [];
    }
    
    
    peek() {
        if (this.array.length > 0) {
            return this.array[this.array.length - 1];
        }
    }
    
    push(value) {
        this.array.push(value);
        return this;
    }
    
    pop() {
        this.array.pop();
        return this;
    }
}

const myStack = new Stack();
myStack.push(10);
myStack.push(15);
myStack.push(20);
myStack.pop();
console.log(myStack);
