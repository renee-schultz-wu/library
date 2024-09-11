const myLibrary = [];
const container = document.querySelector("#container");



function Book(name, author, page) {
  this.name = name;
  this.author = author;
  this.page = page;

  this.id = myLibrary.length;
  
  this.createSelf = function() {
    const new_div = document.createElement("div");
    new_div.innerText = name + " \r\n " +author + "  \r\n " + page; 
    new_div.style.backgroundColor = "lightpink";
    new_div.classList.add("book");

    container.appendChild(new_div);
    this.dom = new_div;
  }

  this.addButton = function() {
    const delete_button = document.createElement("button");
    delete_button.textContent = "delete";
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




const b1 = new Book("1984", "big sis",33)
addBookToLibrary(b1)

const b2 = new Book("2001 space odyssey", "i forgot",33)
addBookToLibrary(b2)

