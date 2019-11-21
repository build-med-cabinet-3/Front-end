import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

const RecommendCard = ({ recommended, saveRecommended }) => {
  const onSave = e => {
    saveRecommended(recommended.strain_id);
  };
  return (
    <div className="recommended-card-container">
      <p>{recommended.CBD}</p>
      <p>{recommended.Description1}</p>
      <p>{recommended.Recommendation}</p>
      <p>{recommended.Score}</p>
      <p>{recommended.THC_Percent}</p>
      <p>{recommended.Type}</p>
      <p>{recommended.effect}</p>
      <p>{recommended.flavor}</p>
      <p>{recommended.medical_effect_plain}</p>
      <p>{recommended.strain}</p>
      <button onclick="onSave()">Save Recommendation</button>
    </div>
  );
};

export default connect(state => state, actionCreators)(RecommendCard);
