import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import * as actionCreators from "../../../actions/actionCreators";

const ReviewForm = ({
  errors,
  touched,
  values,
  status,
  getReviewList,
  addReview,
  editReview,
  setValues,
  resetForm,
  reviewToEdit
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (reviewToEdit > 0) {
      editReview(values);
    } else {
      addReview(values);
    }
    resetForm();
  };

  // useEffect(() => {
  //   if (reviewToEdit > 0) {
  //     setValues(reviewList.find(review => review.id === reviewToEdit));
  //   }
  // });

  return (
    <div className="review-form">
      <Form onSubmit={handleSubmit}>
        <Field type="text" name="sName" placeholder="Strain Name" />
        {touched.sName && errors.sName && (
          <p className="error-display"> {errors.sName} </p>
        )}
        <Field type="text" name="date" placeholder="Date" />
        {touched.date && errors.date && (
          <p className="error-display"> {errors.date} </p>
        )}
        <Field type="text" name="comments" placeholder="Enter Review Details" />
        {touched.comments && errors.comments && (
          <p className="error-display"> {errors.comments} </p>
        )}
        <button>Submit</button>
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
      .max(10, "Date cannot be longer than 10 characters")
      .required("Date is required."),
    comments: Yup.string()
      .min(4, "Review comments must be at least 4 characters.")
      .required("Review comments is required.")
  })
})(ReviewForm);
