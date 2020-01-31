import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  AuthForm,
  Infobox,
  StyledAuth,
  createAuthSchema
} from "../../features/Auth";
import { Accounts } from "../services/agent";
import useApi from "../hooks/useApi";
import useLocalStorage from "../hooks/useLocalStorage";
import useAppState from "../hooks/useAppState";

const AuthContainer = ({
  useLogin = true,
  loginPath = "/accounts/login",
  signupPath = "/accounts/signup"
}) => {
  console.log("AuthContainer rendered...");
  const history = useHistory();
  const [{ status, response }, types, handleRequest] = useApi(
    useLogin ? Accounts.login : Accounts.register
  );
  
  const [state, dispatch, actions] = useAppState();

  const [{ setTokens }] = useLocalStorage();

  const { register, handleSubmit, errors } = useForm({
    validationSchema: createAuthSchema(useLogin)
  });

  function submit(data) {
    handleRequest(data).then(data => {
      console.log(data);
      setTokens(data);
      dispatch(actions.loginUser(data));
      history.push(`/`);
    });
  }

  return (
    <StyledAuth>
      <AuthForm
        useLogin={useLogin}
        onSubmit={handleSubmit(submit)}
        errors={errors}
        register={register}
      />
      <Infobox
        useLogin={useLogin}
        loginPath={loginPath}
        signupPath={signupPath}
      />
    </StyledAuth>
  );
};

export default AuthContainer;
