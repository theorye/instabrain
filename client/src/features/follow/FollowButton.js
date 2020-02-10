import React, { useState } from 'react';
import Api from "../services/agent";
import useApi from "../hooks/useApi";

const FollowButtonContainer = ({ userId, handleRequest }) => {
    const [isLoading, setIsLoading] = useState()
  const [{ status }, types, handleRequest] = useApi(Api.follow);
  let message;

  if (status === types.FETCHING) {
    message = "...";
  } else if (status === types.SUCCESS) {
    message = "Following";
  } else {
    message = "Follow";
  }
  return <button onClick={() => handleRequest(userId)}>{message}</button>;
};

export default FollowButtonContainer;
