
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

    get getLibrary() {
        return this.myLibrary;
    }

    addBook(title, author, page, read) {
        let book1 = new newBook(title, author, page, read);
        this.myLibrary.push(book1);
    }

    showBooks() {
        const body = document.getElementById("body");
        const  oldPageBody = document.getElementById("library");
        oldPageBody.remove();
        
        const pageBody = document.createElement("div");
        pageBody.id = "library";
        body.appendChild(pageBody);
        
        for (let i = 0; i < this.myLibrary.length; i++) {
            const newBook = document.createElement('div');
            newBook.innerHTML = "<br>Title: " + this.myLibrary[i].title + "<br>Author: " + this.myLibrary[i].author + "<br>Pages: " + this.myLibrary[i].pages + "<br>Read: " + this.myLibrary[i].read + "<br>ID: " + this.myLibrary[i].id + "<br>";
            newBook.dataset.id = this.myLibrary[i].id;
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

    removeBooks() {

    }
    
}

/*

Book.prototype.changeRead = function() {
   this.read = !this.read;
}

*/

const theLibrary = new newLibrary();
theLibrary.addBook("Land of the Lustrous", "Akira", 888, true);
theLibrary.addBook("Project Hail Mary", "Andy Weir", 472, true);
console.log(theLibrary);
theLibrary.showBooks()
theLibrary.removeBooks();


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
    theLibrary.addBook(title, author, pages, read);
    theLibrary.showBooks();

    const removeButtons = document.querySelectorAll(".removeButtons");

    for(const element of removeButtons) {
        element.addEventListener("click", (event) => {
            removeClick(event, theLibrary);
        });
    }

    const readButtons = document.querySelectorAll(".readButtons");

    for (const element of readButtons) {
        element.addEventListener("click", (event) => {
        readClick(event, theLibrary);
    });
    }
}

    const removeButtons = document.querySelectorAll(".removeButtons");

    for(const element of removeButtons) {
        element.addEventListener("click", (event) => {
            removeClick(event, theLibrary);
        });
    }

    function removeClick(buttonElement, libraryInstance) {

        const removeBook = buttonElement.currentTarget.parentElement.dataset.id;
        const found = libraryInstance.getLibrary.findIndex((element) => element.id === removeBook);
        (libraryInstance.getLibrary).splice(found, 1);
        libraryInstance.showBooks();
        const removeButtons = document.querySelectorAll(".removeButtons");
  
        for(const element of removeButtons) {
            element.addEventListener("click", (event) => {
                removeClick(event, theLibrary);
            });
        }

        const readButtons = document.querySelectorAll(".readButtons");

        for (const element of readButtons) {
            element.addEventListener("click", (event) => {
                readClick(event, theLibrary);
            });
        }
            
    };

const bookTitleError = document.querySelector("#bookTitle + span.error");

bookTitle.addEventListener("input", (event) => {
    if(bookTitle.validity.valid) {
        bookTitleError.innerHTML = "";
        bookTitleError.className = "error";
    } else {
        showBookTitleError()
    }
});

function showBookTitleError() {
    if(bookTitle.validity.valueMissing) {
        bookTitleError.textContent = "You need a book title";
    }

    bookTitleError.className = "error active";
}

const bookAuthorError = document.querySelector("#bookAuthor + span.error");

bookAuthor.addEventListener("input", (event) => {
    if(bookAuthor.validity.valid) {
        bookAuthorError.innerHTML = "";
        bookAuthorError.className = "error";
    } else {
        showBookAuthorError()
    }
});

function showBookAuthorError() {
    if(bookAuthor.validity.valueMissing) {
        bookAuthorError.textContent = "You need a book author";
    }

    bookAuthorError.className = "error active";
}

const bookPagesError = document.querySelector("#bookPages + span.error");

bookPages.addEventListener("input", (event) => {
    if(bookPages.validity.valid) {
        bookPagesError.innerHTML = "";
        bookPagesError.className = "error";
    } else {
        showBookPagesError()
    }
});

function showBookPagesError() {
    if(bookPages.validity.valueMissing) {
        bookPagesError.textContent = "You need a page numbers";
    }

    bookPagesError.className = "error active";
}
    

const readButtons = document.querySelectorAll(".readButtons");

for (const element of readButtons) {
    element.addEventListener("click", (event) => {
        readClick(event, theLibrary);
    });
}

function readClick(buttonElement, libraryInstance) {
    const readBook = buttonElement.currentTarget.parentElement.dataset.id;
    console.log(libraryInstance.getLibrary);
    const found = libraryInstance.getLibrary.findIndex((element) => element.id === readBook);
    
    if (libraryInstance.getLibrary[found].read === true) {
        libraryInstance.getLibrary[found].read = false;
    } else {
        libraryInstance.getLibrary[found].read = true;
    }

    libraryInstance.showBooks();

    const readButtons = document.querySelectorAll(".readButtons");

    for (const element of readButtons) {
        element.addEventListener("click", (event) => {
            readClick(event, theLibrary);
        });
    }

    const removeButtons = document.querySelectorAll(".removeButtons");

    for(const element of removeButtons) {
        element.addEventListener("click", (event) => {
            removeClick(event, theLibrary);
        });
    }
}


