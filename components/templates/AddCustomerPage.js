import React, { useState } from "react";

function AddCustomerPage() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    date: "",
    products: [],
  });
  return (
    <div className="customer-page">
      <h4>Add New Customer</h4>
    </div>
  );
}

export default AddCustomerPage;
