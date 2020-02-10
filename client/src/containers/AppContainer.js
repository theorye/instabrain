import React, { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { AppContext, reducer, initialState } from "../contexts/AppContext";

function AppContainer({ state }) {
  console.log("AppContainer Rendered...");

  return (
    <AppContext.Provider value={useReducer(reducer, {...initialState, ...state})}>
      {console.log('I am here')}
      {console.log(props.value)}
      {/* <BrowserRouter>
        <Routes />
      </BrowserRouter> */}
    </AppContext.Provider>
  );
}

export default AppContainer;
