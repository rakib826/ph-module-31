const data = [{id: 1, name: "Abul", address: "Dhaka"}];
console.log(data[0].address);

const products = {
  count: 5000,
  data: [
    {id:1, brand:"Lenevo", name: "Ideapad 5", price: 4990},
    {id:2, brand:"", name: "Macbook Air M1", price: 99000}
  ]
}
// target the macbook price
console.log(products.data[1].price);

const user = {
  id: 5001,
  name: "Akib",
  address: {
    street: {
      first: "45/2, Uttara",
      second: "87 Sector2 Mirpur"
    },
    city: "Dhaka"
  }
}
// Chaining
console.log(user.address.street.second);

const user2 = {
  id: 5002,
  name: "Ghu Babar Majar",
  address: {
    city: "Chottogram",
    country: "Bangladesh"
  }
}
//Optional Chaining
console.log(user2.address.street?.country);


