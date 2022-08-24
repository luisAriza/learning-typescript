import { Product } from "../models/product.model";
import { Category } from "../models/category.model";

// Omit
export interface CreateProductDto extends Omit<Product, "id" | "category"> {
  categoryId: Category["id"]
}

// Partial
export interface UpdateProductDto extends Partial<CreateProductDto> { }
