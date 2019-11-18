import * as types from "./actionTypes";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const userSignup = userData => dispatch => {
  axiosWithAuth()
    .post("/user/register", userData)
    .then(({ data }) => {
      dispatch({ type: types.SIGN_UP });
      localStorage.setItem("token", data.token);
    })
    .catch(err => console.log(err));
};

// export const userLogin = (loginData, history) => dispatch => {
//   axiosWithAuth()
//     .post("/user/login", loginData)
//     .then(({ data }) => {
//       localStorage.setItem("token", data.token);
//       dispatch({ type: types.LOGIN });
//       history.push("/dashboard");
//       //   getUser().then(({ data }) => {
//       //     localStorage.setItem(
//       //       "user",
//       //       JSON.stringify({
//       //         firstName: data.firstName,
//       //         lastName: data.lastName
//       //       })
//       //     );

//       //     dispatch({ type: types.GET_USER, payload: data });
//       //   });
//     })
//     .catch(err => console.log(err));
// };

// // export const getUser = () => {
// //     return withAuth
// //       .axiosWithAuth()
// //       .get("https://build-week-4.herokuapp.com/api/user/single_user");
// //   };

// export const logout = () => {
//   localStorage.removeItem("token");
//   return { type: types.LOGOUT };
// };
