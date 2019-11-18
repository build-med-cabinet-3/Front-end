import React from "react";

function ReviewList(review) {
  return (
    <div>
      {review.map((review, index) => (
        <ul key={review.id}>
          <li> Strain: {review.sName}</li>
          <li> Review Date: {review.date} </li>
          <li> Review Comments: {review.comments} </li>
        </ul>
      ))}
    </div>
  );
}
export default ReviewList;
