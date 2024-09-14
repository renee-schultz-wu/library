const myLibrary = [];
const content = document.querySelector("#content");

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");
const confirmBtn = document.querySelector(".submit");

const nameInput = document.querySelector(".name");
const authorInput = document.querySelector(".author");
const pageInput = document.querySelector(".number");





function Book(name, author, page) {
  this.name = name;
  this.author = author;
  this.page = page;

  this.id = myLibrary.length;
  
  this.createSelf = function() {
    const new_div = document.createElement("div");
    new_div.innerText = "Book: " + name + " \r\n " + "Author: " + author + "  \r\n " + page + " pages" + "  \r\n "; 
    new_div.style.backgroundColor = "lightpink";
    new_div.classList.add("book");

    content.appendChild(new_div);
    this.dom = new_div;
  }

  this.addButton = function() {
    const delete_button = document.createElement("button");
    delete_button.textContent = "delete";
    delete_button.classList.add("del");
    delete_button.addEventListener("click", () => {
        this.dom.remove();
        myLibrary[this.id] = undefined;
    })
    this.dom.appendChild(delete_button);
  }

}

function addBookToLibrary(book) {
    book.createSelf();
    book.addButton();
    myLibrary.push(book);
}

function displayLibrary(){
    for (let i=0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
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
    addBookToLibrary(new_book);
    nameInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
    dialog.close(); // Have to send the select box value here.

});


const b1 = new Book("Fahrenheit 451", "Ray Bradbury",249)
addBookToLibrary(b1)

const b2 = new Book("Journey to the West", "Wu Cheng'en",2346)
addBookToLibrary(b2)

