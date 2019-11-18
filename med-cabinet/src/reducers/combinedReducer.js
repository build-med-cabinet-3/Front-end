import * as types from "../actions/actionTypes";

export const combinedReducer = (state, action) => {
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

export const initialState = [
  {
    signupData: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  },
  {
    loginData: {
      email: "",
      password: ""
    }
  },
  // {
  //   recFormData = [
  //       {
  //           questionOne: '',
  //           questionTwo: '',
  //           questionThree: '',
  //           questionFour: '',
  //           questionFive: '',
  //       },
  //   ]
  // },
  //   recListData = [],
  {
    reviewFormData: {
      id: Date.now(),
      strain: "",
      family: "",
      thcPotency: "",
      cbdPotency: "",
      dosage: "",
      helpsWith: "",
      description: "",
      rating: ""
    }
  },
  {
    reviewList: []
  }
];

export default [combinedReducer, initialState];
