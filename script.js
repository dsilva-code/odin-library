function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        console.log(this.title + ", " + this.author + ", " + this.pages + ", " + this.read)
    }
}

const projectHailMary = new Book("Project Hail Mary", "Andy Weir", 290, false);

projectHailMary.info();

const stoner = new Book("Stoner", "John Williams", 140, true)

stoner.info();

console.log(Object.getPrototypeOf(projectHailMary) === Book.prototype)