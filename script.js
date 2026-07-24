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
    const pageBody = document.getElementById("library");

    for (let i = 0; i < myLibrary.length; i++) {
        const newBook = document.createElement('div');
        newBook.innerHTML = "Title: " + myLibrary[i].title + "<br>Author: " + myLibrary[i].author + "<br>Pages: " + myLibrary[i].pages + "<br>Read: " + myLibrary[i].read + "<br>ID: " + myLibrary[i].id + "<br><br>";
        pageBody.appendChild(newBook);
    }
}

const submit = document.getElementById("bookSubmit");
submit.onclick = function() {
    preventDefault();
};

const bookTitle = document.getElementById("bookTitle");



const myLibrary = [];

addBookToLibrary("Project Hail Mary", "Andy Weir", 290, false);
addBookToLibrary("Stoner", "John Williams", 140, true);
addBookToLibrary("A Fig for all Devils", "C.S Fritz", 90, true);

libraryInfo();

