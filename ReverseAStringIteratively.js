function reverse(str){
    let newStr = "" 
    // Start iterating over the str in reverse from last and add up new string
    for(let i=str.length-1; i >= 0; i--){
        newStr = newStr + str[i];
    }

    return newStr;
}

console.log(reverse("howdy"));
console.log(reverse("buisness"));