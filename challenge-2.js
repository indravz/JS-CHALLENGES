/*
Create movie object that takes 5 objects
1. Title
2. Director
3.Genre
4.Release year
5.Rating

should have get overview which logs movie overview:
 "<movie> a <genre> film directed by <director> was released in <releaseYear>. It recieved a rating of <rating> "

 You can use either class or fn syntax to create your prototype

 Create few ovies o test it out.
*/

/*function Movie(title, director, genre, year, rating) {
  this.title = title;
  this.director = director;
  this.genre = genre;
  this.year = year;
  this.rating = rating;
}

Movie.prototype.overiew = function () {
  console.log(`${this.title} a ${this.genre} film directed by ${this.director} was released in ${this.year}. It recieved a rating of:      ${this.rating}`)
}
*/

class Movie {
  constructor(title, director, genre, year, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.year = year;
    this.rating = rating;
  }
  overview() {
    console.log(`${this.title} a ${this.genre} film directed by ${this.director} was released in ${this.year}. It recieved a rating of:      ${this.rating}`)
  }

}

/* Movie.prototype.overiew = function () {
  console.log(`${this.title} a ${this.genre} film directed by ${this.director} was released in ${this.year}. It recieved a rating of:      ${this.rating}`)
} */

const movie1 = new Movie("RRR", "Rajamouli", "Drama", "2022", "4.8")

movie1.overiew()
