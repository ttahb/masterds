//Given a number n, return the index value of that number in fibonacci series
//e.g. if n = 2, as per the fibonaaci  series 0,1,1,2,3,...   it should return index value at 2 that is return 1. If n = 3, return 2
function fibonacciIterative(n){
    if(n < 2){
        return n;
    } else {
        let n1 =0;
        let n2 = 1;
        let temp = 0;

        for(let i = 1; i < n; i++){
            temp = n1;
            n1 = n2;
            n2 = temp+n2;
        }

        return n2;
    }
}

console.log(fibonacciIterative(0));
console.log(fibonacciIterative(2));
console.log(fibonacciIterative(3));
console.log(fibonacciIterative(6));
console.log(fibonacciIterative(8));