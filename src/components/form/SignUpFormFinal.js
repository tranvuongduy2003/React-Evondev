import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Must be example@email.com")
          .required("Required"),
        intro: Yup.string().required("Required"),
        job: Yup.string().required("Required"),
        terms: Yup.boolean(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <MyInput
          label="First name"
          name="firstName"
          placeholder="Enter your first name"
        ></MyInput>
        <MyInput
          label="Last name"
          name="lastName"
          placeholder="Enter your last name"
        ></MyInput>
        <MyInput
          label="Email address"
          name="email"
          placeholder="Enter your email"
          type="email"
        ></MyInput>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Intro</label>
          <Field
            as="textarea"
            name="intro"
            placeholder="Introduce yourself..."
            className="p-4 rounded-md border border-gray-100 outline-none h-[150px] resize-none"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Your job</label>
          <Field
            as="select"
            name="job"
            placeholder="Select your job"
            className="p-4 rounded-md border border-gray-100 outline-none"
          >
            <option value="pm">Project Manager</option>
            <option value="ba">Business Analyst</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="terms" className="flex items-center gap-x-2">
            <Field
              type="checkbox"
              name="terms"
              className="p-4 rounded-md border border-gray-100 outline-none"
            ></Field>
            I accept the terms and conditions
          </label>
          <div className="text-sm text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(
    "🚀 ~ file: SignUpFormFinal.js ~ line 131 ~ MyInput ~ meta",
    meta
  );
  console.log(
    "🚀 ~ file: SignUpFormFinal.js ~ line 131 ~ MyInput ~ field",
    field
  );

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <Field
        type="text"
        {...field}
        {...props}
        className="p-4 rounded-md border border-gray-100 outline-none"
      ></Field>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
