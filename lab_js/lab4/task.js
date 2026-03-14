function displayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// ЗАВДАННЯ 1: Масив фруктів
let fruits = ["яблуко", "банан", "апельсин", "груша"];
let newFruit = "ананас";

function deleteLastFruit(arr) {
    arr.pop();
    return arr;
}

function addFruitToStart(arr, item) {
    arr.unshift(item);
    return arr;
}

function sortFruitsReverse(arr) {
    arr.sort();
    arr.reverse();
    return arr;
}

function findIndexOfFruit(arr, item) {
    return arr.indexOf(item);
}

console.log("Завдання 1");
console.log("Початковий масив фруктів");
displayElements(fruits);
console.log("\nВидалення останнього фрукта");
deleteLastFruit(fruits);
displayElements(fruits);
console.log("\nДодавання нового фрукта на початок");
addFruitToStart(fruits, newFruit);
displayElements(fruits);
console.log("\nСортування фруктів у зворотньому порядку");
sortFruitsReverse(fruits);
displayElements(fruits);
console.log("\nІндекс фрукта яблуко");
console.log(findIndexOfFruit(fruits, 'яблуко'));
console.log("\n");


// ЗАВДАННЯ 2: Масив кольорів
let colors = ["червоний", "темно-синій", "зелений", "синій", "жовтий"];

function findLongestColor(arr) {
    let longest = arr;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > longest.length) longest = arr[i];
    }
    return longest;
}

function findShortestColor(arr) {
    let shortest = arr;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length < shortest.length) shortest = arr[i];
    }
    return shortest;
}

function filterBlueColors(arr) {
    return arr.filter(color => color.includes("синій"));
}

function joinColorsWithComma(arr) {
    return arr.join(", ");
}

console.log("Завдання 2");
console.log("Початковий масив кольорів");
displayElements(colors);
console.log("\nНайдовший колір", findLongestColor(colors));
console.log("Найкоротший колір", findShortestColor(colors)); // помилка методичка найдовший найдовший
console.log("\nВидалення всіх кольорів, крім тих, що містять синій");
let blueColors = filterBlueColors(colors);
displayElements(blueColors);
console.log("\nОб'єднання кольорів у рядок");
console.log(joinColorsWithComma(blueColors));
console.log("\n");



// ЗАВДАННЯ 3: Масив працівників

let workers = [
    { name: "Петро", age: 30, position: "розробник" },
    { name: "Анна", age: 25, position: "менеджер" },
    { name: "Іван", age: 40, position: "розробник" }
];
let newWorker = { name: "Олена", age: 28, position: "дизайнер" };

function sortWorkersByName(arr) {
    arr.sort((a, b) => a.name.localeCompare(b.name));
    return arr;
}

function findDevelopers(arr) {
    return arr.filter(worker => worker.position === "розробник");
}

function deleteWorkersByAge(arr, maxAge) {
    return arr.filter(worker => worker.age <= maxAge);
}

function addWorker(arr, worker) {
    arr.push(worker);
    return arr;
}

console.log("Завдання 3");
console.log("Початковий масив працівників");
displayElements(workers);
console.log("\nСортування за алфавітом");
sortWorkersByName(workers);
displayElements(workers);
console.log("\nПрацівники з посадою розробник");
let developers = findDevelopers(workers);
displayElements(developers);
console.log("\nВидалення працівників старших за 35 років");
workers = deleteWorkersByAge(workers, 35);
displayElements(workers);
console.log("\nДодавання нового працівника");
addWorker(workers, newWorker);
displayElements(workers);
console.log("\n");


// ЗАВДАННЯ 4: Масив студентів
let students = [
    { name: "Марія", age: 20, course: 2 },
    { name: "Олексій", age: 21, course: 3 },
    { name: "Дмитро", age: 19, course: 1 }
];
let newStudent = { name: "Віктор", age: 22, course: 4 };

function deleteStudentByName(arr, studentName) {
    return arr.filter(student => student.name !== studentName);
}

function addStudent(arr, student) {
    arr.push(student);
    return arr;
}

function sortStudentsByAgeDesc(arr) {
    arr.sort((a, b) => b.age - a.age);
    return arr;
}

function findStudentByCourse(arr, targetCourse) {
    return arr.find(student => student.course === targetCourse);
}

console.log("Завдання 4");
console.log("Початковий масив студентів");
displayElements(students);
console.log("\nВидалення студента Олексій");
students = deleteStudentByName(students, "Олексій");
displayElements(students);
console.log("\nДодавання нового студента");
addStudent(students, newStudent);
displayElements(students);
console.log("\nСортування за віком від найстаршого до наймолодшого");
sortStudentsByAgeDesc(students);
displayElements(students);
console.log("\nСтудент 3-го курсу:");
console.log(findStudentByCourse(students, 3));
console.log("\n");


// ЗАВДАННЯ 5 Методи масивів 
let numbers = [1-5];
let additionalNumbers = [6-9];

function mapToSquare(arr) {
    return arr.map(num => num * num);
}

function filterEvens(arr) {
    return arr.filter(num => num % 2 === 0);
}

function reduceToSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function spliceFirstThree(arr) {
    arr.splice(0, 3);
    return arr;
}

console.log(" Завдання 5");
console.log("Початковий масив чисел");
displayElements(numbers);
console.log("\nПіднесення до квадрату ");
displayElements(mapToSquare(numbers));
console.log("\nЛише парні числа ");
displayElements(filterEvens(numbers));
console.log("\nСума всіх елементів ");
console.log(reduceToSum(numbers));
console.log("\nДодавання нових 5 чисел ");
numbers = concatArrays(numbers, additionalNumbers);
displayElements(numbers);
console.log("\nВидалення перших 3 елементів ");
spliceFirstThree(numbers);
displayElements(numbers);
console.log("\n");


// ЗАВДАННЯ 6: Бібліотека

let libraryBooks = [
    { title: "Кобзар", author: "Тарас Шевченко", genre: "Поезія", pages: 400, isAvailable: true }
];

function addBook(books, title, author, genre, pages) {
    books.push({ title: title, author: author, genre: genre, pages: pages, isAvailable: true });
    return books;
}

function removeBook(books, title) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === title) {
            books.splice(i, 1);
            break;
        }
    }
    return books;
}

function findBooksByAuthor(books, author) {
    return books.filter(book => book.author === author);
}

function toggleBookAvailability(books, title, isBorrowed) {
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === title) {
            books[i].isAvailable = !isBorrowed;
            break;
        }
    }
    return books;
}

function sortBooksByPages(books) {
    books.sort((a, b) => a.pages - b.pages);
    return books;
}

function getBooksStatistics(books) {
    let total = books.length;
    let available = books.filter(b => b.isAvailable).length;
    let borrowed = total - available;
    let totalPages = books.reduce((sum, b) => sum + b.pages, 0);
    let avgPages = total === 0 ? 0 : totalPages / total;
    
    return {
        загалом_книг: total,
        доступних: available,
        взятих: borrowed,
        середня_кількість_сторінок: avgPages
    };
}

console.log(" Завдання 6 ");
console.log("Початкова бібліотека");
displayElements(libraryBooks);
console.log("\nДодавання книги Тіні забутих предків");
addBook(libraryBooks, "Тіні забутих предків", "Михайло Коцюбинський", "Повість", 200);
displayElements(libraryBooks);
console.log("\nПозначення книги Кобзар як взятої");
toggleBookAvailability(libraryBooks, "Кобзар", true);
displayElements(libraryBooks);
console.log("\nСортування за кількістю сторінок");
sortBooksByPages(libraryBooks);
displayElements(libraryBooks);
console.log("\nСтатистика бібліотеки");
console.log(getBooksStatistics(libraryBooks));
console.log("\n");


// ЗАВДАННЯ 7: Об'єкт студента
let targetStudent = { name: "Ігор", age: 19, course: 2 };
let subjectsList = ["Математика", "Програмування"];

function addSubjectsToStudent(studentObj, subjectsArr) {
    studentObj.subjects = subjectsArr;
    return studentObj;
}

function deleteAgeFromStudent(studentObj) {
    delete studentObj.age;
    return studentObj;
}

console.log("Завдання 7 ");
console.log("Початковий об'єкт студента");
console.log(targetStudent);
console.log("\nДодавання списку предметів");
addSubjectsToStudent(targetStudent, subjectsList);
console.log(targetStudent);
console.log("\nВидалення властивості вік");
deleteAgeFromStudent(targetStudent);
console.log(targetStudent);
console.log("\n");