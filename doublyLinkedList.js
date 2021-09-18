class doublyLinkedList {
    constructor(value){
        this.head = {
            value:value,
            next:null,
            prev:null
        };

        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value:value,
            next:null,
            prev:null
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            value:value,
            next:null,
            prev:null
        }

       newNode.next = this.head;
       this.head.prev = newNode;
       this.head = newNode;
       this.length++;
    }

    insert(index, value){
        if(index >= this.length){
            this.append(value);
        }

        if(index <= 0){
            this.prepend(value);
        }

        let leader = this.traverseIndex(index -1);
        let follower = leader.next;
        let newNode = {
            value:value,
            next:null,
            prev:null
        }

        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this;
    }

    traverseIndex(index){
        let count = 0;
        let currentNode = this.head;
        while(count !== index){
            currentNode = currentNode.next;
            count++;
        }

        return currentNode;

    }

    remove(index){
        if(index == 0){
            let currentNode = this.head;
            this.head = currentNode.next;
            this.head.prev = null;
            this.length--;
            return this;
        }

        if(index == this.length-1){
            let currentNode = this.tail;
            this.tail = currentNode.prev;
            currentNode.prev = null;
            this.tail.next = null;
            this.length--;
            return this;
        }

        if(index >= this.length){
            return 'invalid index';
        }

        let currentNode = this.traverseIndex(index);
        let leader = currentNode.prev;
        let follower = currentNode.next;
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this;
    }

    print(){
        let currentNode = this.head;
        const array = [];
        while(currentNode !== null){
            array.push(currentNode);
            currentNode = currentNode.next;
        }
        
        return array;
    }
}

const newList = new doublyLinkedList(3);
newList.append(5);
newList.prepend(0);
newList.insert(1,99);
newList.remove(0);
console.log(newList.remove(3));
console.log(newList.print());