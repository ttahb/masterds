class Stack {
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length-1];
    }

    push(value){
        this.array.push(value);
    }

    pop(){
        let top = this.array[this.array.length-1];
        this.array[this.array.length-1] = null;
        this.array.length--;
        return top;
    }
}

const myStack  = new Stack();

myStack.push('Arti');
myStack.push('Anjana');
myStack.push('Ritvan');
myStack.push('Aarush');
myStack.push('Vijay');



//console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());


