export const createProduct = (
  id: string | number,
  isNew?: boolean,
  // Parámetro opcional
  stock?: number
) => {
  return {
    id,
    // isNew: isNew || true,
    // stock: stock || 10
    isNew: isNew ?? true,
    stock: stock ?? 10
  }
}

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, true)
console.log("p1", p1);

const p2 = createProduct(2)
console.log("p2", p2);

const p3 = createProduct(3, false, 0)
console.log("p3", p3);
