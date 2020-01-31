import React from "react";
import styled from "styled-components";

const StyledProfileTabs = styled.div`
  // background: black;
  border-top: 1px solid #efefef;
  display: flex;
  justify-content: center;
  height: 3rem;
`;

const ProfileTabs = () => (
  <StyledProfileTabs>
    <button>&#9776; Grid</button>
    <button>&#9744; Single</button>
    <button>&#9786; Tagged</button>
  </StyledProfileTabs>
);

export default ProfileTabs;
