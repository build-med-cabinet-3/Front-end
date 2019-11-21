import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

export const ReviewList = ({ getReviewList, reviewList }) => {
  useEffect(() => {
    getReviewList();
  }, [getReviewList]);
  return (
    <div className="review-list-container">
      <ReviewForm />
      <ReviewCard />
      {reviewList.map(review => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};
const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(ReviewList);
