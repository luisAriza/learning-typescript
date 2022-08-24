import axios from "axios"

(async (): Promise<void> => {

  function delay(time: number): Promise<boolean> {
    const promise = new Promise<boolean>((resolve): void => {
      setTimeout((): void => {
        resolve(true)
      }, time);
    });
    return promise;
  }

  async function getProductsAsync() {
    const rta = await axios.get("https://api.escuelajs.co/api/v1/products")

    return rta.data
  }

  console.log("---".repeat(10))
  const rta = await delay(3000)
  console.log("rta", rta)

  console.log("---".repeat(20))
  const products = await getProductsAsync()
  console.log("products", products)
})();
