import React from "react";
import styled from "styled-components";
import CommentSVG from "./CommentSVG";
import EllipsesSVG from "./EllipsesSVG";
import StyledCard from "../../features/Styles/StyledCard";
import StyledUserImg from "../../features/Styles/StyledUserImg";

const StyledCardHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #efefef;

  //   height: 60px;
  height: 3.75rem;
  //   padding: 16px;
  padding: 1rem;
`;

const StyledMainContent = styled.div`
  background: black;
  height: 37rem;
`;

const StyledContentImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const StyledContentCtrls = styled.div``;

const Card = ({username, avatar, url, ...props}) => {
  // console.log(props);
  return (
    <StyledCard>
      <StyledCardHeader>
        <StyledUserImg
          src={avatar}
          alt=""
        />
        <span>{username}</span>
        <EllipsesSVG />
      </StyledCardHeader>
      <StyledMainContent>
        <StyledContentImg src={url} />
      </StyledMainContent>
      <StyledContentCtrls>
        <CommentSVG />
      </StyledContentCtrls>
      <span>187 likes</span>
      <div>
        <span>crashley357</span>
        <span>
          Happy Birthday to my Dear Friend, 💕I am so lucky to of met you and
          for you to be in my life. We’ve been friends for a decade and have
          made countless memories. Hope your special day is filled with lots of
          love and joy
        </span>
      </div>
      <span> View all 3 comments</span>
      <p> INSANE </p>
      <span>8 HOURS AGO</span>
    </StyledCard>
  );
};

export default Card;
