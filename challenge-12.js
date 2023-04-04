/*
Recursion is when a fn calls itself with an argument that gets progressively smaller and smaller until a base case is reached. Once that base case is reached previous sta of execution returns and your solution is calculated

Challenge: Factorial
*/

function Factorial(givenNumber) {


  let factorial = 1;
  if (givenNumber != 1) {
    factorial = givenNumber * Factorial(givenNumber - 1);
    return factorial
  }
  else {
    return factorial;
  }

}


let numtoCalculate = 5;
console.log(Factorial(numtoCalculate))