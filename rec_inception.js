let counter = 0;
function inception(){
    if(counter > 3){
        return 'hello!';
    }

    counter++;
    return inception();
}

console.log(inception());    