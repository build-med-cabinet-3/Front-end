import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const loginApi = "https://bw-med-cabinet-three.herokuapp.com/user/login";
const registerApi = "https://bw-med-cabinet-three.herokuapp.com/user/register/";

// User Signup
export const userSignup = (userData, history) => dispatch => {
  axiosWithAuth()
    .post(registerApi, userData)
    .then(({ data }) => {
      dispatch({ type: types.SIGN_UP });
      localStorage.setItem("token", data.token);
      history.push("/login");
    })
    .catch(err => console.log(err));
};
//!! User Signup

export const userLogin = (loginData, history) => dispatch => {
  axiosWithAuth()
    .post(loginApi, loginData)
    .then(({ data }) => {
      dispatch({ type: types.LOGIN });
      localStorage.setItem("token", data.token);
      history.push("/dashboard");
    })
    .catch(err => console.log(err));
};

export const logout = () => {
  localStorage.removeItem("token");
  return { type: types.LOGOUT };
};
//!! User Login && Logout

//posting form for recommendation back end
export const postRecForm = recData => dispatch => {
  const stringObjRecData = JSON.stringify(recData);
  axiosWithAuth()
    .post(
      `https://cors-anywhere.herokuapp.com/https://medcab3.herokuapp.com/request/?search=${stringObjRecData}`,
      { body: stringObjRecData }
    )
    //get  && display recommendations from DS API for recommendations page
    .then(({ data }) => {
      dispatch({ type: types.GET_RECOMMENDED, payload: data });
    })
    .catch(err => console.log(err));
};
//!! posting form for recommendations

//post recommendation to backend and display in the ReviewList Component
export const saveRecommended = recommended => dispatch => {
  axiosWithAuth()
    .post("https://bw-med-cabinet-three.herokuapp.com/saved", recommended)
    .then(({ data }) => {
      // NEED AT LEAST ID OF NEW REVIEW FROM BACKEND
      dispatch({ type: types.SAVE_RECOMMENDED, payload: recommended });
    })
    .catch(err => console.log(err));
};
//!!post recommendation to backend

//get ReviewList
export const displayReviewList = review => {
  return { type: types.GET_REVIEW, payload: review };
};
export const getReviewList = () => dispatch => {
  axiosWithAuth()
    .get("https://bw-med-cabinet-three.herokuapp.com/saved")
    .then(({ data }) => {
      dispatch(displayReviewList(data));
    })
    .catch(err => console.log(err));
};
//!! get ReviewList

//edit recommended strain for personal review
export const startEditReview = reviewId => {
  return { type: types.START_EDIT_REVIEW, payload: reviewId };
};

export const editReview = review => dispatch => {
  axiosWithAuth()
    .put(
      `https://bw-med-cabinet-three.herokuapp.com/saved/${review.id}`,
      review
    )
    .then(({ data }) => {
      dispatch({ type: types.EDIT_REVIEW, payload: review });
      // stops editing and allows adding review again
      dispatch({ type: types.START_EDIT_REVIEW, payload: 0 });
    })
    .catch(err => console.log(err));
};
//!! edit recommended strain for personal review

//Delete Review

export const deleteReview = id => dispatch => {
  axiosWithAuth()
    .delete(`https://bw-med-cabinet-three.herokuapp.com/saved/${id}`)
    .then(() => {
      dispatch({ type: types.DELETE_REVIEW, payload: id });
    })
    .catch(err => console.log(err));
};

//!!Delete Review
