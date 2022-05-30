import React, { Children } from "react";
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
        terms: Yup.boolean().oneOf(
          [true],
          "Please check the terms and conditions"
        ),
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
        <MyTextarea
          label="Intro"
          name="intro"
          placeholder="Introduce yourself..."
        ></MyTextarea>
        <MySelectBox label="Your job" name="job" placeholder="Select your job">
          <option value="pm">Project Manager</option>
          <option value="ba">Business Analyst</option>
        </MySelectBox>
        <MyCheckbox name="terms">I accept the terms and conditions</MyCheckbox>
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
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        {...field}
        {...props}
        className="p-4 rounded-md border border-gray-100 outline-none"
      ></input>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        t
        {...field}
        {...props}
        className="p-4 rounded-md border border-gray-100 outline-none h-[150px] resize-none"
      ></textarea>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        {...field}
        {...props}
        className="p-4 rounded-md border border-gray-100 outline-none"
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label
        htmlFor={props.id || props.name}
        className="flex items-center gap-x-2"
      >
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
