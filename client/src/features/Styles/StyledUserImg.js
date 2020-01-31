import styled from "styled-components";

const StyledUserImg = styled.img`
  height: ${props => props.height || "32px"};
  width: ${props => props.height || "32px"};
  border-radius: 50%;
`;

export default StyledUserImg;
