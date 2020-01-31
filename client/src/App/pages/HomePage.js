import React from "react";
import styled from "styled-components";
import PhoneImg from "../../assets/43cc71bb1b43.png";
import AuthContainer from "../containers/AuthContainer";

const StyledHome = styled.main`
  display: flex;
  justify-content: center;

  .phones {
    display: none;
  }

  @media only screen and (min-width: 875px) {
    margin: 3rem auto;
    .phones {
      display: inline-block;
      margin-top: 3rem;
      width: 28rem;
    }
  }
`;

const HomePage = () => (
  <StyledHome>
    <img className="phones" src={PhoneImg} alt="phones"></img>
    <AuthContainer useLogin={false} />
  </StyledHome>
);

export default HomePage;
