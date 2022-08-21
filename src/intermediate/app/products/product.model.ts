import { Category } from "../categories/category.model"

export type Sizes = "S" | "M" | "L" | "XL"

export interface Product {
  id: number | string
  title: string
  price: number
  stock: number
  createAt: Date
  updateAt: Date
  size?: Sizes
  category: Category
}
