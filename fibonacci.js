// Fobonacci program
// 0 1 1 2 3 5 8 13 21 44
function fibonacciIterative(n) {
    let arr = [0, 1];
    for (let i = 2; i < n+1; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr[n];
}

console.log(fibonacciIterative(8));

function fibonacciRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}

console.log(fibonacciRecursive(8));
