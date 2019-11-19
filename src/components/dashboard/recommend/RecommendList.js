import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

import RecommendForm from "./RecommendForm";

const recommendList = () => {
  return (
    <div className="recommend-container">
      <RecommendForm />
    </div>
  );
};

export default connect(state => state, actionCreators)(recommendList);
