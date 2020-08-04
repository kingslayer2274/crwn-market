import React from "react";

import "./singin-and-singup.styles.scss";
import SignIn from "../../components/signin/singin.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUp = () => (
  <div className="signin-signup">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInSignUp;
