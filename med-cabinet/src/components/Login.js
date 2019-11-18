import React from "react";
import { Form, Field, withFormik } from "formik";
import useForm from "../hooks/useForm";
import * as Yup from "yup";

const Login = ({ errors, touched, status }, props) => {
  const { handleLoginSubmit, values } = useForm(LoginSubmit);

  function LoginSubmit() {
    props.history.push("/dashboard");
  }

  return (
    <div className="login-container">
      <Form className="Login-form" onSubmit={handleLoginSubmit}>
        <label className="login-label">Email:</label>
        <Field
          className="login-field"
          type="email"
          name="email"
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <span className="error">{errors.email}</span>
        )}
        <label className="login-label">Password:</label>
        <Field
          className="login-field"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <span className="error">{errors.password}</span>
        )}
        <button> Login </button>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Must provide a valid Email Address"),
    password: Yup.string()
      .min(4, "Need at least 4 characters")
      .required("Password is required")
  })
})(Login);
//!!! withFormik validation and Yup Error Messages //

export default FormikLoginForm;
