import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../actions/actionCreators";

import RecommendForm from "./RecommendForm";
import RecommendCard from "./RecommendCard";

export const RecommendList = ({ getRecList, recommendList }) => {
  // if (!recommendList) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    <div className="recommend-container">
      <RecommendForm />
      {recommendList.map(recommended => (
        <RecommendCard key={recommended.id} recommended={recommended} />
      ))}
    </div>
  );
};

export default connect(state => state, actionCreators)(RecommendList);
