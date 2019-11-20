import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid black;
`;

const Span = styled.span`
  font-weight: bold;
`;

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
    <h1>Its Working!!!</h1>
    // <Card>
    //
    //   <h2> {review.sName} </h2>
    //   <div>
    //     <p>
    //       <Span> Review Date: </Span> {review.date}
    //     </p>
    //     <p>
    //       <Span> Reveiw Comments: </Span> {review.comments}
    //     </p>
    //     <button onClick={onEdit}>Edit</button>
    //     <button onClick={onDelete}>Delete</button>
    //   </div>
    // </Card>
  );
};
export default ReviewCard;
