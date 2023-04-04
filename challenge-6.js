/*
Create a ticking clockin teh document body

html with div as id "clock"

display the current hours, minutes,seconds

*/
//import { Book } from './challenge-1.js'
function showTimeCurrent(callback) {
  setInterval(() => {
    callback();
  }, 1000);
}


function showTime() {
  const dateTime = new Date();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds
}

showTimeCurrent(showTime)

