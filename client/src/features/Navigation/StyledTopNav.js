import styled from "styled-components";

const StyledTopNav = styled.nav`
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  height: ${props => props.height || "4.75rem"};
  transition: 0.2s ease-in-out;

  border-bottom: 1px solid #efefef;

  & ul {
    // background: yellow;
    display: flex;
    margin: auto;
    width: 100%;
    height: ${props => props.height || "4.75rem"};
    // height: 2rem;
    align-items: center;
    justify-content: space-between;
    transition: 0.2s ease-in;

    @media only screen and (min-width: 1000px) {
      width: 60rem;
    }
  }
`;

export default StyledTopNav;
