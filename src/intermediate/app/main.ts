import { faker } from '@faker-js/faker';
import { products, addProduct } from "./products/product.service";

for (let i = 0; i < 40; i++) {
  addProduct({
    // id: faker.datatype.uuid(),
    title: faker.commerce.productName(),
    image: faker.image.imageUrl(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(1, 1000, 2, "$"),
    stock: faker.random.numeric(3),
    color: faker.color.human(),
    category: {
      id: faker.datatype.number(),
      name: faker.commerce.department(),
      createAt: faker.date.recent(),
      updateAt: faker.date.recent()
    },
    isNew: faker.datatype.boolean(),
    tags: [
      faker.commerce.product(),
      faker.commerce.productAdjective(),
      faker.commerce.productMaterial()
    ],
    // createAt: faker.date.recent(),
    // updateAt: faker.date.recent(),
    weight: `${faker.random.numeric(2)}kg`
  })
}

console.log("products: ", products);
