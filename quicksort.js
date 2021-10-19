const numbers = [3,0,1,8,7,2,5,4,9,6];

function quicksort(array){
    recQuickSort(array, 0, array.length - 1)
}

function recQuickSort(array, left, right){
    
    // if array size is <= 1
    if(right - left <= 0){
        return;
    } else {
        let pivot = array[right];   // considering pivot to be rightmost item.

        let partitionIndex = partition(array, left, right, pivot);
        recQuickSort(array, left, partitionIndex -1);
        recQuickSort(array, partitionIndex+1, right);
    }
}

function partition(array, left, right, pivot){
    let leftPtr = left - 1;
    let rightPtr = right;
    while(true){
        while(leftPtr < right && array[++leftPtr] < pivot );  // increment leftPtr until we find bigger item from left side
        while(rightPtr > left && array[--rightPtr] > pivot);  // decrement rightPtr until we find a smaller item on the right side.

        if(leftPtr >= rightPtr)
            break;
        else {
            swap(array, leftPtr, rightPtr);
        }
    }
    swap(array,leftPtr,right);  
    return leftPtr; // parititonIndex - value at this index in the array is now at its correct position and sorted.
}

function swap(array,a,b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}


quicksort(numbers)
console.log(numbers);