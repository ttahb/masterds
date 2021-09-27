//The depth of the recursion is equal to the length of the String. 
//This solution is not the best one and will be really slow if the String is very long and the stack size is of major concern.
function reverse(str){
    if(str == ""){
        return "";
    }
    else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse("vijay"));
console.log(reverse("hello"));