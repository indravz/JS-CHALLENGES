/*
Develop inventory application for bookstore.
 You need to create a book class, which provides information of different books in the store like title,author,isbn,number of copies.
keep trck of available copies. getavailability function should throw out of stock if 0 available copies , "low stock" if <10 copies and in "stock otherwise"
 ALso need function for selling the book(number of copies to sell). This will take the number of copies sold  and substract it from the total number of copies.
Lastly, restock function - which will take number of copies to restock and add it to the total number of copies
Use javascript classes and use getter method for avaialbility method
*/

export class Book {
  constructor(title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }

  get getAvailability() {
    if (this.numCopies === 0) {
      return "Out of stock";
    }
    else if (this.numCopies <= 10) {
      return "Limited stock";
    }
    else {
      return "InStock";
    }
  }

  sellBook(numSold = 1) {
    this.numCopies = this.numCopies - numSold;
  }

  restockBook(numRestock) {
    this.numCopies = this.numCopies + numRestock;
  }

}


const book1 = new Book('Inferno', 'DanBrown', "asdjfbasd", 12);

console.log(book1.getAvailability());

console.log(book1.author);

book1.sellBook(10);

console.log(book1.getAvailability);

book1.restockBook(10);

console.log(book1.getAvailability);
/* 
1. we can start with functions and proceed with class definition. Both have similar syntax
*/ 