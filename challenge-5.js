/*
Create User object that has 3 properties
1. username
2. Password
3. Age

Use javs script symbols to ensure that username and password are private fields. Which means they shouldnt accessible by callinguser.Username or User.password
*/
//import { Book } from './challenge-1.js'

const username = Symbol("username");
const password = Symbol("password ");
class User {
  constructor(username, password, age) {
    this[username] = username;
    this[password] = password;
    this.age = age;
  }

  get getUserDetails() {
    console.log(this[username]);
    console.log(this[password]);
    console.log(this.age)
  }

}

const user1 = new User("NTR", "passw", 40)

console.log(user1.age)

user1.getUserDetails