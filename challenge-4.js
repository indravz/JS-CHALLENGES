/* From challenge 1 create inheritance to create a TechnicalBook class 
this clas will take 
1.Title
2.Author
3.ISBN
4.numCOpies
5.Edition (extra)
getEdition ()  _> should result in "current value of Bok edition is:"
*/
//import { Book } from './challenge-1.js'

class Book {
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

class TechBooks extends Book {
  constructor(title, author, isbn, numCopies, edition) {
    super(title, author, isbn, numCopies)
    this.edition = edition
  }

  get editionValue() {
    return (`current value of Book edition is ${this.edition}`);
  }
}

const book1 = new TechBooks('Inferno', 'DanBrown', "asdjfbasd", 12, 2011);

console.log(book1.edition)
console.log(book1.editionValue)