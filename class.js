const products = [
  {id: 1, name: 'Cup', price: 5},
  {id: 2, name: 'Pen', price: 2},
  {id: 3, name: 'Pencil', price: 1},
  {id: 4, name: 'Marker', price: 3},
  {id: 5, name: 'Eraser', price: 1}
];

class Product{
  constructor(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

const lenevo = new Product(6, 'Lenevo', 1000);
console.log(lenevo);
