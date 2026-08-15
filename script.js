
class newBook {

    constructor(title, author,pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = self.crypto.randomUUID();
    }

    get bookInfo() {
        return this.title + ", " + this.author + ", " + this.pages + ", " + this.read + ", " + this.id
    }

}

//book protoype, no idea how to do that with class

class newLibrary {

    myLibrary = [];

    addBook(title, author, page, read) {
        book1 = new newBook(title, author, page, read);
        myLibrary.push(book1);
    }
}



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

Book.prototype.changeRead = function() {
   this.read = !this.read;
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
        newBook.innerHTML = "<br>Title: " + myLibrary[i].title + "<br>Author: " + myLibrary[i].author + "<br>Pages: " + myLibrary[i].pages + "<br>Read: " + myLibrary[i].read + "<br>ID: " + myLibrary[i].id + "<br>";
        newBook.dataset.id = myLibrary[i].id;
        pageBody.appendChild(newBook);
    }

    const books = document.querySelectorAll("#library div");
    
    for (const element of books) {
        const removeButton = document.createElement("button");
        removeButton.className = "removeButtons";
        removeButton.textContent = "Remove Book";
        element.appendChild(removeButton);
        const readButton = document.createElement("button");
        readButton.className = "readButtons";
        readButton.textContent = "Read Status";
        element.appendChild(readButton);
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

    const removeButtons = document.querySelectorAll(".removeButtons");

    for(const element of removeButtons) {
        element.addEventListener("click", removeClick);
    }

    const readButtons = document.querySelectorAll(".readButtons");

    for (const element of readButtons) {
        element.addEventListener("click", readClick);
    }
}


libraryInfo();

const removeButtons = document.querySelectorAll(".removeButtons");

for(const element of removeButtons) {
    element.addEventListener("click", removeClick);
}

function removeClick(event) {
    const button = this;
    const removeBook = button.parentElement.dataset.id;
    const found = myLibrary.findIndex((element) => element.id === removeBook);
    myLibrary.splice(found, 1);
    libraryInfo();

    const removeButtons = document.querySelectorAll(".removeButtons");

    for(const element of removeButtons) {
        element.addEventListener("click", removeClick);
    }

    const readButtons = document.querySelectorAll(".readButtons");

    for (const element of readButtons) {
        element.addEventListener("click", readClick);
    }

};


const readButtons = document.querySelectorAll(".readButtons");

for (const element of readButtons) {
    element.addEventListener("click", readClick);
}

function readClick(event) {
    const button = this;
    const readBook = button.parentElement.dataset.id;
    const found = myLibrary.findIndex((element) => element.id === readBook);
    
    if (myLibrary[found].read === true) {
        myLibrary[found].read = false;
    } else {
        myLibrary[found].read = true;
    }

    libraryInfo();

    const readButtons = document.querySelectorAll(".readButtons");

    for (const element of readButtons) {
        element.addEventListener("click", readClick);
    }

    const removeButtons = document.querySelectorAll(".removeButtons");

    for(const element of removeButtons) {
        element.addEventListener("click", removeClick);
    }
}


const theLibrary = new newLibrary();
theLibrary.addBook("Land of the Lustrous", "Akira", 888, true);


