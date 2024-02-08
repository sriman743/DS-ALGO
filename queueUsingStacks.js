// Implement Queue using stacks
class MyQueue {
    private arr = [];
    constructor() {
        this.arr = [];
    }

    push(x: number): void {
        // put element from front of array
        this.arr.unshift(x);
    }

    pop(): number {
        // remove element arom array and returns it.
        return this.arr.pop();
    }

    peek(): number {
        // return the last element of an array
        return this.arr[this.arr.length-1];
    }

    empty(): boolean {
        // check if stack is empty and return boolean value
        return this.arr.length === 0;
    }
}
