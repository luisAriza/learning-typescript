import { faker } from "@faker-js/faker"
import { Product } from "../models/product.model"
import { CreateProductDto, UpdateProductDto } from "../dtos/product.dto"
import { ProductService } from "../models/product-service.model"

export class ProductMemoryService implements ProductService {
  private products: Product[] = []

  getAll(): Product[] {
    return this.products
  }

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

  private add(product: Product): Product {
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
  find(id: Product["id"]): Product | undefined {
    return this.products.find(e => e.id === id)
  }
}
