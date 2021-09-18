class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value){
        const newNode = new Node(value);
        
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else {
            let holdingPointer = this.top;
            this.top = newNode;
            newNode.next = holdingPointer;
        }

        this.length++;
        return this;
    }

    peek(){
        return this.top;
    }

    pop(){
        if(!this.top){
            return null;
        }
        let holdingPointer = this.top;
        this.top = holdingPointer.next;
        this.length--;
        if(this.length === 0){
            this.bottom = this.top;
        }
        return holdingPointer;
    }

    isEmpty(){
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push('Arti');
myStack.push('Anjana');
myStack.push('Ritvan');
myStack.push('Aarush');
myStack.push('Vijay');

myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack.peek());
