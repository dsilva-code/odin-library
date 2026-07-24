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
    myLibrary.push(book1);
}

function libraryInfo () {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].title + ", " + myLibrary[i].author + ", " + myLibrary[i].pages + ", " + myLibrary[i].read + ", " + myLibrary[i].id);
    }
}

const myLibrary = [];

addBookToLibrary("Project Hail Mary", "Andy Weir", 290, false);
addBookToLibrary("Stoner", "John Williams", 140, true);
addBookToLibrary("A Fig for all Devils", "C.S Fritz", 90, true);


libraryInfo();