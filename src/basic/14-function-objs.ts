(() => {
  const login = (data: { email: string, password: string }) => {
    console.log(`-Email: ${data.email}`);
    console.log(`-Password: ${data.password}`);
  }
  // login("luar@gmail.com", "12345")
  login({
    email: "luar@gmail.com",
    password: "12345"
  })

  type Data = { title: string, price: number, stock: number }

  const products: Data[] = []

  const addProduct = (data: Data) => {
    products.push(data)
  }

  addProduct({
    title: "Mouse",
    price: 15.99,
    stock: 5
  })

  console.log(products[0].title)
  console.log(products[0].price)
  console.log(products[0].stock)
})()
