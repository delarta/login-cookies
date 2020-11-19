import React from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Login = (props) => {
  let history = useHistory();

  const handleLogin = () => {
    // jika di klik login, set cookies token
    // proses login
    // proses get data dari API

    // set cookies token
    Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
    Cookies.set("username", "freyandhy");
    Cookies.set("roles", "user");
    // redirect ke home
    history.push("/");
  };

  return (
    <>
      <h3>Login</h3>
      <button onClick={handleLogin}>Login!</button>
    </>
  );
};

export default Login;
