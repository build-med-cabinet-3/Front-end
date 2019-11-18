import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
const apiEndPoint = "";
const ReviewForm = ({ values, errors, touched, status }) => {
  const [review, setReview] = useState([
    {
      sName: "",
      date: "",
      comments: ""
    }
  ]);

  useEffect(() => {
    status && setReview(review => [...review, status]);
  }, [status]);

  return (
    <div className="review-form">
      <Form>
        <Field type="text" name="sName" placeholder="Strain Name" />
        {touched.sName && errors.sName && (
          <p className="error-display"> {errors.sName} </p>
        )}
        <Field type="text" name="date" placeholder="Date" />
        {touched.date && errors.date && (
          <p className="error-display"> {errors.date} </p>
        )}
        <Field type="text" name="comments" placeholder="Enter Review Datails" />
        {touched.comments && errors.comments && (
          <p className="error-display"> {errors.comments} </p>
        )}
        <button> Submit Review </button>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ sName, date, comments }) {
    return {
      sName: sName || "",
      date: date || "",
      comments: comments || ""
    };
  },
  validationSchema: Yup.object().shape({
    sName: Yup.string()
      .min(2, "Strain Name must be at least 2 characters.")
      .required("Strain Name is required."),
    date: Yup.string()
      .min(8, "Date must be at least 8 characters.")
      .required("Date is required."),
    comments: Yup.string()
      .min(4, "Review comments must be at least 4 characters.")
      .required("Review comments is required.")
  }),
  handleSubmit(values, { resetForm, setStatus }) {
    axios
      .post(apiEndPoint, values)
      .then(response => {
        setStatus(response.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(ReviewForm);
