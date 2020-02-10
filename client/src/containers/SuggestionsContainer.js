import React, { useEffect, useState } from "react";
import Api from "../services/agent";
import useApi from "../hooks/useApi";
import StyledCard from "../features/styles/StyledCard";
import StyledPage from "../features/styles/StyledPage";
import SuggestionsList from "../features/suggestions/SuggestionsList";
import FollowButtonContainer from "./FollowButtonContainer";

const SuggestionsContainer = () => {
  console.log("SuggestionsContainer rendering...");
  const [{ status, response }, types, handleRequest] = useApi(
    Api.getUserSuggestions
  );

  useEffect(() => {
    handleRequest();
    // Accounts.users(30).then(users => {
    //   console.log(users);
    //   dispatch(suggestionsActions.addSuggestionsAction(users));
    // });
  }, [handleRequest]);

  return (
    <StyledPage topNav>
      <h2 style={{ marginLeft: "11rem", alignSelf: "flex-start" }}>
        Suggestions For you
      </h2>
      <StyledCard maxWidth={"40rem"}>
        {status === types.SUCCESS && (
          <SuggestionsList
            suggestions={response}
            FollowButton={FollowButtonContainer}
          
          />
        )}
      </StyledCard>
      {/* {selectedAFollower && <button>Get Started</button>} */}
    </StyledPage>
  );
};

export default SuggestionsContainer;
