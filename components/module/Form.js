import React from "react";
import ItemList from "./ItemList";
import FormInput from "./FormInput";

function Form({ form, setForm }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <FormInput
        name="name"
        type="text"
        label="Name"
        value={form.name}
        onChange={changeHandler}
      />
      <FormInput
        name="lastName"
        type="text"
        label="LastName"
        value={form.lastName}
        onChange={changeHandler}
      />
      <FormInput
        name="email"
        type="text"
        label="Email"
        value={form.email}
        onChange={changeHandler}
      />
      <FormInput
        name="phone"
        type="tel"
        label="Phone"
        value={form.phone}
        onChange={changeHandler}
      />
      <FormInput
        name="address"
        type="text"
        label="Address"
        value={form.address}
        onChange={changeHandler}
      />
      <FormInput
        name="postalCode"
        type="text"
        label="Postal Code"
        value={form.postalCode}
        onChange={changeHandler}
      />
      <FormInput
        name="date"
        type="date"
        label="Date"
        value={form.date}
        onChange={changeHandler}
      />
      <ItemList form={form} setForm={setForm} />
    </div>
  );
}

export default Form;
