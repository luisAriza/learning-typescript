import { ProductHttpService } from "./services/product-http.service"

(async () => {

  const productService = new ProductHttpService()

  const products = await productService.getAll()
  console.log("---".repeat(10))
  console.log("total", products.length)
  console.log("getAll", products.map(e => e.id))

  const productId = products[0].id
  await productService.update(productId, {
    title: "nuevo titulo",
    price: 1000
  })
  console.log("---".repeat(10))
  console.log("update", products.map(e => `${e.title} = ${e.price}`))

  const product = await productService.find(productId)
  console.log("---".repeat(10))
  console.log("find", product);

})()

