import React from "react";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";

function ReviewList(review) {
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
}
export default ReviewList;
