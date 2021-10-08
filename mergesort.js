const numbers = [6,5,3,1,8,7,2,9,4];

function mergeSort(array){
    if(array.length === 1){
        return array;
    }

    //Split array into right and left
    let mid = array.length/2;
    const left = array.slice(0,mid);
    const right = array.slice(mid);

    console.log('left:',left);
    console.log('right',right);

    return merge( mergeSort(left), mergeSort(right))
}

function merge(left, right){
    
    const newArr = [];
    let i = 0,j = 0;
   
    while(i<left.length && j<right.length){

        if(left[i]<right[j]){
            newArr.push(left[i]);
            i++;
        } else {
            newArr.push(right[j]);
            j++;
        }
    }

    // if(i == left.length){
    //     newArr.push(...right.slice(j));
    // } else {
    //     newArr.push(...left.slice(i));
    // }

   // return newArr;
    return newArr.concat(left.slice(i)).concat(right.slice(j));
}

const answer = mergeSort(numbers);
console.log(answer);