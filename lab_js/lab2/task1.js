let max = -Infinity;
let min = Infinity;
let size = 15;
let arr = [size];
for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100);
    console.log(arr[i]);}

for (let i = 0; i < size; i++) {
    if (arr[i] <min){
        min = arr[i];
    }}
console.log("Min: " + min);

for (let i = 0; i < size; i++) {
    if(arr[i]>max){
        max = arr[i];
    }}
console.log("Max: " + max);