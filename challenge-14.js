/*
Create a function that takes in a blog post title and returns url-ified verion.

use regex and string prototype functions to complete the challenge

ex: Emma's Blog  ----> "emmas-blog"
"My Blog name!" ----> "my-blog-name"
*/

function Urlify(rawWords) {

  specialRemoved = rawWords.replace(/[^a-zA-Z0-9\s]/g, "");
  toLowercase = specialRemoved.toLowerCase()
  spacesRemoved = toLowercase.replace(/ /g, '-');
  console.log(spacesRemoved);

}


Urlify("My Blog name!!")