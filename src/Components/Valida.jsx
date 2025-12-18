import { useState } from "react";

function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    age: "",
    errors: {}
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let err = {};

    if (data.name === "") {
      err.name = "Name required";
    }

    if (data.email === "") {
      err.email = "Email required";
    }

    if (data.age === "") {
      err.age = "Age required";
    }

    if (Object.keys(err).length > 0) {
      setData({ ...data, errors: err });
      return;
    }

    console.log(data);
    alert("Saved");

    setData({
      name: "",
      email: "",
      age: "",
      errors: {}
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        Name :
      <input
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <p>{data.errors.name}</p>

      Email :<input
      type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <p>{data.errors.email}</p>

      Age :<input
        name="age"
        value={data.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <p>{data.errors.age}</p>

      <button>Save</button>
    </form>
  );
}

export default Form;
