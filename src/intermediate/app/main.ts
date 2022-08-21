import { products, addProduct } from "./products/product.service";

addProduct({
  id: 43,
  title: "Cargador",
  price: 20000,
  stock: 73,
  category: {
    id: 386,
    name: "Technology"
  }
})

console.log("products", products);
