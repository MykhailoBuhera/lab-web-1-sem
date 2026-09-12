"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    pages;
    borrowed = false;
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    borrow() {
        this.borrowed = true;
        console.log(`Книга "${this.title}" (${this.pages} стор.) позичена`);
    }
}
class Magazine {
    title;
    author;
    issueNumber;
    borrowed = false;
    constructor(title, author, issueNumber) {
        this.title = title;
        this.author = author;
        this.issueNumber = issueNumber;
    }
    borrow() {
        this.borrowed = true;
        console.log(`Журнал "${this.title}" (випуск №${this.issueNumber}) позичений`);
    }
}
class DVD {
    title;
    author;
    durationMinutes;
    borrowed = false;
    constructor(title, author, durationMinutes) {
        this.title = title;
        this.author = author;
        this.durationMinutes = durationMinutes;
    }
    borrow() {
        this.borrowed = true;
        console.log(`DVD "${this.title}" (${this.durationMinutes} хв) позичений`);
    }
}
class Library {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    findItemByName(name) {
        return this.items.find(item => item.title === name);
    }
    listItems() {
        this.items.forEach(item => {
            console.log(`${item.title} — ${item.author}`);
        });
    }
}
const library = new Library();
const book = new Book("1984", "Джордж Орвелл", 328);
const magazine = new Magazine("National Geographic", "Редакція", 245);
const dvd = new DVD("Inception", "Крістофер Нолан", 148);
library.addItem(book);
library.addItem(magazine);
library.addItem(dvd);
console.log("Список елементів бібліотеки:");
library.listItems();
const found = library.findItemByName("1984");
found?.borrow();
const notFound = library.findItemByName("Невідома книга");
console.log(notFound === undefined ? "Елемент не знайдено" : "Знайдено");
//# sourceMappingURL=lib.js.map