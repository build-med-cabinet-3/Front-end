import React from "react";
import { connect } from "react-redux";
import jwt_decode from "jwt-decode";

import * as actionCreators from "../../../actions/actionCreators";

const RecommendCard = ({ recommended, saveRecommended }) => {
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);

  const userRecommended = Object.assign(recommended, decoded);
  console.log(userRecommended);
  // const onSave = e => {
  //   saveRecommended(recommended.strain_id);
  // };
  return (
    <div className="recommended-card-container">
      <p>{recommended.Recommendation}</p>
      <p>{recommended.strain}</p>
      <p>{recommended.Score}</p>
      <p>{recommended.Type}</p>
      <p>{recommended.THC_Percent}</p>
      <p>{recommended.CBD}</p>
      <p>{recommended.effect}</p>
      <p>{recommended.flavor}</p>
      <p>{recommended.Description1}</p>
      <p>{recommended.medical_effect_plain}</p>
      <button onClick={() => saveRecommended(recommended.strain_id)}>
        Save Recommendation
      </button>
    </div>
  );
};

export default connect(state => state, actionCreators)(RecommendCard);
