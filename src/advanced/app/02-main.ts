import { ProductMemoryService } from "./services/product-memory.service"

const productService = new ProductMemoryService()

productService.create({
  title: "product 1",
  price: 100,
  description: "bla bla bla",
  categoryId: 12,
  images: []
})

const products = productService.getAll()
const productId = products[0].id

productService.update(productId, {
  title: "producto 1: Actualizado"
})

const rta = productService.find(productId)

console.log("rta", rta);
