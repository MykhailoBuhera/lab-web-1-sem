let a = Math.floor(Math.random() * 30);
console.log(a);

function checkRange(a) {
    let b;
if (a > 10 && a < 20) {
        b = !false;
    } else {
        b = !true;
    }

if (b) {
      return console.log("The number is in the range 10-20.");
    } else {
        return console.log("The number is not in the range 10-20.");
    }
}
checkRange(a);