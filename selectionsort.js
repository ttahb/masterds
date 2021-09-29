const numbers = [99,44,6,2,1,5,63,87,283,4,0]

function selectionSort(array){

    let len = array.length;
    for(let i=0; i<len-1; i++){
    
       let min = array[i];
       let index;
       for(let j=i+1; j<len;j++){
            
            if(array[j] < min){
                min = array[j];
                index = j;
            }
       }
       let temp = array[i];
       array[i] = min;
       array[index] = temp;
    }
    return array;
}

selectionSort(numbers);
console.log(numbers);