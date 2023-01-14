import React from "react";
import logo from "../assets/logo.png";
import Styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <button
        onClick={() => {
          navigate(props.login ? "/login " : "/Signup");
          console.log(props.login);
        }}
      >
        {props.login ? "Login In" : "SignUp"}
      </button>
    </Container>
  );
}
const Container = Styled.div`
padding:0 4rem;
.logo{
  img{
    height:5rem;
  }
}
  button{
  padding:0.5rem 1rem;
  background-color:#e50914; 
  border:none;
  cursor:pointer;
  color:white;
  border-radius:0.2rem;
  font-weight:bolder;
  font-size:1.05rem;
  }
`;
