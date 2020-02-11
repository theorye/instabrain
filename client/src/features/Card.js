import React from "react";
import styled from "styled-components";
import CommentSVG from "./shared/CommentSVG";
import EllipsesSVG from "./shared/EllipsesSVG";
import StyledCard from "./styles/StyledCard";
import StyledUserImg from "./styles/StyledUserImg";
import HeartSVG from "./shared/HeartSVG";
import { Link } from "react-router-dom";

const StyledCardHeader = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #efefef;
  justify-content: space-between;
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

const StyledSecondaryContent = styled.div`
  margin: 0.5rem 1rem;

  // display: flex;
`;

const StyledContentCtrls = styled.div`
  display: flex;
  & > * {
    margin-right: 0.5rem;
  }
`;

const Card = ({ username, avatar, url, ...props }) => {
  // console.log(props);
  return (
    <StyledCard>
      <StyledCardHeader>
        <Link to={`/${username}`}>
          <div
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <StyledUserImg src={avatar} alt="" />
            <h3
              style={{
                cursor: "pointer",
                marginLeft: ".8rem"
                // fontWeight: "bold"
              }}
            >
              {username}
            </h3>
          </div>
        </Link>

        <EllipsesSVG style={{ cursor: "pointer" }} />
      </StyledCardHeader>
      <StyledMainContent>
        <StyledContentImg src={url} />
      </StyledMainContent>
      <StyledSecondaryContent>
        <StyledContentCtrls>
          <HeartSVG style={{ cursor: "pointer" }} />
          <CommentSVG style={{ cursor: "pointer" }} />
        </StyledContentCtrls>

        <span style={{ fontWeight: "bold" }}>187 likes</span>
        <div>
          <h3 style={{ margin: 0, display: "inline-block" }}>{username}</h3>
          <span style={{ marginLeft: ".5rem" }}>
            Happy Birthday to my Dear Friend, I am so lucky to of met you and
            for you to be in my life. We’ve been friends for a decade and have
            made countless memories. Hope your special day is filled with lots
            of love and joy
          </span>
        </div>
        <span> View all 3 comments</span>
        <p> INSANE </p>
        <span>8 HOURS AGO</span>
      </StyledSecondaryContent>
    </StyledCard>
  );
};

export default Card;
