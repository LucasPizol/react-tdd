import { useFetch } from "../../hooks/useFetch";
import { IProductService } from "../../services/product.service";

export const useProducts = (productService: IProductService) => {
  const { data } = useFetch(() => productService.loadProducts(), []);

  return { products: data };
};
