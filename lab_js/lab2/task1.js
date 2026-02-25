let size = 15;
let arr = [size];
for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100);
    console.log(arr[i]);}

function getMinMax(arr) {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < size; i++) {
        if (arr[i] <min){
            min = arr[i];
        }
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return {min, max};
}
console.log(getMinMax(arr));

function compareByProps(obj1, obj2) {
  return obj1.name === obj2.name &&
         obj1.age === obj2.age;
}

const a = { name: "Misha", age: 18 };
const b = { name: "Misha", age: 20 };

console.log(compareByProps(a, b)); 