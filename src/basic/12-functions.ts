(() => {
  type Sizes = "S" | "M" | "L" | "XL"

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJson("Balón", new Date(), 5)

  console.log("product1", product1);
  console.log("product1", product1.title);
  console.log("product1", product1.createdAt);
  console.log("product1", product1.stock);
})()
