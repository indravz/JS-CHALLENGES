/*
Closures are the functions that close over their lexical environment or their scope.
This allows us to access an outer function scope from inner function.
We use closures in may different places ex: if we are filtering an array of items or if we creating a time out .

Challenge: we use closure to create three buttons. Each button will represent a different color

and we ll change the bg colour of the document body to color value. Using closure - create a function called change color that acceps the color value. When the button is clicked the closure should be invoked and the bg color should be updated


*/

function changeColor() {

  var element = document.getElementById("myDiv");

  return function innerchangecolor(color) {
    element.style.backgroundColor = color;
  }

}



let closure = changeColor();


