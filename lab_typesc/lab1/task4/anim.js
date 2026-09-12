"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cat {
    name;
    legs = 4;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} біжить на чотирьох лапах`);
    }
}
class Bird {
    name;
    legs = 2;
    canFly;
    constructor(name, canFly = true) {
        this.name = name;
        this.canFly = canFly;
    }
    move() {
        if (this.canFly) {
            console.log(`${this.name} летить у небі`);
        }
        else {
            console.log(`${this.name} ходить, бо не вміє літати`);
        }
    }
}
class Fish {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} плаває у воді`);
    }
}
const animals = [
    new Cat("Мурчик"),
    new Bird("Горобець"),
    new Bird("Страус", false),
    new Fish("Немо"),
];
animals.forEach(a => a.move());
//# sourceMappingURL=anim.js.map