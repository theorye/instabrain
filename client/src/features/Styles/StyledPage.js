import styled from "styled-components";

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;
  background: green;

  @media only screen and (min-width: 875px) {
    // margin: 10rem auto;
  }
`;

export default StyledPage;
