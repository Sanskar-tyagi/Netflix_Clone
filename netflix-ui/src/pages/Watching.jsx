import React, { useState } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router-dom";

export default function Watching() {
  const nav = useNavigate();
  const [fa, setfa] = useState(true);
  const bgIco = [
    "http://occ-0-2483-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRCb0DVpf6BqqxrMZj_JZGP8wlUHGyu3sgDn2Oe_TIUIwcJl2NyxE_bn2vjQCU_Lx3vmX8_hUGBOHz8iaUKPCleuMckfCXX6IGMR.png?r=a40",
    "https://occ-0-3350-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABemvYUKubPP2szvzMIDaUk1RER3m8zg4O386kOb8ef8SE0L6MUpYITXgRluDquYskMLOZscMPFl0JlkUlE5OPQxl_-_Dy5P42Q.png?r=7e8",
  ];

  const [flag, useflag] = useState(true);
  const [showForm, setShowForm] = useState(true);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    if (newUser !== "") {
      setUsers([...users, { user: newUser, key: newUser }]);
      setShowForm(false);
      setNewUser("");
    } else {
      alert("Please enter a valid user name");
    }
  };

  const bg =
    "http://occ-0-2953-3662.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRCb0DVpf6BqqxrMZj_JZGP8wlUHGyu3sgDn2Oe_TIUIwcJl2NyxE_bn2vjQCU_Lx3vmX8_hUGBOHz8iaUKPCleuMckfCXX6IGMR.png?r=a40";
  const handleuserin = (e) => {
    setNewUser(e.target.value);
  };
  const handleNew = () => {
    if (users.length < 3) {
      setShowForm(true);
    } else {
      alert("sorry only 2 users are allowed in your subscription");
    }
  };

  const handlehover = () => {
    setfa(false);
  };
  const handlehvr = () => {
    setfa(true);
  };
  const handleprof = () => {
    nav("/");
  };

  return (
    <Container>
      <CSSTransition
        in={true}
        timeout={4000}
        classNames={`myclass myclass`}
        appear={true}
      >
        <div>
          {showForm ? (
            <div className="profiles-gate-container">
              <div className="centered-div list-profiles-container">
                <div className="profile-actions-container">
                  <h1>Add Profile</h1>
                  <h2>Add a profile for another person watching Netflix.</h2>
                  <div className="profile-metadata profile-entry">
                    <div className="main-profile-avatar">
                      <img
                        src="https://occ-0-3350-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
                        alt=""
                        className="ltr-1etmbqw"
                      />
                    </div>
                    <div className="profile-add-parent">
                      <div className="profile-entry-inputs">
                        <input
                          type="text"
                          id="add-profile-name"
                          className=""
                          placeholder="Name"
                          value={newUser}
                          onChange={handleuserin}
                        />
                        <label
                          htmlFor="add-profile-name"
                          aria-label="Name"
                        ></label>
                        <div className="option-wrapper">
                          <div className="add-kids-option">
                            <input type="checkbox" id="add-kids-profile" />
                            <label htmlFor="add-kids-profile"></label>
                            <span
                              className="add-kids-marker"
                              role="checkbox"
                              aria-checked="false"
                              tabIndex="0"
                            >
                              Child?
                            </span>
                            <span className="kids-profile-tooltip">
                              If selected, this profile will only see TV shows
                              and movies rated for ages 12 and under.
                            </span>
                          </div>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    className="profile-button preferred-action"
                    tabIndex="0"
                    role="button"
                    onClick={handleAddUser}
                  >
                    Continue
                  </span>
                  <span className="profile-button" tabIndex="0" role="button">
                    <span>Cancel</span>
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className=" profiles-gate-container">
              <div className="centered-div list-profiles-container">
                <div className="list-profiles">
                  <h1 className="profile-gate-label">Who's watching?</h1>
                  <ul className="choose-profile">
                    {users.map((user, index) => (
                      <li key={index} className="profile" onClick={handleprof}>
                        <a className="profile-link">
                          <div className="avatar-wrapper">
                            <div
                              className="profile-icon bc"
                              style={{ background: `url(${bgIco[index]})` }}
                            ></div>
                          </div>
                          <span className="profile-name">{user.user}</span>
                        </a>
                        <div className="profile-children"></div>
                      </li>
                    ))}

                    <li
                      onClick={handleNew}
                      style={{
                        display: `${flag === false ? "none" : "inline-block"}`,
                      }}
                    >
                      <a role="link" tabIndex="0">
                        <div className="addProfileIcon icon-tvuiAdd">
                          <i
                            className={`fa-solid fa-circle-plus`}
                            onMouseEnter={handlehover}
                            onMouseLeave={handlehvr}
                          ></i>
                        </div>
                        <span className="profile-name">Add Profile</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <span className="profile-buttons">Manage Proflies</span>
              </div>
            </div>
          )}
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
  .profile-actions-container {
    position: relative;
    text-align: left;
    h1 {
      font-size: 3.6vw;
      margin: 0;
      font-weight: 400;
    }
    h2 {
      color: #666;
      font-size: 1.3vw;
    }
    .profile-metadata {
      display: flex;
      border-bottom: 1px solid #333;
      border-top: 1px solid #333;
      padding: 2em 0;
      .main-profile-avatar {
        margin-right: 1.5vw;
        max-width: 180px;
        min-width: 80px;
        white-space: nowrap;
        width: 8vw;
        img {
          border-radius: 4px;
          height: 8vw;
          max-height: 180px;
          max-width: 180px;
          min-height: 80px;
          min-width: 80px;
          border: 0;
          width: 8vw;
          animation-name: animateScale;
          animation-duration: 400ms;
          transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      }
      .profile-add-parent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .profile-entry-inputs {
          align-items: center;
          display: flex;
          flex-direction: row;
          position: relative;
          vertical-align: middle;
          input[type="text"] {
            background: #666;
            border: 1px solid transparent;
            box-sizing: border-box;
            color: #fff;
            font-size: 1.3vw;
            height: 2em;
            margin: 0 0.8em 0 0;
            padding: 0.2em 0.6em;
            text-indent: 0.1vw;
            width: 18em;
          }
          label {
            display: inline;
          }

          .add-kids-option {
            align-items: center;
            display: flex;
            margin: 5px 0;
            position: relative;
            input[type="checkbox"] {
              display: none;
            }
            label {
              border: 1px solid #333;
              border-radius: 0;
              display: inline-block;
              font-size: 0.8vw;
              height: 2.5em;
              margin-right: 0.5em;
              position: relative;
              width: 2.5em;
            }
            span {
              font-weight: 400;
              font-size: 13px;
            }
            .kids-profile-tooltip {
              background: #fff;
              bottom: 3em;
              color: #000;
              font-size: 1vw;
              left: -6em;
              opacity: 0;
              padding: 0.8em;
              position: absolute;
              text-align: center;
              width: 18em;
              z-index: -1;
            }
            .kids-profile-tooltip:after {
              border: 0.7em solid transparent;
              border-top-color: #fff;
              content: "";
              height: 0;
              left: 50%;
              margin-left: -0.7em;
              pointer-events: none;
              position: absolute;
              top: 100%;
              width: 0;
            }
          }
        }
      }
    }
    .profile-button {
      display: inline-block;
      background: #fff;
      border: 1px solid #fff;
      color: #000;
      font-weight: 500;
      margin-right: 20px;
    }
    .profile-button {
      display: inline-block;
      margin-right: 20px;
    }
  }

  @media (max-width: 800px) {
    .profile-actions-container h1 {
      font-size: 40px !important;
    }
    .profile-actions-container h2 {
      font-size: 13px !important;
    }
    .profile-entry-inputs {
      margin-left: 15px !important;
    }
    .profile-entry input[type="text"] {
      font-size: 13px !important;
    }
    .profile-entry input[type="checkbox"] + label {
      font-size: 7px !important;
    }

    .profile-metadata .add-kids-marker {
      font-size: 13px;
      font-weight: 400;
    }
    .kids-profile-tooltip {
      bottom: 35px;
      font-size: 9px;
      right: -49px;
      width: 160px;
    }
    .profile-button {
      font-size: 13px;
    }
  }
  .list-profiles {
    max-width: 80%;
    text-align: center;
    .profile-gate-label {
      color: #fff;
      font-size: 3.5vw;
      font-weight: 600;
      margin: 0.67em 0;
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
        float: left;
        margin: 0 2vw 0 0;
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
  }
  .profile-buttons {
    background-color: transparent;
    border: 1px solid grey;
    color: grey;
    cursor: pointer;
    display: block;
    font-size: 1.2vw;
    letter-spacing: 2px;
    margin: 2em 0 1em;
    padding: 0.5em 1.5em;
  }
  .profiles-gate-container {
    background: #141414;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
    z-index: 0;
  }
`;
