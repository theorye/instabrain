import React, { useEffect, useState } from "react";
import Api from "../services/agent";
import Card from "../features/Card";

import useAppState from "../hooks/useAppState";
import useFeedState from "../hooks/useFeedState";

import StyledUserImg from "../features/styles/StyledUserImg";
import StyledCard from "../features/styles/StyledCard";
import SuggestionsList from "../features/suggestions/SuggestionsList";
import FollowButtonContainer from "./FollowButtonContainer";

const Cards = ({ posts }) => {
  console.log(posts);
  return posts.map(post => <Card key={post.id} {...post} />);
};

const FeedContainer = () => {
  console.log("Feed container rendered");
  const [update, forceUpdate] = useState();
  const [state, ] = useAppState();
  const [feedState, feedDispatch, feedActions] = useFeedState();
  const isLoading = feedState.loading;
  const posts = feedState.posts;

  useEffect(() => {
    if (posts.length === 0 && isLoading === true) {
      console.log(feedState);
      Api.getFeed().then(res => {
        console.log('I am firing');
        feedDispatch(feedActions.setFeedState(res));
      });
    }
 
  }, [feedActions, feedDispatch, update]);
  console.log(feedState);
  if (feedState.loading === false && feedState.posts.length > 0) {
    return (
      <div style={{ display: "flex" }}>
        <div>
          <Cards posts={feedState.posts} />
        </div>

        <div
          style={{
            marginLeft: "2rem",
            top: "5rem",
            position: "sticky",
            background: "green",
            width: "20rem",
            height: "25vh"
          }}
        >
          <div style={{ display: "flex" }}>
            <StyledUserImg
              height={"50px"}
              src="/assets/defaultUser.jpg"
              alt=""
            />
            <div>
              <h4
                style={{
                  marginLeft: "1rem",
                  marginBottom: 0,
                  marginTop: ".5rem"
                }}
              >
                {state.username}
              </h4>
              <span style={{ marginLeft: "1rem" }}>real name goes here</span>
            </div>
          </div>

          <StyledCard>
            <h4>Suggestions for you</h4>
            <SuggestionsList FollowButton={FollowButtonContainer} />
          </StyledCard>
        </div>
      </div>
    );
  }

  if (feedState.loading === false) {
    return (
      <>
        <h2 style={{ marginLeft: "11.2rem", alignSelf: "flex-start" }}>
          Suggestions For you
        </h2>
        <StyledCard maxWidth={"40rem"}>
          <SuggestionsList
            suggestions={feedState.suggestions}
            FollowButton={FollowButtonContainer}
          />

          <button onClick={forceUpdate}>Get Started</button>
        </StyledCard>
      </>
    );
  }

  return <p>Loading....</p>;
};

export default FeedContainer;
