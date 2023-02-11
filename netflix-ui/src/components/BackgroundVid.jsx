import React, { useEffect, useState } from "react";
import op from "../assets/Op.mp4";
import Oplogo from "../assets/opopNomi.png";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { VscMute, VscUnmute } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

export default function BackgroundVid() {
  const [fadeOut, setFadeOut] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const setUnmute = () => {
    setIsMuted(!isMuted);
  };
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 3500);
  }, []);

  return (
    <Container>
      <div className="hero">
        <video
          className="background backgroundImage"
          autoPlay
          muted={isMuted}
          loop
          src={op}
        ></video>
        <div className="vig"></div>
        <div
          className="mute flex"
          onClick={() => {
            setIsMuted(!isMuted);
          }}
        >
          {isMuted === true ? (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 12C24 8.28699 22.525 4.72603 19.8995 2.10052L18.4853 3.51474C20.7357 5.76517 22 8.81742 22 12C22 15.1826 20.7357 18.2349 18.4853 20.4853L19.8995 21.8995C22.525 19.274 24 15.7131 24 12ZM11 4.00001C11 3.59555 10.7564 3.23092 10.3827 3.07613C10.009 2.92135 9.57889 3.00691 9.29289 3.29291L4.58579 8.00001H1C0.447715 8.00001 0 8.44773 0 9.00001V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00001ZM5.70711 9.70712L9 6.41423V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70712ZM16.0001 12C16.0001 10.4087 15.368 8.8826 14.2428 7.75739L12.8285 9.1716C13.5787 9.92174 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92896C18.9462 6.80432 19.9998 9.34786 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87829 17.157 7.84346 15.6567 6.34317L17.0709 4.92896Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
          <span class="maturity-rating ">
            <span class="maturity-number">A</span>
          </span>
        </div>
        <div className="container ">
          <div className={`logo  ${fadeOut ? "titleWrapper" : ""}`}>
            <img src={Oplogo} alt="" />
            <p className={`${fadeOut ? "fade-out" : ""}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              fugiat reprehenderit dicta omnis perferendis soluta illo minus
              quam quidem, dolores veniam quis dolorum, qui, laboriosam nam
              doloribus porro quos natus!
            </p>
          </div>
          <div
            className="buttons flex"
            onClick={() => {
              navigate("/Player");
            }}
          >
            <button className="flex j-center a-center">
              <FaPlay /> PLAY
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>{" "}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  .hero {
    position: relative;
    .backgroundImage {
      filter: brightness(60%);
    }
    video {
      height: 100%;
      width: 100%;
    }
    .vig {
      position: absolute;
      background-color: transparent;
      background-image: linear-gradient(
        180deg,
        hsla(0, 0%, 8%, 0) 0,
        hsla(0, 0%, 8%, 0.15) 15%,
        hsla(0, 0%, 8%, 0.35) 29%,
        hsla(0, 0%, 8%, 0.58) 44%,
        #141414 68%,
        #141414
      );
      background-position: 0 top;
      background-repeat: repeat-x;
      background-size: 100% 100%;
      bottom: -1px;
      height: 14.7vw;
      opacity: 1;
      top: 39vw;
      width: 100%;
    }
    .mute {
      position: absolute;
      bottom: 20vw;
      right: -1%;
      z-index: 999;
    }
    .container {
      position: absolute;
      bottom: 14rem;
      .logo {
        width: 36%;
        margin-left: 5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: flex-start;
        align-items: baseline;
        transition: transform 1300ms, delay 5000ms;
        img {
          width: 100%;
          height: 100%;
        }
        p {
          color: #fff;
          font-size: 1.2vw;
          font-weight: 400;
          display: inline-block;
          line-height: normal;
          opacity: 1;
          transition: opacity 800ms;
          margin-top: 1.1vw;
          text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);
        }
        .fade-out {
          opacity: 0;
        }
      }

      .titleWrapper {
        transform: scale(0.6) translate3d(-185px, 242px, 0);
      }

      .buttons {
        margin: 5rem;
        margin-top: 3rem;
        grid-gap: 2rem;
        button {
          border-radius: 4px;
          border: none;
          font-size: 1.4rem;
          border-radius: 0.2rem;
          padding: 0.8rem;
          gap: 0.8rem;
          padding-left: 1.6rem;
          cursor: pointer;
          padding-right: 2rem;
          transition: 0.3s ease-in-out;
          &:hover {
            opacity: 0.8;
          }
          &:nth-of-type(2) {
            background: rgb(109 109 110 / 70%);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }
  }
  .Icon {
    border-radius: 100%;
    border: 1px solid white;
    width: calc(2em + 10px);
    height: calc(2em + 10px);
    padding: 8px;
    display: block;
    cursor: pointer;
    margin-right: 10px;
  }
  .maturity-rating {
    align-items: center;
    background-color: rgba(51, 51, 51, 0.6);
    border: 3px #dcdcdc;
    border-left-style: solid;
    box-sizing: border-box;
    display: flex;
    font-size: 1.1vw;
    height: 2.4vw;
    padding: 0.5vw 3.5vw 0.5vw 0.8vw;
    .maturity-number {
      border: 1px solid hsla(0, 0%, 100%, 0.4);
      font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu,
        sans-serif;
      overflow: hidden;
      border-width: 0;
      padding: 0;
      padding: 0 0.4em;
      text-overflow: ellipsis;
      text-transform: uppercase;
      unicode-bidi: normal /*!rtl:plaintext*/;
      white-space: nowrap;
    }
  }
`;
