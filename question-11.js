let arr = [4, 2, 9, 7, 1];
let n= arr.length
let min = arr[0];
// let saveAns = arr.sort((a, b)=>{      METHOD 1
//     return a - b;
// })

// console.log(saveAns[0])

for(let i = 0; i<n; i++){ // METHOD 2
    if(min>=arr[i]){
        min = arr[i]
    }
}

console.log(min)