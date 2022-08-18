import { Data } from "./product.model"

export const products: Data[] = []

export const addProduct = (data: Data) => {
  products.push(data)
}
