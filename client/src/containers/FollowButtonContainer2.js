import React, { useState, useCallback } from "react";
import Api from "../services/agent";
import styled from "styled-components";
import Modal from "../features/modals/Modal";
import useFeedState from "../hooks/useFeedState";

const StyledButton = styled.button`
  height: 2rem;
  background-color: ${({ following }) => (following ? "white" : "#3897f0")};
  color: ${({ following }) => (following ? "black" : "white")};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ following }) => (following ? "#dbdbdb" : "transparent")};

  border-radius: 4px;
  font-size: 0.93rem;
  padding: 0 0.6rem;
`;

const FollowButtonContainer = ({ following = false, userId, callback }) => {
  const [isFollowing, setIsFollowing] = useState(following);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, feedDispatch, feedActions] = useFeedState();

  const handleFollowRequest = useCallback(() => {
    if (isFollowing) {
      setIsModalOpen(true);
    } else {
      setIsLoading(true);
      Api.follow(userId).then(res => {
        setIsLoading(false);

        setIsFollowing(true);
        if (callback) {
          callback();
        } else {
          feedDispatch(feedActions.setFeedLoading());
        }
      });
    }
  }, [userId, isFollowing, feedDispatch, feedActions, callback]);

  const handleUnfollowRequest = useCallback(() => {
    setIsLoading(true);
    Api.unfollow(userId).then(res => {
      setIsLoading(false);

      setIsFollowing(false);
      setIsModalOpen(false);
      if (callback) {
        callback();
      } else {
        feedDispatch(feedActions.setFeedLoading());
      }
    });
  }, [userId, feedDispatch, feedActions, callback]);

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
    <>
      <StyledButton
        following={isFollowing}
        onClick={() => handleFollowRequest(userId)}
      >
        {message}
      </StyledButton>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <button onClick={() => handleUnfollowRequest(userId)}>
            Unfollow
          </button>
        </Modal>
      )}
    </>
  );
};

export default FollowButtonContainer;
