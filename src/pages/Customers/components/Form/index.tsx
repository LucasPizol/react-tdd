import { ApiService } from "../../../../services/api.service";
import { CustomerService } from "../../../../services/customer.service";
import { CustomerFormView } from "./CustomerFormView";
import { useCustomerForm } from "./useCustomerForm";

interface CustomerFormProps {
  refetchCustomers: () => void;
}

export const CustomerForm = ({ refetchCustomers }: CustomerFormProps) => {
  const customerService = new CustomerService(new ApiService());
  const methods = useCustomerForm(customerService, refetchCustomers);

  return <CustomerFormView {...methods} />;
};
