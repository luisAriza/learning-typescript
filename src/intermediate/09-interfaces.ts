type Sizes = "S" | "M" | "L" | "XL"

// type Product = {
//   id: number | string,
//   title: string,
//   price: number,
//   stock: number,
//   size?: Sizes
// }

interface Product {
  id: number | string;
  title: string;
  price: number;
  stock: number;
  size?: Sizes;
}

const products: Product[] = []

products.push({
  id: 1,
  title: "Cargador",
  price: 20000,
  stock: 73,
})

console.log("products", products);
