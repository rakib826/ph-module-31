const numbers = [12,23,45,7,89];
const doubled = numbers.map(num=>num*2);
console.log(doubled)
const fiveBonus = numbers.map(num=>num+5);
console.log(fiveBonus)
const half = numbers.map(num=>num/2);
console.log(half)

const friends = ["Tom","Hanks","Jony","John Wick", "Cristiano Ronaldo"]
const lengths = friends.map(names=>names.length);
console.log(lengths)
const firstLetter = friends.map(names=>names[0]);
console.log(firstLetter);