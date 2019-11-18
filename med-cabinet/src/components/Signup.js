import React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";

import useForm from "../hooks/useForm";

const Signup = ({ errors, touched, status }, props) => {
  const { handleSignupSubmit, values } = useForm(signupSubmit);

  function signupSubmit() {
    props.history.push("/login");
  }

  return (
    <div className="signup-container">
      <Form className="signup-form" onSubmit={handleSignupSubmit}>
        <div className="brand"></div>
        <label className="signup-label">First Name:</label>
        <Field
          className="signup-field"
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <small>(Between 2-24 characters)</small>
        {touched.firstName && errors.firstName && (
          <span className="error">{errors.firstName}</span>
        )}
        <label className="signup-label">Last Name:</label>
        <Field
          className="signup-field"
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <small>(Between 2-24 characters)</small>
        {touched.lastName && errors.lastName && (
          <span className="error">{errors.lastName}</span>
        )}
        <label className="signup-label">Email:</label>
        <Field
          className="signup-field"
          type="email"
          name="email"
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <span className="error">{errors.email}</span>
        )}
        <label className="signup-label">Password:</label>
        <Field
          className="signup-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        <small>(Must be longer than 4 characters)</small>
        {touched.password && errors.password && (
          <span className="error">{errors.password}</span>
        )}
        <button className="btn" type="submit">
          SIGN UP
        </button>
      </Form>
      <NavLink className="form-link" to="/login">
        Already have an account?
      </NavLink>
    </div>
    //!!! SIGN UP Form with validation using Yup for Formik //
  );
};

// withFormik validation and Yup Error Messages //
const FormikSignupForm = withFormik({
  mapPropsToValues({ firstName, lastName, email, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Need at least 2 characters")
      .max(24, "No more than 24 characters")
      .required("User Name is required"),
    lastName: Yup.string()
      .min(2, "Need at least 2 characters")
      .max(24, "No more than 24 characters")
      .required("User Name is required"),
    phoneNumber: Yup.string(),
    password: Yup.string()
      .min(4, "Need at least 4 characters")
      .required("Password is required")
  })
})(Signup);
//!!! withFormik validation and Yup Error Messages //

export default FormikSignupForm;
