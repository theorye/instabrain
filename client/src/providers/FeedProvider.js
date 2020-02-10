import React, { useReducer } from "react";
import { FeedContext, reducer, initialFeedState } from "../contexts/FeedContext";

function FeedProvider({children}) {
  console.log("FeedProvider Rendered...");

  return (
    <FeedContext.Provider value={useReducer(reducer, initialFeedState)}>
      {children}
    </FeedContext.Provider>
  );
}

export default FeedProvider;
