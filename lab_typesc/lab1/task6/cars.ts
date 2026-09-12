abstract class Car {
  protected fuelLevel: number = 100;

  constructor(
    public readonly brand: string,
    protected model: string,
    protected year: number   // protected, не private — інакше похідні класи не дістануть
  ) {}

  abstract getDescription(): void;

  protected drive(): void {
    this.fuelLevel -= 10;
  }
}

class Toyota extends Car {
  constructor(model: string, year: number, private trunkVolume: number) {
    super("Toyota", model, year);
  }

  getDescription(): void {
    this.drive();
    console.log(
      `${this.brand} ${this.model}, ${this.year}, багажник: ${this.trunkVolume}л, паливо: ${this.fuelLevel}%`
    );
  }
}

class Bmw extends Car {
  constructor(model: string, year: number, private horsepower: number) {
    super("BMW", model, year);
  }

  getDescription(): void {
    this.drive();
    console.log(
      `${this.brand} ${this.model}, ${this.horsepower} к.с., паливо: ${this.fuelLevel}%`
    );
  }
}

class Skoda extends Car {
  constructor(model: string, year: number, private isDiesel: boolean) {
    super("Skoda", model, year);
  }

  getDescription(): void {
    this.drive();
    console.log(
      `${this.brand} ${this.model}, тип: ${this.isDiesel ? "дизель" : "бензин"}, паливо: ${this.fuelLevel}%`
    );
  }
}
const cars: Car[] = [
  new Toyota("Corolla", 2020, 470),
  new Toyota("Camry", 2022, 520),
  new Bmw("X5", 2021, 340),
  new Bmw("320i", 2023, 184),
  new Skoda("Octavia", 2019, true),
  new Skoda("Fabia", 2020, false),
];

cars.forEach(car => car.getDescription());