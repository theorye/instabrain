import styled from "styled-components";

const StyledProfileHeader = styled.header`
  display: flex;
  align-self: flex-start;
  margin-left: 5rem;
  padding-bottom: 2rem;

  .profile-image {
    // background: red;
    flex: 0 0 calc(33%);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 10px;
    margin-right: 2rem;
  }

  .profile-image img {
    
    border-radius: 50%;
  }
`;

export default StyledProfileHeader;
