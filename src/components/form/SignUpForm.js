import React from "react";

const SignUpForm = () => {
  return (
    <div className="p-10 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100 outline-none"
        />
      </div>
    </div>
  );
};

export default SignUpForm;
