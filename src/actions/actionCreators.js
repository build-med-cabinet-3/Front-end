import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const loginApi = "https://bw-med-cabinet-2019.herokuapp.com/user/login";
const registerApi = "https://bw-med-cabinet-2019.herokuapp.com/user/register/";

const dsApi =
  "https://cors-anywhere.herokuapp.com/https://medcab3.herokuapp.com/test/?search=";

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

// User Login && Logout
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
// User Logout

//posting form for recommendations
export const postRecForm = recData => dispatch => {
  console.log("inside postrecform", recData);
  axiosWithAuth()
    .post(
      "https://cors-anywhere.herokuapp.com/https://medcab3.herokuapp.com/test/?search=",
      { body: recData }
    )
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
//!! posting form for recommendations

//get  && display recommendations from DS API for recommendations page
export const displayRecList = recommended => {
  return { type: types.GET_RECOMMENDED, payload: recommended };
};

export const getRecList = () => dispatch => {
  axiosWithAuth()
    .get(dsApi)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
//!! get recommendations from recommendations page

//post recommendation to backend and display in the ReviewList Component
export const setReviewList = recommended => {
  return { type: types.SAVE_RECOMMENDED, payload: recommended };
};

export const saveRecommended = recommended => dispatch => {
  axiosWithAuth()
    .post("", recommended)
    .then(({ data }) => {
      // NEED AT LEAST ID OF NEW PLANT FROM BACKEND
      dispatch(setReviewList(recommended));
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
    .get("")
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
    .put(`${review.id}`, review)
    .then(({ data }) => {
      dispatch({ type: types.EDIT_REVIEW, payload: review });
      // stops editing and allows adding plants again
      dispatch({ type: types.START_EDIT_REVIEW, payload: 0 });
    })
    .catch(err => console.log(err));
};
//!! edit recommended strain for personal review

//Delete Review
export const startDeleteReview = review => {
  return { type: types.DELETE_REVIEW, payload: review };
};

export const deleteReview = id => dispatch => {
  axiosWithAuth()
    .delete(`${id}`)
    .then(() => {
      dispatch(startDeleteReview(id));
    })
    .catch(err => console.log(err));
};

//!!Delete Review
