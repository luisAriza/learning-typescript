import { Product } from "./product.model"

export const products: Product[] = []

export const addProduct = (data: Product): void => {
  products.push(data)
}

export const updateProduct = (id: string, changes: Product) => {
  // Code
}
