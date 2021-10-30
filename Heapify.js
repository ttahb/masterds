// A good read on complexity - https://stackoverflow.com/questions/9755721/how-can-building-a-heap-be-on-time-complexity
// Heapify - A faster method to create a heap.
// Given an array , create a Max Heap using heapify algorithm.
// e.g [2,3,7,6,9,5,10];
// Application - Priority Queues
function heapify(array){

    let len = array.length;
    for(let i=len-1; i >= 0;i--){
        let element = array[i];
        let j = i;
        while(left(j)<len){
            let maxIndex = compareLeftAndRightChild(array,j);

            if(element < array[maxIndex] ){
                array[j] = array[maxIndex];
                j = maxIndex;
            } else {
                break;
            }
        }
        array[j] = element;
    }

    return array;
}

function compareLeftAndRightChild(array,i){
    if(array[left(i)] > array[right(i)]){
        return left(i);
    }
    return right(i);
}

function left(i){
    return 2*i+1;
}

function right(i){
    return 2*i+2;
}

let user_array = [2,3,7,6,9,5,10];
heapify(user_array);
console.log(user_array);