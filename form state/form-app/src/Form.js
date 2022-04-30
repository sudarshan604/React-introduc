import React from "react";

function Form() {
  const [name, setName] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isFriendly: true,
    employ: "",
    selectColor: "",
  });

  console.log(name.selectColor);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setName((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        name="firstName"
        value={name.firstName}
      />
      <input
        type="text"
        onChange={handleChange}
        name="lastName"
        value={name.lastName}
      />
      <input
        type="email"
        onChange={handleChange}
        name="email"
        value={name.email}
      />

      <textarea value={name.comments} name="comments" onChange={handleChange} />

      <input
        type="checkbox"
        name="isFriendly"
        id="isFriendly"
        checked={name.isFriendly}
        onChange={handleChange}
      />

      <label htmlFor="isFriendly">Are you Friendly?</label>

      <fieldset>
        <legend>Currently employment status</legend>
        <label htmlFor="unemployed">Unemployed</label>
        <input
          type="radio"
          id="unemployed"
          name="employ"
          value="unemployed"
          checked={name.employ === "unemployed"}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="partTime">partTime</label>
        <input
          type="radio"
          id="partTime"
          name="employ"
          value="partTime"
          checked={name.employ === "partTime"}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="fullTime">fullTime</label>
        <input
          type="radio"
          id="fullTime"
          name="employ"
          value="fullTime"
          checked={name.employ === "fullTime"}
          onChange={handleChange}
        />
      </fieldset>

      <label htmlFor="selection">What is your favourite color?</label>
      <select
        id="selection"
        name="selectColor"
        value={name.selectColor}
        onChange={handleChange}
      >
        <option value="Red">Red</option>
        <option value="blue">blue</option>
        <option value="Green">Green</option>
      </select>
      <br />
      <button>Submit</button>
    </form>
  );
}

export default Form;
