import React from "react";
import { Link } from "react-router-dom";

export const Infobox = ({ useLogin = true, signupPath, loginPath }) => (
  <div className="infobox">
    {!useLogin ? (
      <p>
        Have an account? <Link to={loginPath}>Log In</Link>
      </p>
    ) : (
      <p>
        Don't have an account? <Link to={signupPath}>Sign Up</Link>
      </p>
    )}
  </div>
);

export default Infobox;
