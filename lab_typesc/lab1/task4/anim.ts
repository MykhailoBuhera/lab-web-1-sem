interface Animal {
  name: string;
  legs?: number;        // опціонально — у риби, наприклад, немає ніг
  canFly?: boolean;      // не всі тварини літають
  move(): void;
}

class Cat implements Animal {
  name: string;
  legs: number = 4;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} біжить на чотирьох лапах`);
  }
}

class Bird implements Animal {
  name: string;
  legs: number = 2;
  canFly: boolean;

  constructor(name: string, canFly: boolean = true) {
    this.name = name;
    this.canFly = canFly;
  }

  move(): void {
    if (this.canFly) {
      console.log(`${this.name} летить у небі`);
    } else {
      console.log(`${this.name} ходить, бо не вміє літати`);
    }
  }
}

class Fish implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(): void {
    console.log(`${this.name} плаває у воді`);
  }
}

const animals: Animal[] = [
  new Cat("Мурчик"),
  new Bird("Горобець"),
  new Bird("Страус", false),
  new Fish("Немо"),
];

animals.forEach(a => a.move());