import React from "react";
import logo from "../../assets/chip.svg";
import StyledLogo from "../styles/StyledLogo";

export default function Logo() {
  return (
    <StyledLogo>
      <img className="logo" src={logo} alt="logo"></img>
    </StyledLogo>
  );
}
