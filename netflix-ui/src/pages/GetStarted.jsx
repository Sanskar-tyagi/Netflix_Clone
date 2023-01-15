import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

export default function GetStarted() {
  //? Use state to change the div values and show different values / Cards
  return (
    <Container>
      <Header></Header>
      <div className="main">
        <div className="container">
          <div className="imgCont">
            <div className="ims"></div>
          </div>
          <div className="textcont">
            <span>
              {" "}
              Step <b>1</b> out of <b>3</b>
            </span>
            <h1>Finish setting up your account </h1>
          </div>
          <div className="body">
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </div>
          <div className="sumbmitcont">
            <button>Next</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  color: black;
  .main {
    background-color: white;
    height: 100vh;
    width: 100vw;
    flex-grow: 1;
    padding-bottom: 95px;
    .container {
      --layout-container-side-padding: 32px;
      padding: 20px var(--layout-container-side-padding) 60px;
      display: block;
      overflow: hidden;
      box-sizing: border-box;
      margin: 0 auto 15px;
      max-width: 978px;
      padding: 20px 3% 60px;
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
      .textcont {
        color: black;
        display: inline-block;
        span {
          font-size: 13px;
          display: block;
          text-align: inherit;
          line-height: 19px;
        }
        b {
          font-weight: 500;
        }
      }
      h1 {
        font-size: 32px;
        margin: 0 0 0.4em;
        display: inline-block;
        font-weight: 500;
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
  }
`;

// const handleSignin = async () => {};
