let str = "madak";
let strArr = str.trim().toLowerCase().split("");

if(str === strArr.reverse().join("")){
    console.log("it's a palindrome");
}else{
    console.log("it's not a palindrome");
}

