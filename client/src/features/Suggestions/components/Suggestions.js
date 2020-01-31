import React from "react";
import styled from "styled-components";
import StyledCard from "../../Styles/StyledCard";
import StyledUserImg from "../../Styles/StyledUserImg";

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

const Suggestions = ({ suggestions, handleClick }) => {
  return (
    <main>
      <h2>Suggestions For You</h2>
      <StyledCard maxWidth={"40rem"}>
        {suggestions.map(user => (
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
            <button onClick={() => handleClick(user.id)}>Follow</button>
          </StyledSuggestion>
        ))}
      </StyledCard>
    </main>
  );
};

export default Suggestions;
