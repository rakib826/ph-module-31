//var let const
const a = 23;
const numbers = [4,5,6]
const person = {
  name: "sakib",
  age: 20,
  profession: "student"
}
//template string
const message = `Hi, I am ${person.name}. I am a ${person.profession}. I am ${person.age} years old`
console.log(message)
//arrow function
const square = x => x*x;
const sum = (a,b) => a+b;

//destructing
const {age, z, ...others} = {x: 2, y: 5,z: 3, name: "Xavier", age: 23};
const [first, second, ...remaining] = ["ram", "sam", "jodu", "modhu"]