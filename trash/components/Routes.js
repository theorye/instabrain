import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Profile from "./containers/Profile";
import TopNav from "./containers/TopNav";
import Home from "./containers/Home";
import Accounts from "./containers/Accounts";

import { useStore, setAppIsLoaded } from "./stores/store";
import Feed from "./containers/Feed";
import useDb from "../services/agent";
import { setUser } from "../actions/user";

function Routes() {
  const [state, dispatch] = useStore();
  const [isLoaded, setIsLoaded] = useState(false);

  // console.log(state);
  const db = useDb();
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      db.Accounts.current()
        .then(res => {
          dispatch(setUser(res));
          setIsLoaded(true);
        })
        .catch(err => {
          console.log('TOKEN ERROR 1');
          if (err.response.data === "AccessTokenTokenExpiredError") {
            db.Accounts.token().then(res => {           
              localStorage.setItem("token", res);

              db.Accounts.current()
                .then(res => {
                  dispatch(setUser(res));
                  setIsLoaded(true);
                })
                .catch( e => {
                  console.log('here', e);
                  setIsLoaded(true);
                });
            }).catch(e => {
              console.log(e.response);
              console.log('TOKEN ERROR 2');
              // history.push('/accounts/login');
              setIsLoaded(true);
            });
          }
        });
    } else {
      setIsLoaded(true);
    }
  }, []);

  return isLoaded ? (
    <Switch>
      <Route
        exact
        path="/"
        render={() =>
          !state.isAuthenticated ? (
            <Home />
          ) : (
            <>
              <TopNav />
              <Feed />
            </>
          )
        }
      />

      <Route path="/accounts/signup" render={() => <Accounts />} />
      <Route path="/accounts/login" render={() => <Accounts login={true} />} />
      <Route
        path="/:id"
        render={() => (
          <>
            <TopNav />
            <Profile />
          </>
        )}
      />
    </Switch>
  ) : (
    <p>Loading</p>
  );
}

export default Routes;
