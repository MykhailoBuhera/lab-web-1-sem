interface LibraryItem {
  title: string;
  author: string;
  borrow(): void;
}

class Book implements LibraryItem {
  private borrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    private pages: number
  ) {}

  borrow(): void {
    this.borrowed = true;
    console.log(`Книга "${this.title}" (${this.pages} стор.) позичена`);
  }
}

class Magazine implements LibraryItem {
  private borrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    private issueNumber: number
  ) {}

  borrow(): void {
    this.borrowed = true;
    console.log(`Журнал "${this.title}" (випуск №${this.issueNumber}) позичений`);
  }
}

class DVD implements LibraryItem {
  private borrowed: boolean = false;

  constructor(
    public title: string,
    public author: string,
    private durationMinutes: number
  ) {}

  borrow(): void {
    this.borrowed = true;
    console.log(`DVD "${this.title}" (${this.durationMinutes} хв) позичений`);
  }
}

class Library {
  private items: LibraryItem[] = [];

  addItem(item: LibraryItem): void {
    this.items.push(item);
  }

  findItemByName(name: string): LibraryItem | undefined {
    return this.items.find(item => item.title === name);
  }

  listItems(): void {
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