class CrazyQueue {
    constructor(){
        this.first = [];
        this.last = [];
    }

    enqueue(value){
        const length = this.first.length;
        for(let i = 0; i < length; i++){
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        return this;
    }

    dequeue(){
        const length = this.last.length;
        for(let i = 0; i < length; i++){
            this.first.push(this.last.pop());
        }
        this.first.pop();
        return this;
    }

    peek(){
        if(this.last.length > 0){
            return this.last[0];
        }

        return this.first[this.first.length - 1];
    }

    isEmpty(){
        return this.last.length === 0 && this.first.length === 0 ;
    }

}

const stackQueue = new CrazyQueue();
console.log(stackQueue.isEmpty());
stackQueue.enqueue('tom');
stackQueue.enqueue('roy');
stackQueue.enqueue('samir');
stackQueue.enqueue('vijay');

console.log(stackQueue);
stackQueue.dequeue();
console.log(stackQueue);
stackQueue.enqueue('tom');
console.log(stackQueue);
console.log(stackQueue.peek());
console.log(stackQueue.isEmpty());