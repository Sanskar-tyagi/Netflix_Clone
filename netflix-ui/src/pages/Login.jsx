import React, { useState } from "react";
import styled from "styled-components";
import Backgroundimage from "../components/Backgroundimage";
import Header from "../components/Header";
import { firbaseauth } from "../utils/firebase_config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { errorPrefix } from "@firebase/util";
export default function Login() {
  onAuthStateChanged(firbaseauth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  const [err, setError] = useState(false);
  const [perr, setp] = useState(false);
  const [eerr, setErr] = useState(false);
  const navigate = useNavigate();
  const [email, Setemail] = useState("");
  const [check, setcheck] = useState(true);
  const handlecheck = () => {
    setcheck(!check);
  };
  const [pass, usepass] = useState("");
  const trackMail = (e) => {
    Setemail(e.target.value);
  };
  const trackpass = (e) => {
    usepass(e.target.value);
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const mail = email;
      const password = pass;
      await signInWithEmailAndPassword(firbaseauth, mail, password);
      navigate("/profile");
    } catch (error) {
      setError(true);
      alert(error);
    }
  };
  return (
    <Container>
      <Backgroundimage></Backgroundimage>

      <div className="content">
        <Header />
        <div className="form-container flex-column ">
          <div className="form flex column">
            <div className="title">
              <h3>Sign in</h3>
            </div>
            <div className="container flex column">
              <ul className="simpleForm structural ui-grid">
                <li
                  data-uia="field-email+wrapper"
                  className="nfFormSpace mails"
                >
                  <div
                    data-uia="field-email+container"
                    className="nfInput nfInputOversize"
                  >
                    <div className="nfInputPlacement">
                      <label
                        className={
                          "input_id " + (err === true ? " haserror" : "")
                        }
                        placeholder="email"
                      >
                        <input
                          name="email"
                          className={"nfTextField hasText "}
                          type="email"
                          tabIndex="0"
                          autoComplete="off"
                          placeholder=""
                          value={email}
                          onChange={trackMail}
                        />
                        <label
                          htmlFor="id_email"
                          className={
                            "placeLabel " + (email === "" ? "" : "hastext")
                          }
                        >
                          {" "}
                          Email or phone number
                        </label>
                      </label>
                    </div>
                    {err !== true ? (
                      <div className="d-none"></div>
                    ) : (
                      <div
                        id=""
                        class="inputError"
                        data-uia="login-field+error"
                      >
                        Please enter a valid email address or phone number.
                      </div>
                    )}
                  </div>
                </li>
                <li data-uia="field-password+wrapper" className="nfFormSpace">
                  <div
                    data-uia="field-password+container"
                    className="nfInput nfInputOversize"
                  >
                    <div className="nfInputPlacement">
                      <label
                        className={
                          "input_id " + (err === true ? " haserror" : "")
                        }
                        placeholder="password"
                      >
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
                          onChange={trackpass}
                        />
                        <label
                          htmlFor="id_password"
                          className={
                            "placeLabel " + (pass === "" ? "" : "hastext")
                          }
                        >
                          Add a password
                        </label>
                      </label>
                    </div>
                    {err !== true ? (
                      <div className="d-none"></div>
                    ) : (
                      <div
                        id=""
                        class="inputError"
                        data-uia="password-field+error"
                      >
                        Your password must contain between 4 and 60 characters.
                      </div>
                    )}
                  </div>
                </li>
              </ul>
              <div class="hybrid-login-form-help">
                <div class="ui-binary-input login-remember-me">
                  <input
                    type="checkbox"
                    class=""
                    name="rememberMe"
                    value="true"
                    tabindex="0"
                    checked=""
                  />
                  <label
                    className="bxid_rememberMe_true true"
                    data-uia="label+rememberMe"
                    onClick={handlecheck}
                  >
                    {check === true ? "" : <i class="gg-check"></i>}

                    <span class="login-remember-me-label-text">
                      Remember me
                    </span>
                  </label>
                  <div class="helper"></div>
                </div>
                <a class="login-help link" href="/LoginHelp">
                  Need help?
                </a>
              </div>
              <div className="submitBtnContainer">
                <button onClick={handleLogin} className="nf-btn">
                  Sign in
                </button>
              </div>
              <div
                class="recaptcha-terms-of-use"
                data-uia="recaptcha-terms-of-use"
              >
                <p>
                  <span>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                  </span>
                  <button class="link-button">Learn more.</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <CSSTransition
          in={true}
          timeout={1000}
          classNames="myclass myclass"
          appear={true}
        ></CSSTransition> */}
    </Container>
  );
}

const Container = styled.div`
  positon: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0,
      transparent 60%,
      rgba(0, 0, 0, 0.8)
    );
    .title {
      h3 {
        color: #fff;
        font-size: 32px;
        font-weight: 600;
        margin: 0 0 10px;
        padding: 0;
        margin-bottom: 15px;
      }
    }
    height: 746px;
    object-fit: center;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .form-container {
      background-color: transparent;
      margin: 0 auto -236px;
      max-width: 374px;
      min-height: 100vh;
      color: #333;
      .form {
        min-height: 615px;
        width: 28vw;
        background-color: rgba(0, 0, 0, 0.75);
        border-radius: 4px;
        box-sizing: border-box;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        margin: 0;
        margin-bottom: 90px;
        padding: 45px 68px 126px 58px;
        .simpleForm {
          margin: 16px 0 20px;
          .mails {
            margin-bottom: 20px !important;
          }
          li {
            list-style: none;
            margin-left: 0;
            margin-bottom: 10px;
            .nfInput {
              border: 0;
              border-radius: 4px;
              position: relative;
              .nfInputPlacement {
                position: relative;
                .nfTextField {
                  border: 0;
                  background: #333;
                  border-radius: 4px;
                  color: #fff;
                  height: 50px;
                  line-height: 50px;
                  padding: 20px 20px 0;
                  width: 100%;
                  display: block;
                  font-size: 16px;
                  appearance: none;
                }
                .nfTextField:valid {
                  box-shadow: none;
                }
                .placeLabel {
                  postion: absolute;
                  font-weight: 500;

                  top: 7px;
                  transform: translateY(0);
                  color: #8c8c8c;
                  font-size: 14px;
                  left: 20px;
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
                }
                .hastext {
                  font-size: 12px;
                  font-weight: 500;
                  top: 14px;
                  left: 20px;
                  color: #8c8c8c;
                  background: none !important;
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
        button {
          border-radius: 4px;
          font-size: 24px;
          max-height: 45px;
          min-width: 98px;
          background-color: #f6121d;
          min-width: 110px;
          padding: 14px;
          width: 100%;
          box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
          box-sizing: border-box;
          cursor: pointer;
          display: inline-block;
          text-align: center;
          border: none;
          color: white;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 700;
          margin: 24px 0 12px;
        }
        button:hover {
          background: #c3121b;
          text-decoration: none;
        }
      }
    }
  }
  .recaptcha-terms-of-use {
    color: #8c8c8c;
    font-size: 14px;
    position: relative;
    text-align: left;
    margin-top: 11px;
  }
  .haserror:before {
    border-bottom: 2px solid #e87c03;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    bottom: 0;
    content: "";
    display: block;
    height: 6px;
    left: 0;
    pointer-events: none;
    position: absolute;
    width: 100%;
  }
  .inputError {
    color: #e87c03;
    margin-bottom: -6px;
    font-size: 13px;
    padding: 6px 3px;
    transform: translateY(+04%);
    transition: bottom 0.5s ease, transform 0.5s ease;
  }
  .link-button {
    background-color: transparent;
    border: none;
    color: #0071eb;
    cursor: pointer;
    display: inline;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
  }
  .hybrid-login-form-help {
    display: flex;
    .login-remember-me {
      flex-grow: 1;
      padding-left: 20px;
      box-sizing: border-box;
      font-size: 16px;
      padding-left: 36px;
      position: relative;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      display: inline-block;
      margin-bottom: -5px;
    }
    .ui-binary-input input[type="checkbox"],
    .ui-binary-input input[type="radio"] {
      left: 0;
      opacity: 0;
      position: absolute;
      top: 0;
      margin: 0;
      margin-right: 10px;
      box-sizing: border-box;
      line-height: normal;
      padding: 0;
      color: inherit;
      font: inherit;
    }
    .bxid_rememberMe_true {
      color: #333;
      display: block;
      line-height: 1.2;
      padding: 6px 0;
      position: relative;
      font-size: 16px;
    }
    .bxid_rememberMe_true:before {
      background: #737373;
      border: 0;
      border-radius: 2px;
      height: 16px;
      left: -25px;
      width: 16px;
      background-color: #fff;
      border: 1px solid #b3b3b3;
      content: "";
      display: block;
      padding: 0;
      position: absolute;
      top: 7px;
    }

    .login-remember-me-label-text {
      color: #b3b3b3;
      font-size: 13px;
      font-weight: 400;
    }
  }
  .gg-check {
    color: #000;
    position: absolute;
    font-size: 28px;
    left: -27px;
    top: 0;
  }
  .gg-check::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
    top: 2px;
    width: 6px;
    height: 12px;
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform-origin: bottom left;
    transform: rotate(45deg);
  }
  .login-help {
    color: #b3b3b3;
    font-size: 14px;
    font-weight: 400;
    padding-top: 7px;

    text-decoration: none;
  }
`;

// .simpleForm {
