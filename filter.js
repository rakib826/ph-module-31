const numbers = [5,78,4,5,623,45];
const playersHeight = [78,65,67,75,80,77];
// filter selects elements based on a condition and returns an array with the elements that fullfilled the conditon
const selected = playersHeight.filter(height=>height>70);
console.log(selected)
const oddNums = numbers.filter(num=>num%2===1);
console.log(oddNums)