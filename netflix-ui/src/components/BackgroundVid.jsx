import React, { useEffect, useState } from "react";
import op from "../assets/Op.mp4";
import Oplogo from "../assets/opopNomi.png";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function BackgroundVid() {
  const [fadeOut, setFadeOut] = useState(false);
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
          muted
          loop
          src={op}
        ></video>
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
    .container {
      position: absolute;
      bottom: 12rem;

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
`;
