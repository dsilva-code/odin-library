function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();

    this.info = function() {
        console.log(this.title + ", " + this.author + ", " + this.pages + ", " + this.read + ", " + this.id)
    }
}

function addBookToLibrary (title, author, pages, read) {
    book1 = new Book(title, author, pages, read);
    return book1;
}

const myLibrary = [];

const projectHailMary = new Book("Project Hail Mary", "Andy Weir", 290, false);
const stoner = new Book("Stoner", "John Williams", 140, true);


console.log(addBookToLibrary("YO","YO", 100, false))