import { useFetch } from "../../hooks/useFetch";
import { ILoadCustomerService } from "../../services/customer.service";

export const useCustomer = (customerService: ILoadCustomerService) => {
  const { data, refetch, loading } = useFetch(
    () => customerService.loadCustomers(),
    []
  );

  return { customers: data, refetch, loading };
};
