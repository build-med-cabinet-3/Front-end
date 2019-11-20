import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const loginApi = "https://bw-med-cabinet-2019.herokuapp.com/user/login";
const registerApi = "https://bw-med-cabinet-2019.herokuapp.com/user/register/";

const dsApi =
  "https://cors-anywhere.herokuapp.com/https://medcab3.herokuapp.com/request/?search=";

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

//posting form for recommendations
export const postRecForm = (recData, history) => dispatch => {
  axiosWithAuth()
    .post(dsApi, recData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
//!! posting form for recommendations

//get recommendations from DS API for recommendations page
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

//post recommendation to backend
export const setRecList = recommended => {
  return { type: types.SAVE_RECOMMENDED, payload: recommended };
};

export const addReview = review => dispatch => {
  axiosWithAuth()
    .post("", review)
    .then(({ data }) => {
      // NEED AT LEAST ID OF NEW PLANT FROM BACKEND
      dispatch(setRecList(review));
    })
    .catch(err => console.log(err));
};
//!!post recommendation to backend
