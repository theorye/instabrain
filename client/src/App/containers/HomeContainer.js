import React from "react";
import { useParams } from "react-router-dom";
import { Gallery } from "../examples/routerExamples";
import HomePage from "../pages/HomePage";
import useAppState from "../hooks/useAppState";
import FeedContainer from "./FeedContainer";
import ProfileContainer from "./ProfileContainer";

const HomeContainer = () => {
    console.log('Home container rendered...')
  const { handle } = useParams();
    const [state ] = useAppState();

  if (handle) {
    // return <Gallery />;
    return <ProfileContainer handle={handle}/>
  }
  console.log(state);
  return state.isAuthenticated ? <FeedContainer />: <HomePage />;
};

export default HomeContainer;
