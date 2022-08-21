import { Product } from "./product.model";

// Omit
export interface CreateProductDto extends Omit<Product, "id" | "size" | "createAt" | "updateAt"> {
  weight: number | string
}
// Pick
export interface CreateProductDto2 extends Pick<Product, "title" | "description" | "price"> {
  weight: number | string
}

// Partial
export interface UpdateProductDto extends Partial<CreateProductDto> { }
// Required
export interface UpdateProductDto2 extends Required<CreateProductDto> { }
