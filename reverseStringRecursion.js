function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str) {
    if (str === '') {
        return '';
    } else {
        return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverseStringRecursive("yoyo master"));
