interface Course {
  title: string;
  durationHours: number;
  students: string[];
}

class OnlineCourse implements Course {
  students: string[] = [];

  constructor(
    public title: string,
    public durationHours: number
  ) {}

  registerStudent(student: string): void {
    if (this.isStudentRegistered(student)) {
      console.log(`${student} вже зареєстрований на курс "${this.title}"`);
      return;
    }
    this.students.push(student);
  }

  isStudentRegistered(student: string): boolean {
    return this.students.includes(student);
  }
}

class CourseManager {
  private courses: Course[] = [];

  addCourse(course: Course): void {
    this.courses.push(course);
  }

  removeCourse(courseName: string): void {
    this.courses = this.courses.filter(c => c.title !== courseName);
  }

  findCourse(courseName: string): Course | undefined {
    return this.courses.find(c => c.title === courseName);
  }

  listCourses(): void {
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