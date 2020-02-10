import React from "react";
import styled from "styled-components";
import StyledUserImg from "../styles/StyledUserImg";

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

const SuggestionsList = ({ suggestions = [], FollowButton }) => {
  return suggestions.map(user => (
    <StyledSuggestion key={user.id}>
      <StyledSuggestionUser>
        <StyledUserImg height="44px" width="44px" src={user.avatar} alt="" />
        <div>
          <h3>{user.username}</h3>
          <span>{user.name}</span>
        </div>
      </StyledSuggestionUser>
      <FollowButton userId={user.id} />
    </StyledSuggestion>
  ));
};

export default SuggestionsList;
