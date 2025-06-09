let arr = [12, 5, 67, 23, 89]
let max = arr[0];
arr.forEach((num)=>{
    if(num >= max){
        max = num; 
    }
})
console.log(max)