import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

const Form = () => {
  // const [fullname, setFullname] = useState("");
  // const [message, setMessage] = useState("");
  // const [country, setCountry] = useState("");

  // const handleInputChange = (e) => {
  //   setFullname(e.target.value);
  // };
  // const handleTextareaChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // const handleSelectChange = (e) => {
  //   setCountry(e.target.value);
  // };

  const { values, handleChange: handleInputChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  const [nameError, setNameError] = useState("");

  const handleSubmitForm = (e) => {
    e.preventDefault(); // Khong load lai trang
    if (values.fullname === "") {
      setNameError("Your fullname is empty");
    } else {
      setNameError("");
    }
  };

  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={handleSubmitForm}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={handleInputChange}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        {/* <input type="checkbox" name="hobby" onChange={handleInputChange} /> */}
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
      </form>
      {/* {message}
      <textarea
        className="w-full max-w[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your message"
        name="message"
        onChange={handleTextareaChange}
      ></textarea>
      {country}
      <select name="country" onChange={handleSelectChange}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
