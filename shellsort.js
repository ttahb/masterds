const numbers = [9,8,3,7,5,6,4,1,10];

function shellsort(array){

    let len  = array.length;
    let interval = Math.floor(len/2);

    while(interval >= 1){
        for(let i = interval; i < len; i++){
            let temp = array[i];
            let j;

            for(j = i-interval; j>=0 && array[j] > temp; j = j-interval){
                array[j+interval] = array[j];
            }

            array[j+interval] = temp;
        }
        interval = Math.floor(interval/2);
    }
}

shellsort(numbers);

console.log(numbers);