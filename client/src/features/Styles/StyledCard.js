import styled from "styled-components";

const StyledCard = styled.article`
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  display: block;
  max-width: ${props => props.maxWidth || "40rem"};
`;

export default StyledCard;
