import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router-dom";
export default function GetStarted() {
  //? Use state to change the div values and show different values / Cards
  const nav = useNavigate();
  const handlechange = () => {
    nav("/Forms");
  };
  const [steps, setsteps] = useState("1");
  return (
    <Container>
      <Header></Header>
      <CSSTransition
        in={true}
        timeout={1000}
        classNames="myclass myclass"
        appear={true}
      >
        <div className="">
          <div className="main">
            <div className="container">
              <div className="imgCont">
                <div className="ims"></div>
              </div>
            </div>
            <div className="textcont">
              <span>
                {" "}
                Step <b>{steps}</b> out of <b>3</b>
              </span>
              <h1>Finish setting up your account </h1>
            </div>
            <div className="body">
              Netflix is personalised for you. Create a password to watch on any
              device at any time.
            </div>
            <div className="sumbmitcont">
              <button onClick={handlechange}>Next</button>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  color: black;
  .myclass {
    .main {
      background-color: white;
      height: 100vh;
      width: 100vw;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-content: center;
      align-items: center;
      padding-bottom: 95px;
      .container {
        --layout-container-side-padding: 32px;
        padding: 20px var(--layout-container-side-padding) 60px;
        display: block;
        overflow: hidden;
        box-sizing: border-box;
        margin: 0 auto;
        max-width: 978px;
        padding: 30px 3% 45px;
        .imgCont {
          display: inline-block;
          max-width: 340px;
          margin: 0 auto;
          text-align: center;
          .ims {
            margin: 100px 0 20px;
            display: block;
            width: 260px;
            background: url(https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png)
              no-repeat 50% 50%;
            background-size: 260px;
            height: 90px;
          }
        }
      }

      .textcont {
        color: black;
        display: inline-block;
        span {
          font-size: 16px;
          display: block;
          text-align: center;
          line-height: 19px;
        }
        b {
          font-weight: 500;
        }
      }
      h1 {
        width: 99%;
        font-size: 30px;
        text-align: center;
        margin: 0 0 0.4em;
        display: inline-block;
        font-weight: 600;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
    .body {
      font-size: 18px;
      margin-bottom: 0;
      display: inline-block;
      max-width: 300px;
      margin-top: 0;
    }
    .sumbmitcont {
      button {
        width: 20vw;
        height: 7vh;
        margin-top: 2rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .main {
      margin-left: 25px;
      align-items: flex-start !important;
      .container {
        margin: 0 !important;
      }
      span {
        text-align: left !important;
      }
      h1 {
        text-align: start !important;
      }
    }
  }
`;

// const handleSignin = async () => {};

// display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
