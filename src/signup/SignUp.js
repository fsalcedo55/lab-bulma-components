import React from "react";
import CoolButton from "../coolbutton/CoolButton";
import Navbar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import "bulma/css/bulma.css";

const SignUp = (props) => {
  return (
    <div>
      <hr />
      <h1>Sign Up</h1>
      <Navbar />
      <FormField label="Name" type="text" placeholder="Enter your name" />
      <FormField label="Email" type="email" placeholder="Enter your email" />
      <FormField
        label="Password"
        type="password"
        placeholder="Enter your password"
      />

      <CoolButton
        className="button is-primary is-outlined"
        placeholder="Sign Up"
      ></CoolButton>
    </div>
  );
};

export default SignUp;
