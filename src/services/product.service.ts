import { ProductModel, Products } from "../database/products";
import { IApiService } from "./api.service";

export interface IProductService {
  loadProducts(): Promise<ProductModel[]>;
}

export class ProductService implements IProductService {
  constructor(private readonly apiService: IApiService) {}

  async loadProducts() {
    this.apiService.get("/products");
    await new Promise((res) => setTimeout(() => res(true), 500));
    return Products;
  }
}
