import axios from "axios"
import { Category } from "../models/category.model"
import { Product } from "../models/product.model"

export class BaseHttpService<TypeClass> {
  // data: TypeClass[] = []
  constructor(
    private url: string
  ) { }

  async getAll(): Promise<TypeClass[]> {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data
  }
}

// const service = new BaseHttpService<string>()
// service.getAll()

// const service1 = new BaseHttpService<Category>()
// service1.getAll()

(async () => {
  const url = "https://api.escuelajs.co/api/v1/products"
  const productService = new BaseHttpService<Product>(url)

  const rta = await productService.getAll()
  console.log("respuesta", rta);

  const url2 = "https://api.escuelajs.co/api/v1/categories"
  const categoryService = new BaseHttpService<Category>(url2)

  const rta2 = await categoryService.getAll()
  console.log("respuesta 2", rta2);
})()
