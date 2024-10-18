import React from "react";
import "../Styles/Registration.css";
const Register = () => {
  return (
    <>
      <section className="form-Parent">
        <form className="form">
          <h1>Start your Fitness</h1>
          <input
            className="inp"
            type="text"
            placeholder="Enter Name"
            name="name"
          />
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
          <input
            className="inp"
            type="number"
            placeholder="Enter Age"
            name="age"
          />
          <button className="Btn">Join</button>
          <p>Already Registered ? Login</p>
        </form>
      </section>
    </>
  );
};

export default Register;
