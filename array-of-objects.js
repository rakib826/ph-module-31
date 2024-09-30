const products = [
  {id: 1, name: 'Cup', price: 5},
  {id: 2, name: 'Pen', price: 2},
  {id: 3, name: 'Pencil', price: 1},
  {id: 4, name: 'Marker', price: 3},
  {id: 5, name: 'Eraser', price: 1}
]

//map
const names = products.map(product => product.name);
console.log(names);

const prices = products.map(product => product.price);
console.log(prices);

// for each id
const ids = products.forEach(product => console.log(product.id));

// filter
const filtered = products.filter(product => product.price > 2);
console.log(filtered);