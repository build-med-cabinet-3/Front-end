import { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const useForm = callback => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: ""
  });

  const handleChanges = e => {
    const { name, value } = e.target;

    console.log(e.target.name);
    console.log(e.target.value);
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSignupSubmit = e => {
    e.preventDefault();
    console.log(values);
    axiosWithAuth()
      .post("/signup", values)
      .then(res => {
        console.log(res.data);
        // dispatch({ type: "SIGN_UP" });
        localStorage.setItem("token", res.data.payload);
        callback();
      })
      .catch(err => console.log(err));
  };

  const handleLoginSubmit = e => {
    e.preventDefault();
    console.log(values);
    axiosWithAuth()
      .post("/login", values)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.payload);
        // dispatch({ type: "LOGIN" });
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: res.data.phoneNumber,
            password: res.data.password
          })
        );
        callback();
        // dispatch({ type: types.GET_USER, payload: res.data });
      })
      .catch(err => console.log(err));
  };

  //   const handleLogoutSubmit = e => {
  //     e.preventDefault();
  //     localStorage.deleteItem("token");
  //     callback();
  //   };

  return {
    handleChanges,
    handleSignupSubmit,
    handleLoginSubmit,
    values
  };
};

export default useForm;
