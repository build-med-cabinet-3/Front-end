import React from "react";

import useForm from "../hooks/useForm";

const Login = props => {
  const { handleLoginSubmit, values } = useForm(loginSubmit);

  function loginSubmit() {
    props.history.push("/dashboard");
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLoginSubmit}>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
