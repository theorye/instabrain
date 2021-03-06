import React, { useEffect, useState, useCallback } from "react";
import Api from "../services/agent";
import Card from "../features/Card";

import useAppState from "../hooks/useAppState";
import useFeedState from "../hooks/useFeedState";

import StyledUserImg from "../features/styles/StyledUserImg";
import StyledCard from "../features/styles/StyledCard";
import FollowButtonContainer from "./FollowButtonContainer2";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Cards = ({ posts }) => {
  return posts.map(post => <Card key={post.id} {...post} />);
};

const StyledSuggestion = styled.div`
  display: flex;
  align-items: center;
  width: 37.5rem;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
`;

const StyledFeedSuggestion = styled.div`
  display: flex;
  align-items: center;
  width: 20rem;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
`;

const StyledSuggestionUser = styled.div`
  display: flex;
  align-items: center;
`;

const FeedContainer = () => {
  console.log("Feed container rendered");
  const [state] = useAppState();
  const [hasSelectedFollowers, setSelectedFollowers] = useState(false);
  const [feedState, feedDispatch, feedActions] = useFeedState();
  const posts = feedState.posts;
  const isLoading = feedState.loading;

  const handleSelectedFollowers = useCallback(() => {
    // feedDispatch(feedActions.setFeedNewFollowing);
    setSelectedFollowers(true);
  }, [setSelectedFollowers]);

  useEffect(() => {
    if (isLoading === true) {
      Api.getFeed().then(res => {
        feedDispatch(feedActions.setFeedState(res));
      });
    }
  }, [feedActions, posts.length, feedDispatch, isLoading]);

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
          <div style={{ display: "flex", marginBottom: "2rem" }}>
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
            {feedState.suggestions.slice(0, 4).map(user => (
              <StyledFeedSuggestion key={user.id}>
                <Link to={`/${user.username}`}>
                  <StyledSuggestionUser>
                    <StyledUserImg
                      height="44px"
                      width="44px"
                      src={user.avatar}
                      alt=""
                    />
                    <div>
                      <h3>{user.username}</h3>
                    </div>
                  </StyledSuggestionUser>
                </Link>

                <FollowButtonContainer
                  userId={user.id}
                  callback={handleSelectedFollowers}
                />
              </StyledFeedSuggestion>
            ))}
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
                <Link to={`/${user.username}`}>
                  <StyledUserImg
                    height="44px"
                    width="44px"
                    src={user.avatar}
                    alt={user.username}
                  />
                  <div>
                    <h3>{user.username}</h3>
                    <span>{user.name}</span>
                  </div>
                </Link>
              </StyledSuggestionUser>
              <FollowButtonContainer
                userId={user.id}
                callback={handleSelectedFollowers}
              />
            </StyledSuggestion>
          ))}

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
