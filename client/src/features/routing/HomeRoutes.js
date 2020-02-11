import React from "react";
import { useParams } from "react-router-dom";
import useAppState from "../../hooks/useAppState";
import StyledHomePage from "../styles/StyledHomePage";
import AuthContainer from "../../containers/AuthContainer";
import FeedContainer from "../../containers/FeedContainer";
import ProfileContainer from "../../containers/ProfileContainer";
import StyledPage from "../styles/StyledPage";

const HomeRoutes = () => {
  console.log("HomeRoutes rendering...");
  const { handle } = useParams();
  const [state] = useAppState();

  if (handle) {
    return (
      <StyledPage topNav>
        <ProfileContainer handle={handle} />
      </StyledPage>
    );
  }

  return state.isAuthenticated ? (
      <StyledPage topNav>
        <FeedContainer />
      </StyledPage>
  ) : (
    <StyledHomePage>
      <img className="phones" src="/assets/phones.png" alt="phones"></img>
      <AuthContainer useLogin={false} />
    </StyledHomePage>
  );
};

export default HomeRoutes;
