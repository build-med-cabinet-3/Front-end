import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

const RecommendCard = ({ recommended, saveRecommended }) => {
  //   const onSave = e => {
  //     saveRecommended(recommended.strain_id);
  //   };
  return (
    <div className="recommended-card-container">
      {/* <h2>{recommended.score}</h2>
      <h2>{recommended.strain_id}</h2> */}
    </div>
  );
};

export default connect(state => state, actionCreators)(RecommendCard);
