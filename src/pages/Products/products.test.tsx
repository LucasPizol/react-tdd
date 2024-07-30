import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, test } from "vitest";
import { Products } from "../../database/products";
import { IProductService } from "../../services/product.service";
import { ProductView } from "./ProductView";
import { useProducts } from "./useProducts";

class ProductServiceSpy implements IProductService {
  async loadProducts() {
    return await Promise.resolve(Products);
  }
}

describe("ProductPage", () => {
  const fakeProducts = Products;

  test("renders the Product View component", () => {
    const page = render(<ProductView products={fakeProducts} />);

    expect(page).toBeDefined();
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Product 3")).toBeInTheDocument();

    screen.debug();
  });

  test("load the products", async () => {
    let sut = new ProductServiceSpy();

    const { result, waitFor } = renderHook(() => useProducts(sut));

    await waitFor(() => {
      const page = render(<ProductView {...result.current} />);

      expect(page).toBeDefined();
      expect(result.current.products).toEqual(fakeProducts);
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
      expect(screen.getByText("Product 3")).toBeInTheDocument();
    });
  });
});
