const numbers = [4,7,9,10,3];
const doubled = []
for (const num of numbers){
  const double = num * 2;
  doubled.push(double)
}
console.log(doubled)

// map loops through each element of the array and do the operation that you passed in the call back function and hold the result  from each operation in an array and finally returns you the array

const marks = [77,87,92,82,81,98];

// function doubleIt(mark){
//   console.log("marks now", mark)
//   return mark*2;
// }

const doubleIt = mark => mark*2;

const result = marks.map(doubleIt)
console.log(result)