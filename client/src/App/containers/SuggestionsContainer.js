import React, { useEffect } from "react";
import styled from "styled-components";
import { Accounts } from "../services/agent";
import { Suggestions } from "../../features/Suggestions";
import useApi from "../hooks/useApi";
import StyledCard from "../../features/Styles/StyledCard";
import StyledUserImg from "../../features/Styles/StyledUserImg";
import StyledPage from "./StyledPage";

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

const FollowButtonContainer = ({ userId }) => {
  const [{ status, response }, types, handleRequest] = useApi(Accounts.follow);
  let message;

  if (status === types.FETCHING) {
    message = "...";
  } else if (status === types.SUCCESS) {
    message = "Following";
  } else {
    message = "Follow";
  }
  return (
    <button onClick={() => handleRequest(userId)}>
      {message}
    </button>
  );
};

const SuggestionsList = ({ suggestions=[] }) => {
  return suggestions.map(user => (
    <StyledSuggestion key={user.id}>
      <StyledSuggestionUser>
        <StyledUserImg height="44px" width="44px" src={user.avatar} alt="" />
        <div>
          <h3>{user.username}</h3>
          <span>{user.name}</span>
        </div>
      </StyledSuggestionUser>
      <FollowButtonContainer userId={user.id} />
    </StyledSuggestion>
  ));
};

const SuggestionsContainer = () => {
  console.log('SuggestionsContainer rendering...')
  const [{ status, response }, types, handleRequest] = useApi(Accounts.users);

  useEffect(() => {
    handleRequest();
    // Accounts.users(30).then(users => {
    //   console.log(users);
    //   dispatch(suggestionsActions.addSuggestionsAction(users));
    // });
  }, [handleRequest]);

  // const handleClick = id => {
  //   // Accounts.follow()
  //   console.log(id);
  //   Accounts.follow(id).then(res => {
  //     console.log(res);
  //   });
  // };
  console.log(response);
  return (
    <StyledPage>
      <h2 style={{marginLeft: '11rem',alignSelf: 'flex-start'}}>Suggestions For you</h2>
      <StyledCard maxWidth={"40rem"}>
        {status === types.SUCCESS && <SuggestionsList suggestions={response}/>}
      </StyledCard>
    </StyledPage>

    // <Suggestions suggestions={state.suggestions} handleClick={handleClick} />
  );
};

export default SuggestionsContainer;
