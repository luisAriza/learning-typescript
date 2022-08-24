import axios from "axios"
import { Product } from "./models/product.model";

(async (): Promise<void> => {

  // async function getProducts(): Promise<Product[]> {
  //   const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
  //   return data;
  // }

  // async function getProducts() {
  //   const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
  //   const data = rta.data as Product[];
  //   return data;
  // }

  async function getProducts() {
    const { data } = await axios.get<Product[]>("https://api.escuelajs.co/api/v1/products")

    return data
  }

  console.log("---".repeat(10))
  const products = await getProducts()
  console.log("products", products.map(e => `${e.id} - ${e.title}`))

})();
