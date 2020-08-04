import React, { Component } from "react";

import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, password, confirmPassword, email } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords doesn't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { displayName, password, confirmPassword, email } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign Up with your email and password</span>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <FormInput
            onChange={this.handleChange}
            name="displayName"
            type="text"
            value={displayName}
            label="Display Name"
            required
          />
          <FormInput
            onChange={this.handleChange}
            name="email"
            type="email"
            value={email}
            label="Email"
            required
          />
          <FormInput
            onChange={this.handleChange}
            name="password"
            type="password"
            value={password}
            label="Password"
            required
          />
          <FormInput
            onChange={this.handleChange}
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
