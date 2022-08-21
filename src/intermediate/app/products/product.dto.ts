import { Product } from "./product.model";

// Omit
export interface CreateProductDto extends Omit<Product, "id" | "size" | "createAt" | "updateAt"> {
  weight: number | string
}
// Pick
export interface CreateProductDto2 extends Pick<Product, "id" | "size" | "createAt" | "updateAt"> {
  weight: number | string
}
