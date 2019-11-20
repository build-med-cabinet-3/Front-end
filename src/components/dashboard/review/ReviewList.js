import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

export const ReviewList = ({ getReviewList }) => {
  // useEffect(() => {
  //   getReviewList();
  // }, []);
  return (
    <div className="review-list-container">
      <ReviewForm />
      <ReviewCard />
      {/* {review.map((review, index) => (
        <ReviewCard
          key={index}
          sName={review.sName}
          date={review.date}
          comments={review.Comments}
        />
      ))} */}
    </div>
  );
};
const mapStateToProps = state => state;

export default connect(mapStateToProps, actionCreators)(ReviewList);
