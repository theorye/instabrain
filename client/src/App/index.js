import React, { useEffect } from "react";
import useApi from "./hooks/useApi";
import { Accounts } from "./services/agent";
import AppContainer from "./containers/AppContainer";
import GlobalStyle from "./GlobalStyle";
import Logo from "../assets/brain.svg";
import useLocalStorage from "./hooks/useLocalStorage";

export const App = () => {
  console.log("App rendered");
  const [{ status, response }, types, handleRequest] = useApi(Accounts.current);
  const [{ getAccessToken }] = useLocalStorage();
  const accessToken = getAccessToken();

  useEffect(() => {
    console.log('App use effect fired')
    // if (accessToken) {
    //   console.log('handle Request fired')
      handleRequest()
      // .then( res => console.log(res));
    // }
  }, [handleRequest]);

  return (
    <>
      <GlobalStyle />
      {((status === types.SUCCESS && accessToken) || !accessToken) && (
        <AppContainer state={ status === types.SUCCESS && {...response, isAuthenticated: true}} />
      )}
      {status === types.FETCHING && (
        <main
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img alt="logo" src={Logo} />
        </main>
      )}
    </>
  );
};

export default App;
