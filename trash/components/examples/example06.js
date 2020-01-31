import React, { useContext } from "react";
import { useStore, incrementCount } from "../stores/store";

export default () => {
  const [state, dispatch]= useStore();
    console.log('render')
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch(incrementCount())}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "set", payload: 0 })}>
        reset
      </button>
    </div>
  );
};
