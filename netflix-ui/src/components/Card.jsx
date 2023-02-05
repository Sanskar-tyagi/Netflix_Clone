import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import op from "../assets/Op.mp4";
import {
  IoPlayCircleSharp,
  IoVolumeMuteSharp,
  IoVolumeHighSharp,
} from "react-icons/io5";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

export default function Card({ movieData, isLiked = false }) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("movdata");
  const nav = useNavigate();
  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="age"
      />

      <div
        className="hover"
        style={{
          visibility: `${isHovered === true ? "visible" : "hidden"}`,
          transform: `${isHovered === true ? "scale(1.2)" : "scale(1)"}`,
          transition: "all 600ms ease-in-out",
          transitionDelay: "600ms",
        }}
      >
        <div className="image-video">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
            alt="age"
            onClick={() => nav("/player")}
          />

          <video src={op} autoPlay loop muted onClick={() => nav("/player")}>
            <div className="mute icons flex j-between">
              <div className="controls flex">
                <IoVolumeHighSharp />
                <IoVolumeMuteSharp />
              </div>
            </div>
          </video>
        </div>{" "}
        <div className="info-container flex column">
          <h3 className="name" onClick={() => nav("/player")}>
            {movieData.name}
          </h3>
          <div className="icons flex j-between">
            <div className="controls flex">
              <IoPlayCircleSharp title="Play" onClick={() => nav("/player")} />
              <RiThumbUpFill />
              {isLiked ? (
                <BsCheck title="Remove From Fav" />
              ) : (
                <AiOutlinePlus title="Add to Fav" />
              )}
            </div>
            <div className="info">
              <BiChevronDown title="More" />
            </div>
          </div>
          <div className="genres flex">
            <ul className="flex">
              {movieData.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  max-width: 16.66666667%;
  width: 16.66666667%;
  height: 100%;
  cursor: pointer;
  padding: 0 0.2vw;
  position: relative;
  img {
    border-radius: 0.2rem;
    width: 227px;
    border-radius: 5px;
    max-width: 227px;
    height: 100%;
    z-index: 10;
  }
  .hover {
    z-index: 999;
    height: max-content;

    position: absolute;
    top: -10vh;
    border-radius: 0.3rem;
    box-shadow: #000000c4 0px 3px 10px;
    width: 301px;
    height: 250x;
    background-color: #181818;
    .image-video {
      position: relative;
      height: 140px;
      img {
        width: 227px;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 4;

        position: absolute;
      }
      video {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        z-index: 5;
        position: absolute;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 0.5rem;

      font-size: 0.8vw;
    }
    .icons {
      .controls {
        display: flex;
        gap: 1rem;
      }
      svg {
        font-size: 2rem;
        cursor: pointer;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    .genres {
      ul {
        gap: 1rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
`;
