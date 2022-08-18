import { addProduct, products } from "./product.service"

addProduct({
  name: "Mouse",
  price: 15.99,
  stock: 5
})
addProduct({
  name: "PC",
  price: 1399,
  stock: 2
})

console.log(products[0])
console.log(products[1])

