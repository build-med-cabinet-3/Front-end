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
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </>
  );
};
export default connect(state => state, actionCreators)(ReviewCard);
