let max = -Infinity;
let min = Infinity;
let size = 15;
let arr = [size];
for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100);
    console.log(arr[i]);}
function getMinMax(arr) {
    for (let i = 0; i < size; i++) {
        if (arr[i] <min){
            min = arr[i];
        }
    }

    for (let i = 0; i < size; i++) {
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return {min, max};
}
console.log(getMinMax(arr));