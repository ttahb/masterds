const numbers = [6,5,3,1,8,7,2,4];

function insertionSort(array){
    let len = array.length;

    for(let i=1;i<len;i++){
        let temp = array[i];
        let j;
        for(j = i-1; j>=0 && array[j]>temp;j--){
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
}

insertionSort(numbers);

console.log(numbers);