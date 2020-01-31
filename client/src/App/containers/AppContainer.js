import React, { useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";
import { AppContext, reducer, initialState } from "../contexts/AppContext";

function AppContainer({ state }) {
  console.log("AppContainer Rendered...");

  console.log('Response prop ') 
  console.log(state);
  return (
    <AppContext.Provider value={useReducer(reducer, {...initialState, ...state})}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default AppContainer;
