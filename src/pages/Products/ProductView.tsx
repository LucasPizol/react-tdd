import { useProducts } from "./useProducts";

export const ProductView = ({ products }: ReturnType<typeof useProducts>) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};
