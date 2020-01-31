import React from "react";
import styled from "styled-components";
import AuthContainerComponent from "../containers/AuthContainer";

const StyledAuthPage = styled.main`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;

const AuthPage = ({ useLogin = true }) => {
  return (
    <StyledAuthPage>
      <AuthContainerComponent useLogin={useLogin} />
    </StyledAuthPage>
  );
};

export default AuthPage;
