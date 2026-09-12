abstract class Employee {
  constructor(
    protected name: string,
    protected age: number,
    protected salary: number
  ) {}

  abstract getAnnualBonus(): number;
}

interface Payable {
  pay(): void;
}

class Developer extends Employee implements Payable {
  getAnnualBonus(): number {
    return this.salary * 0.10;
  }

  pay(): void {
    console.log(
      `${this.name} (Developer) отримав зарплату ${this.salary} + бонус ${this.getAnnualBonus()}`
    );
  }
}

class Manager extends Employee implements Payable {
  getAnnualBonus(): number {
    return this.salary * 0.20;
  }

  pay(): void {
    console.log(
      `${this.name} (Manager) отримав зарплату ${this.salary} + бонус ${this.getAnnualBonus()}`
    );
  }
}

const employees: Employee[] = [
  new Developer("Олег", 28, 30000),
  new Developer("Настя", 25, 28000),
  new Manager("Ігор", 35, 45000),
];

let totalBonus = 0;
for (const emp of employees) {
  totalBonus += emp.getAnnualBonus();
}

console.log(`Загальна сума річних бонусів: ${totalBonus}`);

employees.forEach(emp => {
  if ("pay" in emp) {
    (emp as Payable).pay();
  }
});