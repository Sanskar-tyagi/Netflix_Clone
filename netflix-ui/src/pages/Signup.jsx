import React, { useState } from "react";
import styled from "styled-components";
import Backgroundimage from "../components/Backgroundimage";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [err, setError] = useState(false);
  const navigate = useNavigate();
  const [email, Setemail] = useState("");
  const trackMail = (e) => {
    Setemail(e.target.value);
  };
  return (
    <Container>
      <Backgroundimage></Backgroundimage>
      <div className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies , TV shows, and more</h1>
            <h4>Watch anywhere. Cancel anytime</h4>
            <h6>
              Ready to watch? Enter your Email to create or Restart membership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address "
              name="email"
              value={email}
              onChange={trackMail}
            />
            <button
              onClick={() => {
                email === ""
                  ? alert("Please enter some")
                  : err === true
                  ? alert("Opps")
                  : navigate("/GetStarted");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  positon: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: grid;
        grid-template-columns: 2fr 1fr;
        width: 55%;
        input {
          color: black;
          border: none;
          padding: 1.5rem;
          font-size: 1.2rem;
          border: 1px solid black;
          &:focus {
            outline: none;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          font-weight: light;
          font-size: 1.875rem;
        }
      }
    }
  }
`;
