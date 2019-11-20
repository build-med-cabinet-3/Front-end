import React from "react";
import { connect } from "react-redux";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import * as actionCreators from "../../../actions/actionCreators";

const ReviewForm = ({
  errors,
  touched,
  values,
  status,
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
  // }, [reviewToEdit]);

  return (
    <div className="review-form">
      <Form onSubmit={handleSubmit}>
        <label className="review-label">Strain:</label>
        <Field
          className="review-field"
          type="text"
          name="strain"
          placeholder="Strain"
        />
        {touched.strain && errors.strain && (
          <span className="error">{errors.strain}</span>
        )}
        <label className="review-label">Family:</label>
        <Field
          className="review-field"
          type="text"
          name="family"
          placeholder="Family"
        />
        {touched.family && errors.family && (
          <span className="error">{errors.family}</span>
        )}
        <label className="review-label">Potency:</label>
        <Field
          className="review-field"
          type="text"
          name="potency"
          placeholder="Potency"
        />
        {touched.potency && errors.potency && (
          <span className="error">{errors.potency}</span>
        )}
        <label className="review-label">Feelings:</label>
        <Field
          className="review-field"
          type="text"
          name="feelings"
          placeholder="Feelings"
        />
        {touched.feelings && errors.feelings && (
          <span className="error">{errors.feelings}</span>
        )}
        <label className="review-label">Helps With:</label>
        <Field
          className="review-field"
          type="text"
          name="helpsWith"
          placeholder="Helps With"
        />
        {touched.helpsWith && errors.helpsWith && (
          <span className="error">{errors.helpsWith}</span>
        )}
        <label className="review-label">Negatives:</label>
        <Field
          className="review-field"
          type="text"
          name="negatives"
          placeholder="Negatives"
        />
        {touched.negatives && errors.negatives && (
          <span className="error">{errors.negatives}</span>
        )}
        <label className="review-label">THC Content:</label>
        <Field
          className="review-field"
          type="text"
          name="thcContent"
          placeholder="THC Content"
        />
        {touched.thcContent && errors.thcContent && (
          <span className="error">{errors.thcContent}</span>
        )}
        <label className="review-label">CBD Content:</label>
        <Field
          className="review-field"
          type="text"
          name="cbdContent"
          placeholder="CBD Content"
        />
        {touched.cbdContent && errors.cbdContent && (
          <span className="error">{errors.cbdContent}</span>
        )}
        <label className="review-label">Description:</label>
        <Field
          className="review-field"
          type="text"
          name="description"
          placeholder="Description"
        />
        {touched.description && errors.description && (
          <span className="error">{errors.description}</span>
        )}
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikReviewForm = withFormik({
  mapPropsToValues({
    strain,
    family,
    potency,
    feelings,
    helpsWith,
    negatives,
    thcContent,
    cbdContent,
    description
  }) {
    return {
      strain: strain || "",
      family: family || "",
      potency: potency || "",
      feelings: feelings || "",
      helpsWith: helpsWith || "",
      negatives: negatives || "",
      thcContent: thcContent || "",
      cbdContent: cbdContent || "",
      description: description || ""
    };
  },
  validationSchema: Yup.object().shape({
    strain: Yup.string(),
    family: Yup.string(),
    potency: Yup.string(),
    feelings: Yup.string(),
    helpsWith: Yup.string(),
    negatives: Yup.string(),
    thcContent: Yup.string(),
    cbdContent: Yup.string(),
    description: Yup.string()
  })
})(ReviewForm);

const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(FormikReviewForm);
