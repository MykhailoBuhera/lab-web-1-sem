"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OnlineCourse {
    title;
    durationHours;
    students = [];
    constructor(title, durationHours) {
        this.title = title;
        this.durationHours = durationHours;
    }
    registerStudent(student) {
        if (this.isStudentRegistered(student)) {
            console.log(`${student} вже зареєстрований на курс "${this.title}"`);
            return;
        }
        this.students.push(student);
    }
    isStudentRegistered(student) {
        return this.students.includes(student);
    }
}
class CourseManager {
    courses = [];
    addCourse(course) {
        this.courses.push(course);
    }
    removeCourse(courseName) {
        this.courses = this.courses.filter(c => c.title !== courseName);
    }
    findCourse(courseName) {
        return this.courses.find(c => c.title === courseName);
    }
    listCourses() {
        this.courses.forEach(c => {
            console.log(`${c.title} (${c.durationHours} год): ${c.students.join(", ") || "немає студентів"}`);
        });
    }
}
const manager = new CourseManager();
const tsCourse = new OnlineCourse("TypeScript Basics", 20);
const vueCourse = new OnlineCourse("Vue.js Intro", 15);
manager.addCourse(tsCourse);
manager.addCourse(vueCourse);
tsCourse.registerStudent("Олена");
tsCourse.registerStudent("Максим");
vueCourse.registerStudent("Олена");
tsCourse.registerStudent("Олена"); // повторна реєстрація — перевірка isStudentRegistered
manager.listCourses();
//# sourceMappingURL=corses.js.map