//Assuming we are given a max heap already, and we are given a task to insert a new element
let heapArray = [9,8,7,3,2,6];  
//       9
//      / \
//    8     7
//   / \   /
//  3   2  6
//
// Given heap , and suppose element to be inserted is 10.

function insertInHeap(heapArray,element){
   
    // insert at the new element at end of the heap
    heapArray.push(element);
    let len = heapArray.length;
    let i= len - 1;
    // compare the inserted element to its parent and move the parent down if its less.
    while(i > 0 && element > heapArray[parent(i)]){
        heapArray[i] = heapArray[parent(i)];
        i = parent(i);    // move i to its parent for every iteration
    }

    // finally copy the new element at the iTH index.
    heapArray[i] = element;
    return heapArray;
}


let array =  [7,3,2,6,9,5,4];
// Given an array, turn it to a max heap
// e.g. an array [7,3,2,6,9,5,4]
//          7                              9
//         / \                            / \
//        3   2          =====>          7   5
//       / \  / \                       / \  / \
//      6  9  5  4                     3   6 2  4
//
//
function createMaxHeap(array){
    let len = array.length;

    for(let i=1; i < len; i++){

        let element = array[i];
        let j = i;
        while(j > 0 && element > array[parent(j)] ){
            array[j] = array[parent(j)];
            j = parent(j);
        }
        array[j] = element;
    }

}

function parent(i){
    return Math.floor((i-1)/2);
}


insertInHeap(heapArray,10);

console.log(heapArray);

createMaxHeap(array);

console.log(array);