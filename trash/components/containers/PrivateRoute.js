import React from "react";
import { useStore } from "../stores/store";
import { Route, Redirect } from "react-router-dom";
import Home from "./Home";

const PrivateHomeRoute = ({ component: Component, ...rest }) => {
  const [state] = useStore();

  return (
    <Route
      {...rest}
      render={props =>
        state.isAuthenticated ? <Component {...props} /> : <Home />
      }
    />
  );
};

export default PrivateRoute;
