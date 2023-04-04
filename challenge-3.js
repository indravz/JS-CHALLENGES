/*Arrays comes with many built in loops and functions t allow us to manipulate data
array.filter is a callback function that gets run once per every item in the array and retuns new array of items that passes certain criteria
cosnt mammals = [
  {
    type: "cat",
    mammals: true
  },
  {
    type: "shark",
    mammals: false
  },
  {type: "frog",
   mammals: true
  }
]

const mammals = animals.filter(animal => animal.mammal)

For an italian dinner:
some of the guests are vegetarian and need you to create a list of vegetarian menu items for them. Given an array of italian dishes, create an unordered list if all vegetarian dishes. Each menu item is an object containing the dish name and a boolean variable that includes veg is vegetarian. dynamically generate the list items in the DOM from the vegetarian items
*/

const menu = [
  {
    item: "falafel",
    vegetarian: true
  },
  {
    item: "acai bowl",
    vegetarian: true
  },
  {
    item: "fishbowl",
    vegetarian: false
  }
]

const vegetarianMenu = menu.filter(item => item.vegetarian);
console.log(vegetarianMenu);

const ul = document.getElementById("vegetarian-menu");
vegetarianMenu.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item.item;
  ul.appendChild(li);
})

