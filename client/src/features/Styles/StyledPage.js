import styled from "styled-components";

const StyledPage = styled.main`
  background: yellow;
  margin-top: ${props => (props.topNav ? "7.5rem" : "3rem")};
  margin-left: auto;
  margin-right: auto;
  // padding-top: 7.5rem;
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default StyledPage;
