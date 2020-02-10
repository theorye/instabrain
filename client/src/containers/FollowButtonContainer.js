import React, { useState } from "react";
import Api from "../services/agent";
import useApi from "../hooks/useApi";

import styled from "styled-components";

const StyledButton = styled.button`
  height: 2rem;
  background-color: ${({following}) => following ? 'white' : '#3897f0'};;
  color: ${({following}) => following ? 'black' : 'white'};
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 0.93rem;
  padding: 0 0.6rem;
`;

const FollowButtonContainer = ({ userId }) => {
  const [{ status }, types, handleRequest] = useApi(Api.follow);
  let message;

  if (status === types.FETCHING) {
    message = "...";
  } else if (status === types.SUCCESS) {
    message = "Following";
  } else {
    message = "Follow";
  }
  return (
    <StyledButton
      following={status === types.SUCCESS}
      onClick={() => handleRequest(userId)}
    >
      {message}
    </StyledButton>
  );
};

export default FollowButtonContainer;
