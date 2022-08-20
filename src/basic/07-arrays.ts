(() => {
  let prices = [10, 32, 42, 50, 22, 4, 5, 12]
  // prices.push("65")
  // prices.push(true)
  // prices.push({})
  prices.push(45)

  let mixed: (number | string | boolean)[] = ["Patines", true, 2]
  mixed.push(false)

  console.log("mixed", mixed);

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
  let newNumbers = numbers.map(e => e * 2)

  console.log("numbers", newNumbers);
})()
