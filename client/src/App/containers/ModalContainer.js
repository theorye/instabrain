import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";

const modalNode = document.getElementById("modal");
const fadeIn = keyframes`from { opacity: 0; }`;

const ModalOverlay = styled.div`
  animation: ${fadeIn} 200ms ease-out;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
`;

const ModalDialog = styled.div`
  background: white;
  border-radius: 5px;
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

const Modal = ({ children, ...props }) => {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalDialog {...props}>{children}</ModalDialog>
    </ModalOverlay>,
    modalNode
  );
};

export default Modal;
