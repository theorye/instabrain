import React, { useEffect, useReducer, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Api from "./services/agent";
import { AppContext, reducer, initialState } from "./contexts/AppContext";
import Routes from "./features/routing/Routes";
import GlobalStyle from "./features/styles/GlobalStyle";
import useLocalStorage from "./hooks/useLocalStorage";
import FeedProvider from "./providers/FeedProvider";

function AppContainer({ state }) {
  console.log("App container rendered ...");
  return (
    <BrowserRouter>
      <AppContext.Provider
        value={useReducer(reducer, { ...initialState, ...state })}
      >
        <FeedProvider>
          <Routes />
        </FeedProvider>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export const App = () => {
  console.log("App rendered...");
  const [isLoading, setIsLoading] = useState(true);
  const [appResponse, setAppResponse] = useState({});

  const [{ getAccessToken }] = useLocalStorage();
  const accessToken = getAccessToken();

  useEffect(() => {
    if (accessToken) {
      Api.getCurrentUser()
        .then(res => {
          setAppResponse({
            ...res,
            isAuthenticated: true
          });
        })
        .catch(() => {})
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [accessToken]);

  return (
    <>
      <GlobalStyle />

      {((!isLoading && accessToken) || !accessToken) && (
        <AppContainer state={!isLoading && { ...appResponse }} />
      )}
      {isLoading && (
        <main
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img alt="logo" src="/assets/brain.svg" />
        </main>
      )}
    </>
  );
};

export default App;
