// Given an array sort it through HeapSort in an increasing order
// e.g [7,3,2,6,9,5,4]
//  
// Step 1 - Create a Max Heap - increasing order  OR Min Heap for decreasing order. 
// Step 2 - Delete maximum element from heap one by one. And copy deleted element at free spot at the end of the array.
// Done.

function heapSort(array){
    createMaxHeap(array);    
    // Delete each element one by one, at copy max element at the end with each iteration.
    
    for(let heapSize = array.length; heapSize > 1; heapSize--){
        deleteFromMaxHeap(array, heapSize);
    }

    return array;
}

function deleteFromMaxHeap(array, heapSize){
    
    let max = array[0];                        // max item
    array[0] = array[heapSize-1];               // copy last item at initial index
    let i=0;                                   // now reorganise elements to create a heap
    let element = array[0];
    while(left(i) < heapSize-1){
        let maxIndex = compareLeftAndRightChild(array,i);
        if(element < array[maxIndex]){
            array[i] = array[maxIndex];
            i = maxIndex;
        } else {
            break;
        }
    }
    array[i] = element;                             
    array[heapSize-1] = max;                    // copy max element considered deleted from heap at last position.
    return array;
}

function compareLeftAndRightChild(array,i){
    if(array[left(i)] > array[right(i)]){
        return left(i);
    }
    return right(i);
}


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
 return array;
}


function parent(i){
    return Math.floor((i-1)/2);
}

function left(i){
    return 2*i+1;
}

function right(i){
    return 2*i+2;
}

//Driver code

let userHeap = [7,3,2,6,9,5,4];
heapSort(userHeap);
console.log(userHeap);
