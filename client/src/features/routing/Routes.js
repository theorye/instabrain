import React from "react";
import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import useScrollTop from "../../hooks/useScrollTop";

import TopNavContainer from "../../containers/TopNavContainer";
import HomeRoutes from "./HomeRoutes";
import StyledPage from "../styles/StyledPage";
import AuthContainer from "../../containers/AuthContainer";
import ImageViewContainer from "../../containers/ImageViewContainer";
import Modal from "../modals/Modal";

const Routes = () => {
  const location = useLocation();
  let history = useHistory();

  const background = location.state && location.state.background;
 
  useScrollTop(background);

  return (
    <>
      <TopNavContainer />
      <Switch location={background || location}>
        <Route
          path="/accounts/signup"
          children={
            <StyledPage>
              <AuthContainer useLogin={false} />
            </StyledPage>
          }
        />
        <Route
          path="/accounts/login"
          children={
            <StyledPage>
              <AuthContainer />
            </StyledPage>
          }
        />
        <Route
          path="/p/:id"
          children={
            <StyledPage topNav>
              <ImageViewContainer />
            </StyledPage>
          }
        />
        <Route exact path="/:handle?" children={<HomeRoutes />} />
      </Switch>

      {/* Show the modal when a background page is set */}

      {background && (
        <Route
          path="/p/:id"
          children={
            <Modal onClose={() => history.goBack()}>
              {console.log('modal rendered')}
              <ImageViewContainer />
            </Modal>
          }
        />
      )}
    </>
  );
};

export default Routes;
