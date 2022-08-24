import { faker } from "@faker-js/faker"
import { Product } from "../models/product.model"
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto"

export class ProductMemoryService {
  private products: Product[] = []

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl()
      }
    }

    return this.add(newProduct)
  }

  add(product: Product) {
    this.products.push(product)

    return product
  }

  update(id: Product["id"], changes: UpdateProductDto): Product {
    const index = this.products.findIndex(e => e.id === id)
    const prevData = this.products[index]

    this.products[index] = {
      ...prevData,
      ...changes
    }

    return this.products[index]
  }
  findId(id: Product["id"]) {
    return this.products.find(e => e.id === id)
  }
}
