let a = Math.floor(Math.random() * 30);

console.log(a);
let b;
    if (a > 10 && a < 20) {
        b = !false;
    } else {
        b = !true;
    }

    if (b) {
        console.log("The number is in the range 10-20.");
    } else {
        console.log("The number is not in the range 10-20.");
    }
