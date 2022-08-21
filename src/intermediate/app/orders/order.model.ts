import { Product } from "../products/product.model"
import { User } from "../users/user.model"

export interface Order {
  id: number | string
  createAt: Date
  updateAt: Date
  products: Product[]
  user: User
}
