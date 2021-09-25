//assuming number to be non-negative integer
function findFactorialRecursive(number){
    if(number === 0){
        return 1;
    } else {
        return number*findFactorialRecursive(number-1);
    }
}

console.log(findFactorialRecursive(4));
console.log(findFactorialRecursive(5));
console.log(findFactorialRecursive(3));
console.log(findFactorialRecursive(0));