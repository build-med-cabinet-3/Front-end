import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewList(review) {
  return (
    <div>
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
