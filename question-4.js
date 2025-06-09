let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let temp = [];
let count = 0;
for (let i = n-1; i >= 0; i--) {
    temp[count] = arr[i]
    count++;
}

console.log(temp);
