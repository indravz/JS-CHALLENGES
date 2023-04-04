/*
Array reduce method runs a function once for every item in an array and returns a single value. The reduced function that you provide that takes an accumulator value and a current value. The accumuator value is the combined total of all the previous callback funtions runs and the current value is the current value in the array that we are executing this function on.

Challenge: Aray reduce method to calculate the total bill from trip to cofee shop. Each person has orderred some number of cofees and you offer o pay entire bill. 
ex: [2,3,1,5]
price per cofee = 1.25
sum of coffees  = $13.75
The total bill is ${total}
*/

function calculateTotal(orderList) {
  const coffeePrice = 1.25
  return orderList.reduce((acc, coffeeCount) => {
    return acc + (coffeeCount * coffeePrice)
  })

}

let orderList = [2, 3, 1, 5]
console.log(`total bill is ${calculateTotal(orderList)}`)

