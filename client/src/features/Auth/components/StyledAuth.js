import styled from "styled-components";

const StyledAuth = styled.main`
  width: 20rem;

  .auth-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (min-width: 875px) {
    .auth-inputs {
      border: 1px solid rgb(236, 234, 234);
      border-radius: 0px;
    }

    .infobox {
      border: 1px solid rgb(236, 234, 234);
      border-radius: 0px;
      margin: 10px 0 0 0;
    }
  
  }

  & h1 {
    margin: 1rem auto 0 auto;
    user-select: none;
    font-family: "Billabong";
    font-size: 3.8rem;
    font-weight: 300;
  }

  & h2 {
    margin: 0 auto 1rem 0;
    padding: 0 1rem;
    text-align: center;
    font-size: 1rem;
    color: #999;
    word-wrap: break-word;
  }

  input[type="email"],
  input[type="password"],
  input[type="text"] {
    background: rgba(250, 250, 250, 1);
    border: 1px solid rgb(236, 234, 234);
    border-radius: 0.3rem;
    box-shadow: 1px 1px #fff;
    color: black;
    height: 2.5rem;
    margin: 0.2rem 2rem;
    padding: 10px;
    font-size: 0.7rem;
    width: 80%;
  }

  input[type="email"]::placeholder,
  input[type="password"]::placeholder,
  input[type="text"]::placeholder {
    color: rgb(165, 164, 164);
  }
  input[type="email"]:focus,
  input[type="password"]:focus,
  input[type="text"]:focus {
    outline: 0;
    border: 1px solid #a1a1a1;
  }

  & button {
    background: #3897f0;
    border: 0px;
    border-radius: 4px;
    color: #f8f8f8;
    font-weight: 600;
    height: 2rem;
    margin: 1rem auto;
    width: 16rem;
    cursor: pointer;
  }

  .divider {
    // overflow: hidden;
    text-align: center;
    color: rgb(165, 164, 164);
    font-size: 0.9rem;
    font-weight: 500;
    // margin: 1rem 1rem 0 0;
    width: 20rem;
  }

  .divider:before,
  .divider:after {
    background-color: rgb(224, 221, 221);
    content: "";
    display: inline-block;
    height: 1.2px;
    position: relative;
    vertical-align: middle;
    width: 6.5rem;
  }

  .divider:before {
    right: 1em;
    margin-left: -50%;
  }

  .divider:after {
    left: 1em;
    margin-right: -50%;
  }

  .forgot {
    color: #7f7f7f;
    display: inline-block;
    box-sizing: border-box;
    font: 12px/1 sans-serif;
    left: -19px;
    position: relative;
    text-decoration: none;
    top: -15px;
    transition: color 0.4s;
  }

  .forgot:hover {
    color: #3b3b3b;
  }

  .forgotwrapper {
    text-align: center;
    margin-top: 35px;
  }

  .forgot a {
    margin: 20px 0 0 40px;
    text-decoration: none;
    color: rgb(107, 106, 106);
  }

  // Infobox

  .infobox {
    margin: 10px 0 0 0;
  }

  .infobox p {
    box-sizing: border-box;
    margin: 22px 0 30px 0;
    text-align: center;
    user-select: none;
    font-size: 1rem;
  }

  .infobox p a {
    color: rgb(94, 163, 243);
    text-decoration: none;
    font-weight: 600;
  }
`;

export default StyledAuth;
