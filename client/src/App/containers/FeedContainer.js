import React, { useEffect } from "react";
import { Posts } from "../services/agent";
import Card from "../shared/Card";
import SuggestionsContainer from "./SuggestionsContainer";
import useApi from "../hooks/useApi";
import useAppState from "../hooks/useAppState";
import { StyledProfile } from "../../features/Profile";
import StyledPage from "./StyledPage";

const Cards = ({ posts }) => {
  console.log(posts);
  return posts.map(post => <Card key={post.id} {...post} />);
};

const FeedContainer = () => {
  console.log("Feed container rendered");
  const [state] = useAppState();
  const [{ status, response }, types, handleRequest] = useApi(Posts.get);

  useEffect(() => {
    handleRequest()
    .then(res => {
      console.log(res);
    });
  }, [handleRequest]);

  if (state.following && status === types.SUCCESS && response.length > 0) {
    return (
      <StyledPage>
        <Cards posts={response} />
      </StyledPage>
    );
  }

  if (status === types.SUCCESS) {
    return (
        <SuggestionsContainer />
    );
  }

  return <p>Loading....</p>;
};

export default FeedContainer;
