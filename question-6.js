let str = "Programming";
let vowelArr = ["a","e","i","o","u"];
let strArr = str.toLowerCase().split("")
let n = strArr.length;
let vowelCount = 0;
for(let i = 0; i < n; i++){
    vowelArr.forEach((item)=>{
        if(strArr[i] == item){
            vowelCount++;
        }
    })    
}
console.log(vowelCount)