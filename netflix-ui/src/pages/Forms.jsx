import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import Header from "../components/Header";
import { CSSTransition } from "react-transition-group";
import { firbaseauth } from "../utils/firebase_config";
import { useNavigate } from "react-router-dom";

export default function Forms() {
  const navigate = useNavigate();
  const [init, usein] = useState("");
  const [pass, usepass] = useState("");
  const val = (e) => {
    usein(e.target.value);
  };
  const pas = (e) => {
    usepass(e.target.value);
  };

  onAuthStateChanged(firbaseauth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  const handlesignup = async (event) => {
    event.preventDefault();
    try {
      const email = init;
      const password = pass;
      await createUserWithEmailAndPassword(firbaseauth, email, password);
      navigate("/profile");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Container>
      <Header></Header>
      <CSSTransition
        in={true}
        timeout={2000}
        classNames="myclass myclass"
        appear={true}
      >
        <div className="main">
          <div className="centercont">
            <form method="POST">
              <div className="reg">
                <div className="">
                  <div className="stepHeader-container" data-uia="header">
                    <div className="stepHeader" role="status">
                      <span id="" className="stepIndicator" data-uia="">
                        STEP <b>2</b> OF <b>3</b>
                      </span>
                      <h1 className="stepTitle" data-uia="stepTitle">
                        Create a password to start your membership
                      </h1>
                    </div>
                  </div>
                  <div>
                    <div className="contextRow" data-uia="contextRowDone">
                      Just a few more steps and you're done!
                    </div>
                    <div
                      className="contextRow contextRow+"
                      data-uia="contextRowPaperWork"
                    >
                      We hate paperwork, too.
                    </div>
                    <ul className="simpleForm structural ui-grid">
                      <li
                        data-uia="field-email+wrapper"
                        className="nfFormSpace"
                      >
                        <div
                          data-uia="field-email+container"
                          className="nfInput nfInputOversize"
                        >
                          <div className="nfInputPlacement">
                            <label className="input_id" placeholder="email">
                              <input
                                name="email"
                                className="nfTextField hasText"
                                type="email"
                                tabIndex="0"
                                autoComplete="off"
                                placeholder=""
                                value={init}
                                onChange={val}
                              />
                              <label
                                htmlFor="id_email"
                                className={
                                  "placeLabel" + (init === "" ? "" : "hastext")
                                }
                              >
                                {" "}
                                Email
                              </label>
                            </label>
                          </div>
                        </div>
                      </li>
                      <li
                        data-uia="field-password+wrapper"
                        className="nfFormSpace"
                      >
                        <div
                          data-uia="field-password+container"
                          className="nfInput nfInputOversize"
                        >
                          <div className="nfInputPlacement">
                            <label className="input_id" placeholder="password">
                              <input
                                data-uia="field-password"
                                name="password"
                                className="nfTextField"
                                id="id_password"
                                type="password"
                                tabIndex="0"
                                autoComplete="new-password"
                                maxLength="62"
                                minLength="6"
                                dir=""
                                placeholder=""
                                value={pass}
                                onChange={pas}
                              />
                              <label
                                htmlFor="id_password"
                                className={
                                  "placeLabel" + (pass === "" ? "" : "hastext")
                                }
                              >
                                Add a password
                              </label>
                            </label>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="submitBtnContainer">
                  <button onClick={handlesignup} className="nf-btn">
                    Next
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </CSSTransition>
    </Container>
  );
}
const Container = styled.div`
  background-color: white;
  color: black;
  .main {
    padding-bottom: 95px;
    width: 100vw;
    height: 100vh;
    flex-grow: 1;
    letter-spacing: 0 !important;
    .centercont {
      --layout-container-side-padding: 32px;
      padding: 20px var(--layout-container-side-padding) 60px;
      box-sizing: border-box;
      margin: 0 auto 15px;
      max-width: 978px;
      form {
        .reg {
          margin: 0 auto;
          max-width: 440px;
          text-align: left;
          .stepHeader {
            margin-top: 20px;
            display: inline-block;
            .stepIndicator {
              font-size: 13px;
              text-align: inherit;
              display: block;
              line-height: 19px;
              b,
              h1,
              h2,
              h3,
              h4,
              h5,
              h6,
              optgroup,
              strong {
                font-weight: 500;
              }
              h1 {
                font-size: 32px;
              }
            }
            .stepTitle {
              display: inline-block;
              font-size: 32px;
              font-weight: 500;
              margin: 0 0 0.4em;
              margin-block-start: 0.67em;
              margin-block-end: 0.67em;
              margin-inline-start: 0px;
              margin-inline-end: 0px;
            }
          }
          .contextRow {
            font-size: 18px;
            margin-bottom: 0;
            margin-top: 0;
          }
          .contextRow + .contextRow {
            font-size: 18px;
            margin-top: 10px;
          }
        }
        .simpleForm {
          margin: 16px 0 20px;
          li {
            list-style: none;
            margin-left: 0;
            margin-bottom: 10px;
            .nfInput {
              max-width: 500px;
              position: relative;
              .nfInputPlacement {
                position: relative;
                .nfTextField {
                  height: 60px;
                  -moz-appearance: none;
                  appearance: none;
                  border: 1px solid #8c8c8c;
                  border-radius: 2px;
                  box-sizing: border-box;
                  color: #000;
                  display: block;
                  font-size: 16px;
                  width: 100%;
                  padding: 10px 10px 0;
                }
                .nfTextField:valid {
                  box-shadow: none;
                }
                .placeLabel {
                  font-weight: 500;
                  top: 6px;
                  transform: translateY(0);
                  color: #8c8c8c;
                  font-size: 14px;
                  left: 10px;
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
                }
                .hastext {
                  font-size: 13px;
                  font-weight: 500;
                  top: 6px;
                }
              }
            }
          }
        }
        .ui-grid {
          box-sizing: border-box;
        }
      }
      .submitBtnContainer {
        margin-top: 24px;
        button {
          border-radius: 4px;
          font-size: 24px;
          font-weight: 400;
          min-height: 64px;
          background-color: #f6121d;
          min-width: 110px;
          padding: 20.5px 2em;
          width: 100%;
          box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
          box-sizing: border-box;
          cursor: pointer;
          display: inline-block;
          user-select: none;
          vertical-align: middle;
          text-align: center;
          line-height: 1;
          border: none;
          color: white;
        }
        button:hover {
          background: #c3121b;
          text-decoration: none;
        }
      }
    }
  }
`;
