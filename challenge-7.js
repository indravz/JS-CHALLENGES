/*


const array = [1, 2, 3];
const [value1, ...value3] = array;

const [value1] = array; //value1 = 1
const [value1, value2, value3] = array;  //value2= 2
const [value1, ...value3] = array;

Destructuring is the expressiion which allsows us to extract the values from objects and arrays and store in variables.

To destructure values from Arrays we use square brackets, and to destructure from array we use curly braces

The statement const [value1, ...value3] = array; uses destructuring assignment to assign the values of the array to new variables value1 and value3.

In this case, value1 will be assigned the first element of the array, which is 1. The ... (spread syntax) is used to assign the rest of the array elements to a new array, which in this case is value3. Since value3 uses the spread syntax, it will contain all the elements of the original array except for the first element, which has already been assigned to value1.

So, after executing const [value1, ...value3] = array;, value1 will be 1, and value3 will be [2, 3].

Here is an example to illustrate:


const array = [1, 2, 3];
const [value1, ...value3] = array;

console.log(value1); // Output: 1
console.log(value3); // Output: [2, 3]
Note that because const was used to declare value1 and value3, they cannot be reassigned to new values. However, the elements of value3 (i.e., [2, 3]) can be modified.


Challenge: You'll use arrray and object de-structuring to return a list of students.

create a function called getstudents which takes one arguemnt classroom

classroom contains a boolean value hasTeaching assistant and class list which is array of people in classroom.

first value in the class lists will be teacher. 

["Rashida", "John", "Roman", "Lisa", "Omair" , "Lukas"] if has teaching assistant is true, the second one in the list is ta and remaining members inthe array are studetns

If has teaching assistant is false - everybody from second value are students

Your job is to return the list of students . ou must use object and array destricturing



*/

function getStudents(classList) {

  const { hasTA, ...peopleCount } = classList;
  let students;
  console.log(hasTA);
  console.log(peopleCount)
  //let { people: [teacher, assistant, ...studentsList] } = peopleCount;

  if (hasTA == true) {
    const { people: [teacher, assistant, ...studentsList] } = peopleCount;
    students = studentsList;
  }
  else {
    const { people: [teacher, ...studentsList] } = peopleCount;
    students = studentsList;
  }

  return students;

}

const classList1 = {
  hasTA: true,
  people: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"]
}

console.log(getStudents(classList1));

