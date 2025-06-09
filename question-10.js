let arr = [5, 1, 8, 6, 3];
let n = arr.length;
let saveAns = arr.sort((a, b)=>{
    return a - b;
})

console.log(saveAns[n-2]);
