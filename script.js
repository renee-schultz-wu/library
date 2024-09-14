const content = document.querySelector("#content");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const confirmBtn = document.querySelector(".submit");

const nameInput = document.querySelector(".name");
const authorInput = document.querySelector(".author");
const pageInput = document.querySelector(".number");


class Book {
    #name;
    #author;
    #page;
    #dom;

    constructor(name, author, page){
        this.#name = name;
        this.#author = author;
        this.#page = page;
    }

    createDom() {
        const new_div = document.createElement("div");
        new_div.innerText = "Book: " + this.#name + " \r\n " + "Author: " + this.#author + "  \r\n " + this.#page + " pages" + "  \r\n "; 
        new_div.classList.add("book");
    
        //content.appendChild(new_div);
        this.#dom = new_div;
        return new_div;
    }

    addButton(new_div) {
        const delete_button = document.createElement("button");
        delete_button.textContent = "delete";
        delete_button.classList.add("del");
        delete_button.addEventListener("click", () => {
            this.removeSelf();
            //myLibrary[this.id] = undefined;            
        })
        return delete_button;
    }

    removeSelf() {
        this.#dom.remove();
    }
}

class Library {
    #booklist = [];

    addBook(book) {
        let div = book.createDom();
        let button = book.addButton();
        div.appendChild(button);
        content.appendChild(div);
        this.#booklist.push(book);
    }
    
}


showButton.addEventListener("click", () => {
    dialog.showModal();
});
  
closeButton.addEventListener("click", () => {
    nameInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    dialog.close();
});
  
confirmBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
    var bname = nameInput.value;
    var bauthor = authorInput.value;
    var bpage = pageInput.value;
    const new_book = new Book(bname, bauthor, bpage);
    library.addBook(new_book);
    nameInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    dialog.close(); 

});

library = new Library();
const b1 = new Book("Fahrenheit 451", "Ray Bradbury",249)
library.addBook(b1)

const b2 = new Book("Journey to the West", "Wu Cheng'en",2346)
library.addBook(b2)

