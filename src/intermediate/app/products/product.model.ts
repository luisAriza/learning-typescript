import { BaseModel } from "../base.model"
import { Category } from "../categories/category.model"

export type Sizes = "S" | "M" | "L" | "XL"

export interface Product extends BaseModel {
  title: string
  image: string
  description: string
  price: number | string
  stock: number | string
  color: string
  size?: Sizes
  category: Category
  isNew: boolean
  tags: string[]
}
