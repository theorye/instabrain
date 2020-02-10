import styled from "styled-components";

const StyledHomePage = styled.main`
  display: flex;
  justify-content: center;
  margin: 3rem auto;

  .phones {
    display: none;
  }

  @media only screen and (min-width: 875px) {
    // margin: 3rem auto;
    .phones {
      display: inline-block;
      margin-top: 3rem;
      width: 28rem;
    }
  }
`;

export default StyledHomePage;