import { render, screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";
import { describe, expect, test } from "vitest";
import { CustomerForm } from ".";
import { Customer } from "../../../../database/customers";
import { IAddCustomerService } from "../../../../services/customer.service";
import { CustomerFormView } from "./CustomerFormView";
import { useCustomerForm } from "./useCustomerForm";

class CustomerServiceSpy implements IAddCustomerService {
  async addCustomer(customer: Customer.Add) {
    return await Promise.resolve({
      id: 1,
      name: customer.name,
      email: customer.email,
    });
  }
}

describe("CustomerForm", () => {
  test("should render the CustomerForm component", () => {
    const page = render(<CustomerForm refetchCustomers={() => {}} />);

    expect(page).toBeDefined();
    expect(screen.getByText("Add Customer")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  test("should submit the form", async () => {
    const { result } = renderHook(() =>
      useCustomerForm(new CustomerServiceSpy(), () => {})
    );

    render(<CustomerFormView {...result.current} />);

    const name = screen.getByPlaceholderText("Name") as HTMLInputElement;
    const email = screen.getByPlaceholderText("Email") as HTMLInputElement;
    const button = screen.getByText("Add Customer");

    await userEvent.type(name, "John Doe");
    await userEvent.type(email, "teste@teste.com");

    await userEvent.click(button);

    expect(name.value).toBe("");
    expect(email.value).toBe("");
  });
});
