export const createProduct = (
  id: string | number,
  // Parámetros por defecto
  isNew: boolean = true,
  stock: number = 10
) => {
  return {
    id,
    isNew,
    stock
  }
}

const p1 = createProduct(1, true)
console.log("p1", p1);

const p2 = createProduct(2)
console.log("p2", p2);

const p3 = createProduct(3, false, 0)
console.log("p3", p3);
