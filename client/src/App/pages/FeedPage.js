import React from "react";
import styled from "styled-components";
import useStore from "../store";

import TopNav from "../shared/TopNav";
import SuggestionsContainer from "../containers/SuggestionsContainer";
import FeedContainer from "../containers/FeedContainer";
// import Card from '../shared/Card';
import Modal from "../containers/ModalContainer";

const StyledFeed = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  background: green;

  @media only screen and (min-width: 875px) {
    // margin: 10rem auto;
  }
`;

const Test = () => <p>hi</p>;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: baseline;
`;

const ModalBoxSetup = styled.div`
position: absolute;
left: 0;
right: 0;
width: ${props => props.width || "32%"}
overflow: hidden;
padding: 16px;
margin: 50px auto;
box-sizing: border-box;
z-index: 1;
box-shadow: 0px 4px 8px rgba(0,0,0, 0.04);
background: #fff;
border: 0.5px solid #E8E8E8;
`;

export const ModalBg = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const FeedPage = () => {
  const [state, dispatch] = useStore();

  return (
    <StyledFeed>
      {/* <Modal> */}

          {/* <Test /> */}
        
      {/* </Modal> */}
      {/* <Card /> */}
      {/* <FeedContainer /> */}
      {state.user.followers > 0 ? <FeedContainer /> : <SuggestionsContainer />}
    </StyledFeed>
  );
};

export default FeedPage;
