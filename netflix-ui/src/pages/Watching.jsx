import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router-dom";

export default function Watching() {
  const [fa, setfa] = useState(true);
  const bg =
    "http://occ-0-2953-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRCb0DVpf6BqqxrMZj_JZGP8wlUHGyu3sgDn2Oe_TIUIwcJl2NyxE_bn2vjQCU_Lx3vmX8_hUGBOHz8iaUKPCleuMckfCXX6IGMR.png?r=a40";
  const bg2 =
    "http://occ-0-2953-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4";

  const handlehover = () => {
    setfa(false);
  };
  const handlehvr = () => {
    setfa(true);
  };
  return (
    <Container>
      <CSSTransition
        in={true}
        timeout={4000}
        classNames="myclass myclass"
        appear={true}
      >
        <div>
          <div class="profiles-gate-container">
            <div class="centered-div list-profiles-container">
              <div class="list-profiles">
                <h1 class="profile-gate-label">Who's watching?</h1>
                <ul class="choose-profile">
                  <li class="profile">
                    <div>
                      <a class="profile-link" tabindex="0">
                        <div class="avatar-wrapper">
                          <div
                            class="profile-icon bc"
                            style={{ background: `url(${bg})` }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span class="profile-name">Sanskar</span>
                      </a>
                      <div class="profile-children"></div>
                    </div>
                  </li>
                  <li class="profile">
                    <div>
                      <a class="profile-link" tabindex="0">
                        <div class="avatar-wrapper">
                          <div
                            class="profile-icon bc"
                            style={{ background: `url(${bg2})` }}
                          >
                            {" "}
                          </div>
                        </div>
                        <span class="profile-name">Deekshu</span>
                      </a>
                      <div class="profile-children"></div>
                    </div>
                  </li>
                  <li>
                    <a role="link" tabindex="0">
                      <div class="addProfileIcon icon-tvuiAdd">
                        <i
                          class={`fa-solid fa-circle-plus`}
                          onMouseEnter={handlehover}
                          onMouseLeave={handlehvr}
                        ></i>
                      </div>
                      <span class="profile-name">Add Profile</span>
                    </a>
                  </li>
                </ul>
              </div>
              <span data-uia="profile-button">
                <a
                  aria-label="Manage Profiles"
                  href="/ManageProfiles"
                  class="profile-button"
                >
                  Manage Profiles
                </a>
              </span>
            </div>
          </div>
        </div>
      </CSSTransition>
    </Container>
  );
}
const Container = styled.div`
  .profiles-gate-container {
    background: #141414;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    z-index: 0;
    .centered-div {
      align-items: center;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 100;
      animation: animateProfileGate 0.45s forwards;
      .list-profiles {
        max-width: 80%;
        text-align: center;
        .profile-gate-label {
          color: #fff;
          font-size: 3.5vw;
          font-weight: 600;
          margin: 0.67em 0;
          margin-block-start: 0.67em;
          margin-block-end: 0.67em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
          width: 100%;
        }
        .choose-profile {
          margin: 2em 0;
          opacity: 1;
          padding: 0;
          transition: opacity 0.4s ease-out;
          .profile:not(:last-child) {
            margin: 0 2vw 0 0;
          }
          .profile {
            max-width: 200px;
            min-width: 84px;
            width: 10vw;
          }
          li {
            display: inline-block;
            position: relative;
            vertical-align: top;
          }
          li a {
            text-decoration: none;
            color: #fff;
            cursor: pointer;
            .profile-name {
              color: grey;
              display: block;
              font-size: 1.3vw;
              line-height: 1.2em;
              margin: 0.6em 0;
              min-height: 1.8em;
              overflow: hidden;
              text-align: center;
              text-overflow: ellipsis;
            }
          }
          .avatar-wrapper {
            position: relative;
          }
          .profile-icon {
            background-color: #333;
            background-repeat: no-repeat !important;
            background-size: cover !important;
            border: none;
            border-radius: 4px;
            box-sizing: border-box;
            height: 10vw;
            max-height: 200px;
            max-width: 200px;
            min-height: 84px;
            min-width: 84px;
            position: relative;
            text-decoration: none;
            width: 10vw;
          }
          .profile-icon:after {
            border: 0.2em solid transparent;
            border-radius: 4px;
            bottom: 0;
            content: "";
            display: block;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
          }

          li {
            display: inline-block;
            position: relative;
            vertical-align: top;
          }
          li a {
            text-decoration: none;
            color: #fff;
            cursor: pointer;
          }
          .addProfileIcon {
            align-items: center;
            color: grey;
            display: flex;
            font-size: 5vw;
            height: 10vw;
            justify-content: center;
            max-height: 200px;
            max-width: 200px;
            min-height: 84px;
            min-width: 84px;
            text-align: center;
            text-decoration: none;
            width: 10vw;
          }

          .profile-name {
            color: grey;
            display: block;
            font-size: 1.3vw;
            line-height: 1.2em;
            margin: 0.6em 0;
            min-height: 1.8em;
            overflow: hidden;
            text-align: center;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .profile-icon:hover::after {
    border-color: #e5e5e5 !important;
  }
  .addProfileIcon:hover {
    background: #e5e5e5 !important;
  }
  .profile-button {
    background-color: transparent;
    border: 1px solid grey;
    color: grey;
    cursor: pointer;
    display: block;
    font-size: 1.2vw;
    margin: 2em 0 1em;
    padding: 0.5em 1.5em;
    text-decoration: none;
  }
`;
