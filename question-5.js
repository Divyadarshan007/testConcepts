let arr = [1,2,3,4,5,6]
let n = arr.length;
let odd = 0;
let even = 0;
for(let i = 0; i< n; i++){
    if(arr[i]%2==0){
        even++;

    }else{
        odd++
    }
}

console.log(even, odd);
