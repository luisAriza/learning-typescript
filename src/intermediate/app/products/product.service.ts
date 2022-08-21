import { faker } from "@faker-js/faker"
import { CreateProductDto } from "./product.dto"
import { Product } from "./product.model"

export const products: Product[] = []

// export const addProduct = (data: Product): void => {
//   products.push(data)
// }
export const addProduct = (data: CreateProductDto): void => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createAt: faker.date.recent(),
    updateAt: faker.date.recent()
  }
  products.push(newProduct)
}

export const updateProduct = (id: string, changes: Product) => {
  // Code
}
