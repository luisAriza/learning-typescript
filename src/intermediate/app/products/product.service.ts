import { faker } from "@faker-js/faker"
import { Product } from "./product.model"
import { CreateProductDto, UpdateProductDto, FindProductDto } from "./product.dto"

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

export const updateProduct = (id: Product["id"], changes: UpdateProductDto): Product => {
  const index = products.findIndex(e => e.id === id)
  const prevData = products[index]

  products[index] = {
    ...prevData,
    ...changes
  }

  return products[index]
}

export const findProducts = (dto: FindProductDto): Product[] => {
  // dto.color = "blue"
  // dto.isNew = true
  // dto.tags = []
  // dto.tags?.pop()
  // dto.tags?.push()

  return products
}
