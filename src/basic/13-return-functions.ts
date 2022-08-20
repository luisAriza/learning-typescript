(() => {
  const calcTotal = (prices: number[]): string => {
    let total = 0
    prices.forEach(e => total += e)

    return total.toString()
  }
  const printTotal = (prices: number[]): void => {
    const total = calcTotal(prices)
    console.log("Total: ", total)
  }

  printTotal([4, 2, 8, 3])
})()
