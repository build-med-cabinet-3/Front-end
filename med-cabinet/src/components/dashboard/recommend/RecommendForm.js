import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const RecommendForm = ({
  errors,
  touched,
  values,
  status,
  history,
  postRecForm
}) => {
  const handleSubmit = e => {
    console.log("this is in handleSubmit Recommendations Form", values);
    e.preventDefault();
    postRecForm(values, history);
  };
  return (
    <div className="form-container">
      <Form className="recommendation-form" onSubmit={handleSubmit}>
        <label className="recommend-label"> Text: </label>
        <Field
          action=""
          method="post"
          type="text"
          name="text"
          placeholder="text"
        />
        {touched.text && errors.text && (
          <span className="error"> {errors.text} </span>
        )}
        <label className="recommend-label"> Strain: </label>
        <Field
          action=""
          method="post"
          component="select"
          name="strain"
          placeholder="Strain"
        >
          <option>Please Select a Strain</option>
          <option value="Indica">Indica</option>
          <option value="Sativa">Sativa</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Skunk">Skunk</option>
        </Field>
        {touched.strain && errors.strain && (
          <span className="error"> {errors.strain} </span>
        )}
        <button>Submit</button>
      </Form>
    </div>
  );
};

const FormikRecommendForm = withFormik({
  mapPropsToValues({ strain, text }) {
    return {
      strain: strain || "",
      text: text || ""
    };
  },

  validationSchema: Yup.object().shape({
    strain: Yup.string().oneOf(["Indica", "Sativa", "Hybrid", "Skunk"]),
    text: Yup.string()
  })
})(RecommendForm);

export default connect(state => state, actionCreators)(FormikRecommendForm);
