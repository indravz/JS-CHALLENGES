/*
Generators are the functions that can be exited and at a later point of time  re-entered while maintaing their context.
Generator functions used to be great in solving problems with asynchronous programming,
but they are recently replaced by js async and await

declaring the generator functio using the asterisk following the function keyword 
ex: function* 

generator function doesnt immediately execute the body of the function , instead iterator object for the function is returned.
We must call the iterator's next method to hit the next yield value.

In this challenge: you are going to build a generator function that returns the next stop in a list of stops along the metro north railroad. each time the button is clicked the next stop in the journey should be returned until we reach station8

you should use the generator function to yield this values. next stop button should be disabled once we reach the final stop
*/

function* trainStops(stopLists) {

  for (stop of stopLists) {
    yield stop;
  }

}

let buttonId = document.querySelector("#nextButton");
let printText = document.querySelector("#displayText");
buttonId.addEventListener('click', onButtonClick())

function onButtonClick() {
  const stopLists = ["stop1", "stop2", "stop3", "stop4", "stop5", "stop6"]
  let printStops = trainStops(stopLists);
  return function nextStop() {
    let nextStop = printStops.next();
    if (!nextStop.done) {


      console.log(nextStop.value);
      //nextStop = printStops.next();
      printText.textContent = nextStop.value
    }
    else {
      printText.textContent = "yay reached";
      buttonId.disabled = true;
    }
  }

}


