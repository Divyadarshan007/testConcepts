let str = "The quick brown fox jumps over the lazy dog";
let saveStr = str.trim().split(" ")
let n = saveStr.length
 let ans = saveStr[0].length;
 let longestStr ;
for(let i = 0; i < n; i++){
   if(saveStr[i].length >= ans){
    ans = saveStr[i].length;
        longestStr = saveStr[i]
        
        
   }
    
}
console.log(longestStr);
