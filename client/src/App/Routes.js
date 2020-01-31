import React from "react";
import { Switch, Route, useLocation} from "react-router-dom";
import { Gallery, ImageView, Other, Modal } from "./examples/routerExamples";
import AuthPage from "./pages/AuthPage";
import useScrollTop from "./hooks/useScrollTop";
import HomeContainer from "./containers/HomeContainer";
import TopNavContainer from "./containers/TopNavContainer";
import ImageViewContainer from "./containers/ImageViewContainer";


const Routes = () => {
  let location = useLocation();
  let background = location.state && location.state.background;
  useScrollTop();

  return (
    <>
      <TopNavContainer />
      <Switch location={background || location}>
        <Route
          path="/accounts/signup"
          children={<AuthPage useLogin={false} />}
        />
        <Route path="/accounts/login" children={<AuthPage useLogin={true} />} />
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/p/:id" children={<ImageViewContainer />} />
        {/* <Route path="/other" component={Other} /> */}
        <Route exact path="/:handle?" children={<HomeContainer />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/p/:id" children={<Modal />} />}
    </>
  );
};

export default Routes;
