import React, { useState, useCallback } from "react";
import Api from "../services/agent";
import styled from "styled-components";
import Modal from "../features/modals/Modal";
import useFeedState from "../hooks/useFeedState";

const StyledButton = styled.button`
  height: 2rem;
  background-color: ${({ following }) => (following ? "white" : "#3897f0")};
  color: ${({ following }) => (following ? "black" : "white")};
  border: 1px solid transparent;
  border-radius: 4px;
  font-size: 0.93rem;
  padding: 0 0.6rem;
`;

const FollowButtonContainer = ({
  following = false,
  userId,
  callback = () => {}
}) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, feedDispatch, feedActions] = useFeedState();
  console.log(userId);
  const handleFollowRequest = useCallback(() => {
    if (isFollowing) {
      setIsModalOpen(true);
    } else {
      setIsLoading(true);
      Api.follow(userId).then(res => {
        feedDispatch(feedActions.setFeedLoading());
        setIsFollowing(true);
        setIsLoading(false);
      });
    }
  }, [userId, isFollowing]);

  const handleUnfollowRequest = useCallback(() => {
    setIsLoading(true);
    Api.unfollow(userId).then(res => {
      console.log("trying to unfollow");
      feedDispatch(feedActions.setFeedLoading());
      setIsFollowing(false);
      setIsLoading(false);
      setIsModalOpen(false);
    });
  }, [userId]);

  // const [{ status }, types, handleRequest] = useApi(Api.follow);
  let message;

  if (isLoading) {
    message = "...";
  } else if (isFollowing) {
    message = "Following";
  } else {
    message = "Follow";
  }
  return (
    <StyledButton
      following={isFollowing}
      onClick={() => handleFollowRequest(userId)}
    >
      {message}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <button onClick={() => handleUnfollowRequest(userId)}>
            Unfollow
          </button>
        </Modal>
      )}
    </StyledButton>
  );
};

export default FollowButtonContainer;
