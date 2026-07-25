
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
    const body = document.getElementById("body");
    const  oldPageBody = document.getElementById("library");
    oldPageBody.remove();
    
    const pageBody = document.createElement("div");
    pageBody.id = "library";
    body.appendChild(pageBody);
    
    for (let i = 0; i < myLibrary.length; i++) {
        const newBook = document.createElement('div');
        newBook.innerHTML = "Title: " + myLibrary[i].title + "<br>Author: " + myLibrary[i].author + "<br>Pages: " + myLibrary[i].pages + "<br>Read: " + myLibrary[i].read + "<br>ID: " + myLibrary[i].id + "<br><br>";
        pageBody.appendChild(newBook);
    }
}

const myLibrary = [];

addBookToLibrary("Project Hail Mary", "Andy Weir", 290, false);
addBookToLibrary("Stoner", "John Williams", 140, true);
addBookToLibrary("A Fig for all Devils", "C.S Fritz", 90, true);

const submit = document.getElementById("bookSubmit");
const dialog = document.getElementById("my-dialog");
const bookTitle = document.getElementById("bookTitle");
const bookAuthor = document.getElementById("bookAuthor");
const bookPages = document.getElementById("bookPages");
const bookRead = document.getElementById("bookRead");

submit.addEventListener("click", submitClick);

function submitClick(event) {
    event.preventDefault();
    dialog.close();
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const pages = bookPages.value;
    let read = bookRead.checked;
    addBookToLibrary (title, author, pages, read);
    libraryInfo();
}


libraryInfo();








