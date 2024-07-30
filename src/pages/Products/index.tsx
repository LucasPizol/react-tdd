import { ApiService } from "../../services/api.service";
import { ProductService } from "../../services/product.service";
import { ProductView } from "./ProductView";
import { useProducts } from "./useProducts";

export const ProductPage = () => {
  const productService = new ProductService(new ApiService());
  const methods = useProducts(productService);

  return <ProductView {...methods} />;
};
