import React, { useState } from "react";
import styled from "styled-components";
import Backgroundimage from "../components/Backgroundimage";
import Header from "../components/Header";
import { firbaseauth } from "../utils/firebase_config";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
export default function Login() {
  const [err, setError] = useState(false);
  const navigate = useNavigate();
  const [email, Setemail] = useState("");
  const [pass, usepass] = useState("");
  const trackMail = (e) => {
    Setemail(e.target.value);
  };
  const trackpass = (e) => {
    usepass(e.target.value);
  };
  onAuthStateChanged(firbaseauth, (currentUser) => {
    if (currentUser) navigate("/");
  });
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const mail = email;
      const password = pass;
      await signInWithEmailAndPassword(firbaseauth, mail, password);
    } catch (error) {
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
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <ul className="simpleForm structural ui-grid">
                <li data-uia="field-email+wrapper" className="nfFormSpace">
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
                          value={email}
                          onChange={trackMail}
                        />
                        <label
                          htmlFor="id_email"
                          className={
                            "placeLabel" + (email === "" ? "" : "hastext")
                          }
                        >
                          {" "}
                          Email
                        </label>
                      </label>
                    </div>
                  </div>
                </li>
                <li data-uia="field-password+wrapper" className="nfFormSpace">
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
                          onChange={trackpass}
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
              <div className="submitBtnContainer">
                <button onClick={handleLogin} className="nf-btn">
                  Next
                </button>
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
        font-weight: 500;
        margin: 0 0 10px;
        padding: 0;
        margin-bottom: 28px;
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
      max-width: 450px;
      min-height: 100vh;
      .form {
        min-height: 660px;
        width: 30vw;
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
        padding: 48px 58px 126px 58px;
        .simpleForm {
          margin: 16px 0 20px;
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
                  border-radius: 4px;
                  color: #fff;
                  height: 50px;
                  line-height: 50px;
                  padding: 16px 20px 0;
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
          min-height: 37px;
          min-width: 98px;
          background-color: #f6121d;
          min-width: 110px;
          padding: 16px;
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
          background: #d9d9d9;
          text-decoration: none;
        }
      }
    }
  }
`;

// .simpleForm {
