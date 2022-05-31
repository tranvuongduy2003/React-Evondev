import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schemaValidation = yup.object({
  firstName: yup
    .string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  console.log(useForm());
  const onSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
      }, 5000);
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstname">First name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 rounded-md border border-gray-100 outline-none"
          {...register("firstName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.firstName && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your last name"
          className="p-4 rounded-md border border-gray-100 outline-none"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="p-4 rounded-md border border-gray-100 outline-none"
          {...register("email")}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
