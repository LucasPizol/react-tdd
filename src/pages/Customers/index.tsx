import { ApiService } from "../../services/api.service";
import { CustomerService } from "../../services/customer.service";
import { CustomerView } from "./CustomerView";
import { useCustomer } from "./useCustomer";

export const CustomerPage = () => {
  const customerService = new CustomerService(new ApiService());
  const methods = useCustomer(customerService);

  return <CustomerView {...methods} />;
};
