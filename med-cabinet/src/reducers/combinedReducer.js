import * as types from "../actions/actionTypes";

const user = JSON.parse(localStorage.getItem("user"));

export const initialState = {
  first_name: user ? user.first_name : "",
  lastName: user ? user.lastName : "",
  email: user ? user.email : "",
  password: "",
  reviewList: []
};

export const combinedReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_UP:
      return state;
    case types.LOGIN:
      return initialState;
    case types.GET_REVIEW:
      return {
        ...state,
        reviewList: action.payload
      };
    case types.ADD_REVIEW:
      return {
        ...state,
        reviewList: [action.payload, ...state.reviewList]
      };
    case types.EDIT_REVIEW:
      return {
        ...state,
        reviewList: state.reviewList.map(review =>
          review.id === action.payload.id ? action.payload : review
        )
      };
    case types.DELETE_REVIEW:
      return {
        ...state,
        reviewList: state.reviewList.filter(
          review => review.id !== action.payload
        )
      };
    // case types.POST_FORM_RECOMMENDATION:
    // return
    //   ...state;
    // case types.GET_RECOMMENDATION:
    // return
    //   ...state;
    default:
      return state;
  }
};

export default [combinedReducer, initialState];
