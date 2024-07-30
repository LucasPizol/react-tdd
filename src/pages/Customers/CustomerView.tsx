import { CustomerForm } from "./components/Form";
import { useCustomer } from "./useCustomer";

export const CustomerView = ({
  customers,
  refetch,
}: ReturnType<typeof useCustomer>) => {
  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.name} - {customer.email}
          </li>
        ))}
      </ul>

      <CustomerForm refetchCustomers={refetch} />
    </div>
  );
};
