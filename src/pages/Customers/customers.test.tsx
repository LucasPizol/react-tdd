import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, test } from "vitest";
import { Customers } from "../../database/customers";
import { ILoadCustomerService } from "../../services/customer.service";
import { CustomerView } from "./CustomerView";
import { useCustomer } from "./useCustomer";

class CustomerServiceSpy implements ILoadCustomerService {
  async loadCustomers() {
    return await Promise.resolve(Customers);
  }
}

describe("Customers", () => {
  test("should render the Customers component", async () => {
    let sut = new CustomerServiceSpy();

    const { result, waitFor } = renderHook(() => useCustomer(sut));

    await waitFor(() => result.current.loading === true);
    await waitFor(() => result.current.loading === false);
    await waitFor(() => result.current.customers.length > 0);

    console.log(result.current);

    const page = render(<CustomerView {...result.current} />);

    expect(page).toBeDefined();
    expect(page.getByText("Customers")).toBeInTheDocument();
    expect(
      page.getByText("Customer 1 - example@example.com")
    ).toBeInTheDocument();
    expect(
      page.getByText("Customer 2 - example2@example.com")
    ).toBeInTheDocument();
    expect(
      page.getByText("Customer 3 - example3@example.com")
    ).toBeInTheDocument();
  });
});
