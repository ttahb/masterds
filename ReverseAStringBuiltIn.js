function reverse(str){
    let strArr = str.split("");
    let newArr = strArr.reverse();
    return newArr.join("");
}

console.log(reverse("hello"));