import React from "react";

export const AuthForm = ({ useLogin=true, onSubmit, errors, register }) => (
  <form autoComplete="off" className="auth-inputs" onSubmit={onSubmit}>
    <h1>Instabrain</h1>
    {!useLogin && (
      <>
        <h2>Sign up to see photos and videos from your friends.</h2>

        <input
          placeholder="Email"
          type="email"
          name="email"
          ref={!useLogin && register}
        />
        {errors.email && errors.email.message}

        <input
          placeholder="Full Name"
          type="text"
          name="fullname"
          ref={!useLogin && register}
        />
        {errors.fullname && errors.fullname.message}
      </>
    )}

    <input
      placeholder={`Username ${!useLogin ? "" : " or Email"}`}
      type="text"
      name="username"
      ref={register}
    />
    {errors.username && errors.username.message}

    <input
      placeholder="Password"
      type="password"
      name="password"
      ref={register}
    />
    {errors.password && errors.password.message}
    <button>{!useLogin ? "Sign Up" : "Log In"}</button>

    <div className="divider">
      <b>OR</b>
    </div>

    <div>
      <h3>Try a demo</h3>
    </div>
  </form>
);

export default AuthForm;
