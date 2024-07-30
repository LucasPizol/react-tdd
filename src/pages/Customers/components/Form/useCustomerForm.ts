import { useState } from "react";
import { IAddCustomerService } from "../../../../services/customer.service";

export const useCustomerForm = (
  customerService: IAddCustomerService,
  refetchCustomers: () => void
) => {
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    setFields({
      name: "",
      email: "",
    });

    await customerService.addCustomer(fields);

    refetchCustomers();
    setLoading(false);
  };

  return { handleSubmit, loading, fields, handleChange };
};
