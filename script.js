
function task1(name, age, city) {
  return `${name} (age ${age}) lives in ${city}`;
}
alert(task1("Anton", 22, "Minsk"));

function task2_converting(){

let choice = Number(prompt("Choose what temperature you want to input  \n 1.Celsius \n 2.Farenheit: "));
let temperature;
let temperature_new;

switch (choice){
  case 1:
  temperature = Number(prompt("Enter temperature in Celsius :"));
  temperature_new = (temperature * 9/5) + 32;
  alert(`${temperature} C = ${temperature_new} Farenheit`);
  break;
  case 2:
  temperature = Number(prompt("Enter temperature in Farenheit :"));
  temperature_new = (temperature - 32) * 5/9;
  alert(`${temperature} F = ${temperature_new} Celsius`);
  break;
  default:
  alert("Invalid Choice");
}
}
task2_converting();

function task3_grading(){
    let grade = Number(prompt("Enter your score on the exam: "));
    if (grade <=100 && grade >=90){
        alert("Your grade is A.Congrats!!");
    }else if (grade <=89 && grade >=80){
        alert("Your grade is B.Congrats!!");
    }else if(grade <=79 && grade >=70){
        alert("Your grade is C.Congrats!!");
    }else if(grade <=69 && grade >=60){
        alert("Your grade is D.Congrats!!");
    }else if (60>grade){
        alert("Your grade is f.Congrats!!");
    }else {
        alert("Invalid input.Put Your Number between 100 and 0");}
}

class Car {
  constructor( year,price) {
    this.year = year;
    this.price= price;
  }
}
class BankAccount{

 #owner;
 #balance;

 constructor(owner,initialBalance){

  this.#owner = owner;
  this.#balance = initialBalance;

 }
  deposit(amount){

 if(isNaN(amount)){

  console.log("Deposit must be number");
  return;
 }
 if(amount <=0){
  console.log("Deposit must be positive");
  return;
 }
 this.#balance += amount;
 console.log(this.#balance);

}
    withdraw(amount){
      //amount=Number(prompt("What amount of money you want to withdraw?"));
     if(isNaN(amount)){
       console.log("Withdraw must be Number");
      return;
     } if (amount > this.#balance){
      console.log("Not enough money on your balance account");
      return;
     }
      if(amount <=0){
      console.log("Withdraw must be positive");
      return;
      }
      this.#balance -= amount;
      console.log(this.#balance + " Is your balance");
    }

    getBalance(){
    return this.#balance;
    }
    get owner() {
    return this.#owner;
  }

  set owner(newOwner) {
    if (newOwner.trim() === "") {
       console.log("Owner name cannot be empty");
      return;
    }
     if (!isNaN(newOwner)){
       console.log("Owner name cannot be number");
       return;
    }
    this.#owner = newOwner;
  }

}
function testBankAccount(){

 let account = new BankAccount("Alex",1000);

 account.deposit(500);

 account.withdraw(200);

 account.withdraw(-50);

 account.deposit("abc");

 console.log(account.getBalance());


}

testBankAccount();

class Book{

 constructor(title,author,year){

    this.title = title;
    this.author = author;
    this.year=year;

 }

}

class Library{

 constructor(){

  this.books = [];

 }

 addBook(book){

  this.books.push(book);

  console.log(`Book added: ${book.title}`);

 }
removeBook(title){
  for(let i=0;i<this.books.length;i++){
    if(this.books[i].title===title){
      this.books.splice(i,1);
      alert(`${title} is removed`);
      return;
    }
  }
}
listAllBooks(book){
  if (this.books.length==0){
    console.log('Library is empty');
  }else{
     for(let i=0;i<this.books.length;i++){
    console.log(`Title: ${this.books[i].title}, Author: ${this.books[i].author} `);
    }
  }
}
searchByAuthor(author){
  if (this.books.length==0){
    console.log('Library is empty');
    return;
  }
  let found=false;
  for(let i=0;i<this.books.length;i++){
    if(author===this.books[i].author){
      console.log(`Title: ${this.books[i].title}, Author: ${this.books[i].author}`);
      found=true;
    }
  }
     if(found === false){
    console.log("Author not found");
 }
}

}

const fs = require("fs");

function saveBooks(books){

 let text="";

 for(let book of books){

  text += `Title=${book.title}\n`;
  text += `Author=${book.author}\n`;
  text += `Year=${book.year}\n\n`;

 }

 fs.writeFileSync("books.txt",text);
}

function loadBooks(){

 let data = fs.readFileSync("books.txt","utf8");

 let lines = data.split("\n");

 let books=[];

 for(let i=0;i<lines.length;i+=4){

  if(lines[i]=="") continue;

  let title = lines[i].split("=")[1];

  let author = lines[i+1].split("=")[1];

  let year = lines[i+2].split("=")[1];

  books.push(new Book(title,author,year));

 }

 return books;

}

function test(){

 let books=[];

 books.push(new Book("Clean Code","Robert Martin",2008));

 books.push(new Book("JS Guide","MDN",2020));

 saveBooks(books);

 let loaded = loadBooks();

 console.log(loaded);

}

test();
