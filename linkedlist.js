class linkedlist {
    constructor(value){
        this.head = {
            value:  value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = {
            value:value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value){
        const newNode = {
            value: value,
            next: null
        };

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;

    }

    printList(){
        let currentNode = this.head;
        const array = [];
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    
    traverseIndex(index){
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
    

    insert(index, value){

        // if index is greater than the length
        if(index >= this.length){
            this.append(value);
        }

        //if index is equal to zero
        if(index == 0){
            this.prepend(value);
        }

        const newNode = {
            value:value,
            next: null
        };

        let leaderNode = this.traverseIndex(index-1);
        const leaderNodeNext = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = leaderNodeNext;
        this.length++;
        return this.printList();
    }

    remove(index){
        if(index >= this.length || index < 0){
            return "enter correct index";
        }

        if(index == 0){
            this.head = this.head.next;
            return;
        }
        10 - 1- 5 - 16  

        let leaderNode = this.traverseIndex(index -1);
        const unwantedNode = leaderNode.next;
        leaderNode.next = unwantedNode.next;
        this.length--;
        return this.printList();
    }

    reverse(){
        //if size of list is equal to 1
        if(!this.head.next){
            return this;
        }

        this.tail = this.head;
        let first = this.head;
        let second = first.next;

        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }

        this.head.next = null;
        this.head = first;
        return this;
    }

    
}

const myLinkedList = new linkedlist(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.insert(1,99);
// console.log(myLinkedList.printList());
// myLinkedList.remove(2);
// console.log(myLinkedList.printList());
// myLinkedList.remove(0);
//console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
