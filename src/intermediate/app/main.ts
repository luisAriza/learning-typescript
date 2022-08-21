import { products, addProduct } from "./products/product.service";

addProduct({
  id: 43,
  title: "Cargador",
  price: 20000,
  stock: 73,
  createAt: new Date(),
  updateAt: new Date(),
  category: {
    id: 386,
    name: "Technology",
    createAt: new Date(),
    updateAt: new Date()
  }
})

console.log("products", products);
