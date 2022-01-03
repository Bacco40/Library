
let myLibrary=[];
let index=0;
let status1=0;
let readed=0;
let notRead=0;
let total=0;
const Add=document.querySelector(".add");
const popUp=document.querySelector(".popUp");
const page=document.querySelector(".page");
const library=document.querySelector(".library");
const booksCount=document.querySelector("#booksCount");
const readsCount=document.querySelector("#readsCount");
const NotreadCount=document.querySelector("#NotreadCount");
const b_title=document.querySelector("#b_title");
const b_author=document.querySelector("#b_author");
const b_pages=document.querySelector("#b_pages");
const b_status=document.querySelector("#b_status");
const addBtn=document.querySelector(".BtnAdd");
const close=document.querySelector(".CloseBook")

function Book(title,author,pages,read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
} 
const book1= new Book('The Hobbit','J.R.R. Tolkien','295','false');
addBookToLibrary(book1);
addBookOnScreen();

function addBookToLibrary(book){
    myLibrary[index]=book;
    index=index+1;
}

function addBookOnScreen(){
    if(status1==1){
        while(library.firstChild){
            library.removeChild(library.firstChild); 
        }
        readed=0;
        notRead=0;
        total=0;
    }
    let x=0;
    while(x<index){
        total=total+1;
        let book=document.createElement ('div');
        book.classList.add('the_book');
        let read="";
        if(myLibrary[x].read=="false"){ 
            read="Read";
            notRead=notRead+1;
        }else{
            read="Not Read";
            readed=readed+1;
        }
        book.innerHTML = `
        <div class="book_title">${myLibrary[x].title}</div>
        <div>By: ${myLibrary[x].author}</div>
        <div>Number of Pages: ${myLibrary[x].pages}</div>
        <div class="BtnBooks"><button class="delete" value="${x}"> Delete Book</button>
        <button class="readBtn" value="${x}">Make ${read} </button></div>`;
        library.appendChild(book);
        if(myLibrary[x].read=="false"){
            book.style.cssText = "background-color:lightblue"
        }else{
            book.style.cssText = "background-color:lightgreen"
        }
        x=x+1;
        
    }
    status1=1;
    booksCount.textContent=`${total}`;
    readsCount.textContent=`${readed}`;
    NotreadCount.textContent=`${notRead}`;

    const readBtn1=document.querySelectorAll(".readBtn");
    readBtn1.forEach((readBtn1)=>{
        readBtn1.addEventListener('click',()=>{
            if(myLibrary[+readBtn1.value].read=="true"){
                myLibrary[+readBtn1.value].read="false";
            }else{
                myLibrary[+readBtn1.value].read="true";
            }
            addBookOnScreen();
        })
    })
    const del=document.querySelectorAll(".delete");
    del.forEach((del1)=>{
    del1.addEventListener('click',()=>{
        myLibrary.splice(+del1.value,1);
        index=index-1;
        addBookOnScreen();
    })
})
}

Add.addEventListener('click',()=>{
    document.getElementById("form").reset();
    popUp.setAttribute('class','thePopUp');
    page.style.cssText="opacity:40%"
})

addBtn.addEventListener('click',(ev)=>{
    ev.preventDefault();
    if(b_pages.value=="" || +b_pages.value<=0){
        alert("Please put a positive numeric value for the pages!")
    }else if(b_title.value==""){
        alert("Please enter the book title!")
    }else if(b_author.value==""){
        alert("Please enter the book author!")
    }else if(b_status.value=="null"){
        alert("Please enter the book status!")
    }else{
        popUp.setAttribute('class','popUp');
        page.style.cssText="opacity:100%"
        const newBook=new Book(b_title.value,b_author.value,b_pages.value,b_status.value);
        addBookToLibrary(newBook);
        addBookOnScreen();
    }
})

close.addEventListener('click',(ev)=>{
    ev.preventDefault();
    popUp.setAttribute('class','popUp');
    page.style.cssText="opacity:100%";
})