import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
const Login = () => {
  return (
    <>
      <section className="form-Parent">
        <form className="form">
          <h1>Login to Fitness</h1>

          <input
            className="inp"
            type="email"
            placeholder="Enter Email"
            name="email"
          />
          <input
            className="inp"
            type="password"
            placeholder="Enter Password"
            name="password"
          />
          <button className="Btn">Join</button>
          <p>Dont have account ? <Link to={"/register"}> Register Now</Link></p>
        </form>
      </section>
    </>
  );
};

export default Login;
