import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const userSignup = (userData, history) => dispatch => {
  axiosWithAuth()
    .post("/user/register", userData)
    .then(({ data }) => {
      dispatch({ type: types.SIGN_UP });
      localStorage.setItem("token", data.token);
      history.push("/login");
    })
    .catch(err => console.log(err));
};

export const userLogin = (loginData, history) => dispatch => {
  axiosWithAuth()
    .post("/user/login", loginData)
    .then(({ data }) => {
      dispatch({ type: types.LOGIN });
      localStorage.setItem("token", data.token);
      history.push("/dashboard");
    })
    .catch(err => console.log(err));
};

// export const logout = () => {
//   localStorage.removeItem("token");
//   return { type: types.LOGOUT };
// };
