const numbers = [6,5,3,1,8,7,2,4];

function bubbleSort(array){
   let flag = false;
   
   do {
    flag = false;
    for(let i=0; i<array.length-1;i++){
        let temp = array[i];
        if(array[i]>array[i+1]){
            array[i] = array[i+1];
            array[i+1] = temp;
            flag = true;
        }
    }
   } while(flag);
    
}

bubbleSort(numbers);
console.log(numbers);
