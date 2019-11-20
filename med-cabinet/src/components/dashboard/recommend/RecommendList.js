import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

import RecommendForm from "./RecommendForm";
import RecommendCard from "./RecommendCard";

export const RecommendList = ({ getRecList }) => {
  useEffect(() => {
    getRecList();
  }, []);
  return (
    <div className="recommend-container">
      <RecommendForm />
      <RecommendCard />
    </div>
  );
};

export default connect(state => state, actionCreators)(RecommendList);
