import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

const ReviewCard = ({ review, startEdit, deleteReview }) => {
  const onEdit = e => {
    e.preventDefault();
    startEdit(review.id);
  };
  const onDelete = e => {
    e.preventDefault();
    deleteReview(review.id);
  };

  return (
    <>
      <h1>Its Working!!!</h1>
      <div className="card-container">
        <p>{review.CBD}</p>
        <p>{review.Description1}</p>
        <p>{review.Recommendation}</p>
        <p>{review.Score}</p>
        <p>{review.THC_Percent}</p>
        <p>{review.Type}</p>
        <p>{review.effect}</p>
        <p>{review.flavor}</p>
        <p>{review.medical_effect_plain}</p>
        <p>{review.strain}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  );
};
export default connect(state => state, actionCreators)(ReviewCard);
