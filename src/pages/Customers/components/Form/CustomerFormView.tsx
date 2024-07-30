import { useCustomerForm } from "./useCustomerForm";

export const CustomerFormView = ({
  handleSubmit,
  loading,
  fields,
  handleChange,
}: ReturnType<typeof useCustomerForm>) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        value={fields.name}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={fields.email}
      />
      <button type="submit" disabled={loading}>
        Add Customer
      </button>
    </form>
  );
};
