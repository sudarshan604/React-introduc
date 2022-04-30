import React, { useState } from "react";

function Form() {
  const [name, setName] = React.useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(event) {
    setName((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div>
      <input type="text" onChange={handleChange} name="firstName" />
      <input type="text" onChange={handleChange} name="lastName" />
    </div>
  );
}

export default Form;
