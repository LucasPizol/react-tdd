import { Customer, Customers } from "../database/customers";
import { IApiService } from "./api.service";

export interface ILoadCustomerService {
  loadCustomers(): Promise<Array<Customer.Entity>>;
}
export interface IAddCustomerService {
  addCustomer(customer: Customer.Add): Promise<Customer.Entity>;
}

export class CustomerService
  implements ILoadCustomerService, IAddCustomerService
{
  constructor(private readonly apiService: IApiService) {}

  async addCustomer(customer: Customer.Entity): Promise<Customer.Entity> {
    this.apiService.post("/customers", customer);
    await new Promise((res) => setTimeout(() => res(true), 500));

    Customers.push(customer);

    return {
      ...customer,
      id: Math.floor(Math.random() * 100),
    };
  }

  async loadCustomers(): Promise<Array<Customer.Entity>> {
    this.apiService.get("/customers");
    await new Promise((res) => setTimeout(() => res(true), 500));
    return Customers;
  }
}
