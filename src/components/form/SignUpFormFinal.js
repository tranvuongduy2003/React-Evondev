import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstname">First name</label>
          <Field
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-100 outline-none"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Last name</label>
          <Field
            type="text"
            name="lastName"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-100 outline-none"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Email address</label>
          <Field
            type="email"
            name="email"
            placeholder="Enter your email"
            className="p-4 rounded-md border border-gray-100 outline-none"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>
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

export default SignUpFormFinal;
