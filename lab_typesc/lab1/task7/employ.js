"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    age;
    salary;
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Developer extends Employee {
    getAnnualBonus() {
        return this.salary * 0.10;
    }
    pay() {
        console.log(`${this.name} (Developer) отримав зарплату ${this.salary} + бонус ${this.getAnnualBonus()}`);
    }
}
class Manager extends Employee {
    getAnnualBonus() {
        return this.salary * 0.20;
    }
    pay() {
        console.log(`${this.name} (Manager) отримав зарплату ${this.salary} + бонус ${this.getAnnualBonus()}`);
    }
}
const employees = [
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
        emp.pay();
    }
});
//# sourceMappingURL=employ.js.map