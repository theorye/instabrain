import React, { useState, useEffect, useReducer } from "react";
import {
  Switch,
  Route,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
  Link
} from "react-router-dom";
import { Gallery, ImageView, Other, Modal } from "./examples/routerExamples";
import useMyHook from "./hooks/useMyHook";
import useApiRequest from "./hooks/useApiRequest";
import { Test } from "./services/agent";
import useApi from "./hooks/useApi";

const Home = () => {
  let { handle } = useParams();

  return handle ? <Gallery /> : <p>no handle</p>;
};

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const asyncFunction = async () => {
  const delay = ms => new Promise(res => setTimeout(res, ms));
  await delay(5000);
  console.log("here");
  return "increment";
};

const incrementAction = () => {
  const result = asyncFunction();
  console.log(result);
  return result;
};

const Routes = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  const [state, makeRequest] = useMyHook("current");
  const [state2, makeRequest2] = useMyHook("current");
  const [{ status, response }, makeRequest3] = useApiRequest(
    `https://jsonplaceholder.typicode.com/users/${1}`,
    {
        verb: 'get',
    }
);

  const [{ status: status3, response3 }, handleRequest] = useApi(Test.get);

  return (
    <div>
      <div>Request</div>
      <p>Status: {state.status}</p>
      <button onClick={makeRequest}>Status: {state.status} </button>
      <button onClick={makeRequest2}>Status: {state2.status}</button>
      <button onClick={makeRequest3}>Get something {status3}</button>
      <hr/>
      <button onClick={handleRequest}>Status: {status3} </button>
      <p>Status 3: {status3}</p>


      <div>Count {count}</div>
      <button onClick={() => dispatch(incrementAction())}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <div>Count2 {count2}</div>
      <button onClick={() => dispatch2("increment")}>Increment</button>
      <button onClick={() => dispatch2("decrement")}>Decrement</button>
      <button onClick={() => dispatch2("reset")}>Reset</button>
      <Switch location={background || location}>
        <Route path="/gallery" children={<Gallery />} />
        <Route path="/p/:id" children={<ImageView />} />
        <Route path="/other" component={Other} />
        <Route exact path="/:handle?" children={<Home />} />
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/p/:id" children={<Modal />} />}
    </div>
  );
};

export default Routes;
