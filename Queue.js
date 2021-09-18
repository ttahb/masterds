class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            let holdingPointer = this.last;
            this.last = newNode;
            holdingPointer.next = newNode;
        }
        this.length++;
    }

    dequeue(){
        if(!this.first){
            return null;
        }
        let holdingPointer = this.first;
        if(this.first === this.last){
            this.first = null;
            this.last = null;
        } else {
            this.first = holdingPointer.next;
        }
        this.length--;
        return holdingPointer;
    }

    peek(){
        return this.first;
    }

    isEmpty(){
        return this.length === 0;
    }
}

const myqueue = new Queue();
console.log(myqueue.peek());
myqueue.enqueue('Joy');
myqueue.enqueue('Matt');
myqueue.enqueue('Pavel');
myqueue.enqueue('Samir');
console.log(myqueue.isEmpty());
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
myqueue.dequeue();
console.log(myqueue.peek());
console.log(myqueue.isEmpty());
