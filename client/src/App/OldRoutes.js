import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
// import HomePage from "./pages/HomePage";
import FeedPage from "./pages/FeedPage";
import useStore from "./store";
import LoadingAppContainer from "./containers/LoadingAppContainer";
import HomePage from "./pages/HomePage";
import ProfileContainer from "./containers/ProfileContainer";
import TopNav from "./shared/TopNav";

function ImageView() {
  let { id } = useParams();

  return (
    <div>
      <p>{`${id}`}</p>
    </div>
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();

  let back = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div
      onClick={back}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0, 0, 0, 0.15)"
      }}
    >
      <div
        className="modal"
        style={{
          position: "absolute",
          background: "#fff",
          top: 25,
          left: "10%",
          right: "10%",
          padding: 15,
          border: "2px solid #444"
        }}
      >
        <h1>I'm here</h1>
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>
  );
}

const Routes = () => {
  const history = useHistory();
  const [state] = useStore();
  const [navBarHidden, setNavBarHidden] = useState(true);
  const location = useLocation();
  const background = location.state && location.state.background;

  console.log(state);

  useEffect(() => {
    const { pathname } = location;
    const navBarHidden =
      (pathname === "/" && !state.user.isAuthenticated) ||
      pathname === "/accounts/signup" ||
      pathname === "/accounts/login";

    setNavBarHidden(navBarHidden);
  }, [location, state.user.isAuthenticated]);

  return state.isLoading ? (
    <LoadingAppContainer />
  ) : (
    <>
      {!navBarHidden && <TopNav />}
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            !state.user.isAuthenticated ? <HomePage /> : <FeedPage />
          }
        />
        <Route
          path="/accounts/signup"
          render={() => <AuthPage useLogin={false} />}
        />
        <Route
          path="/accounts/login"
          render={() => <AuthPage useLogin={true} />}
        />
        <Route path="/img/:id" children={<ImageView />} />

        <Route exact path="/:id" component={ProfileContainer}></Route>
      </Switch>
      {background && <Route path="/img/:id" children={<Modal />} />}
    </>
  );
};

export default Routes;
