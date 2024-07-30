export namespace Customer {
  export type Entity = {
    id: number;
    name: string;
    email: string;
  };

  export type Add = {
    name: string;
    email: string;
  };
}

export const Customers: Array<Customer.Entity> = [
  {
    id: 1,
    name: "Customer 1",
    email: "example@example.com",
  },
  {
    id: 2,
    name: "Customer 2",
    email: "example2@example.com",
  },
  {
    id: 3,
    name: "Customer 3",
    email: "example3@example.com",
  },
];
