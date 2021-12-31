
let myLibrary=[];
let index=0;
let status1=0;
const Add=document.querySelector(".add");
const popUp=document.querySelector(".popUp");
const page=document.querySelector(".page");
const library=document.querySelector(".library");

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
} 
const book1= new Book('The Hobbit','J.R.R. Tolkien','295','false');
const book2= new Book('The Hobbit','J.R.R. Tolkien','296','false');
const book3= new Book('The Hobbit','J.R.R. Tolkien','297','false');
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookOnScreen();
function addBookForm(){

}

function addBookToLibrary(book){
    myLibrary[index]=book;
    index=index+1;
}

function addBookOnScreen(){
    if(status1==1){
        while(library.firstChild){
            library.removeChild(library.firstChild);
        }
    }
    let x=0;
    while(x<index){
        let book=document.createElement ('div');
        book.classList.add('the_book');
        let read="";
        if(myLibrary[x].read=="false"){ 
            read="Read";
        }else{
            read="Not Read";
        }
        book.innerHTML = `
        <div class="book_title">${myLibrary[x].title}</div>
        <div>By: ${myLibrary[x].author}</div>
        <div>Number of Pages: ${myLibrary[x].pages}</div>
        <div class="BtnBooks"><button class="delete" value="${x}"> Delete Book</button>
        <button class="read">Make ${read} </button></div>`;
        library.appendChild(book);
        if(myLibrary[x].read=="false"){
            book.style.cssText = "background-color:lightblue"
        }else{
            book.style.cssText = "background-color:lightgreen"
        }
        x=x+1;
        
    }
    status1=1;
    const del=document.querySelectorAll(".delete");
    del.forEach((del1)=>{
    del1.addEventListener('click',()=>{
        myLibrary.splice(+del1.value,1);
        index=index-1;
        a=1;
        addBookOnScreen();
    })
})
}

Add.addEventListener('click',()=>{
    popUp.setAttribute('class','thePopUp');
    page.style.cssText="opacity:40%"
})

