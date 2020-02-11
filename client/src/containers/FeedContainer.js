import React, { useEffect, useState, useCallback } from "react";
import Api from "../services/agent";
import Card from "../features/Card";

import useAppState from "../hooks/useAppState";
import useFeedState from "../hooks/useFeedState";

import StyledUserImg from "../features/styles/StyledUserImg";
import StyledCard from "../features/styles/StyledCard";
import SuggestionsList from "../features/suggestions/SuggestionsList";
import FollowButtonContainer from "./FollowButtonContainer";
import styled from "styled-components";
const Cards = ({ posts }) => {
  console.log(posts);
  return posts.map(post => <Card key={post.id} {...post} />);
};

const StyledSuggestion = styled.div`
  display: flex;
  align-items: center;
  width: 37.5rem;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
`;

const StyledSuggestionUser = styled.div`
  display: flex;
  align-items: center;
`;

const FeedContainer = () => {
  console.log("Feed container rendered");
  const [state, appDispatch, appActions] = useAppState();
  const [hasSelectedFollowers, setSelectedFollowers] = useState(false);
  const [feedState, feedDispatch, feedActions] = useFeedState();
  const posts = feedState.posts;
  const isLoading = feedState.loading;

  const handleSelectedFollowers = useCallback(() => {
    console.log("firedHasSelectedFollowers");
    // feedDispatch(feedActions.setFeedNewFollowing);
    setSelectedFollowers(true);
  }, [setSelectedFollowers]);

  useEffect(() => {
    if (isLoading === true) {
      Api.getFeed().then(res => {
        console.log("I am firing");
        feedDispatch(feedActions.setFeedState(res));
      });
    }
  }, [feedActions, posts.length, feedDispatch, isLoading]);
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
              <span style={{ marginLeft: "1rem" }}>{state.name}</span>
            </div>
          </div>

          <StyledCard>
            <h4>Suggestions for you</h4>
            {/* <SuggestionsList
              setFeedLoding={}
              incrementFollowing={incrementFollowing}
              FollowButton={FollowButtonContainer}
            /> */}
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
          {feedState.suggestions.map(user => (
            <StyledSuggestion key={user.id}>
              <StyledSuggestionUser>
                <StyledUserImg
                  height="44px"
                  width="44px"
                  src={user.avatar}
                  alt=""
                />
                <div>
                  <h3>{user.username}</h3>
                  <span>{user.name}</span>
                </div>
              </StyledSuggestionUser>
              <FollowButtonContainer
                userId={user.id}
                callback={handleSelectedFollowers}
              />
            </StyledSuggestion>
          ))}

          {/* <SuggestionsList
            dispatch={feed}
            suggestions={feedState.suggestions}
            FollowButton={FollowButtonContainer}
          /> */}

          {hasSelectedFollowers && (
            <button onClick={() => feedDispatch(feedActions.setFeedLoading())}>
              Get Started
            </button>
          )}
        </StyledCard>
      </>
    );
  }

  return <p>Loading....</p>;
};

export default FeedContainer;
