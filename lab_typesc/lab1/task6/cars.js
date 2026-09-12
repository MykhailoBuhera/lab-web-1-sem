"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    brand;
    model;
    year;
    fuelLevel = 100;
    constructor(brand, model, year // protected, не private — інакше похідні класи не дістануть
    ) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    drive() {
        this.fuelLevel -= 10;
    }
}
class Toyota extends Car {
    trunkVolume;
    constructor(model, year, trunkVolume) {
        super("Toyota", model, year);
        this.trunkVolume = trunkVolume;
    }
    getDescription() {
        this.drive();
        console.log(`${this.brand} ${this.model}, ${this.year}, багажник: ${this.trunkVolume}л, паливо: ${this.fuelLevel}%`);
    }
}
class Bmw extends Car {
    horsepower;
    constructor(model, year, horsepower) {
        super("BMW", model, year);
        this.horsepower = horsepower;
    }
    getDescription() {
        this.drive();
        console.log(`${this.brand} ${this.model}, ${this.horsepower} к.с., паливо: ${this.fuelLevel}%`);
    }
}
class Skoda extends Car {
    isDiesel;
    constructor(model, year, isDiesel) {
        super("Skoda", model, year);
        this.isDiesel = isDiesel;
    }
    getDescription() {
        this.drive();
        console.log(`${this.brand} ${this.model}, тип: ${this.isDiesel ? "дизель" : "бензин"}, паливо: ${this.fuelLevel}%`);
    }
}
const cars = [
    new Toyota("Corolla", 2020, 470),
    new Toyota("Camry", 2022, 520),
    new Bmw("X5", 2021, 340),
    new Bmw("320i", 2023, 184),
    new Skoda("Octavia", 2019, true),
    new Skoda("Fabia", 2020, false),
];
cars.forEach(car => car.getDescription());
//# sourceMappingURL=cars.js.map