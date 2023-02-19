import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Card({
  movieData,
  isLiked = false,
  left,
  right,
  index,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [shrinked, setShrink] = useState(false);
  const nav = useNavigate();
  const timeoutRef = useRef(0);
  const intervalRef = useRef(0);

  useEffect(() => {
    if (isHovered) {
      intervalRef.current = setInterval(() => {
        if (isHovered) {
          setShrink(true);
        }
      }, 2000);
    } else {
      setShrink(false);
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(false);
  };

  return (
    <Container
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${isHovered ? "hovered" : ""} ${
        index === right ? "rght" : ""
      }  `}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="age"
      />

      <div
        className={`hover rr ${index === left ? "lft" : ""}`}
        style={{
          visibility: `${isHovered === true ? "visible" : "hidden"}`,
          opacity: `${isHovered === true ? "1" : "0"}`,
        }}
      >
        {
          <>
            <div className="image-video">
              <img
                src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
                alt="age"
                onClick={() => nav("/player")}
              />
              <h3 className={`name ${shrinked === true ? "shrink" : ""}`}>
                {movieData.name}
              </h3>
            </div>
            <div className="info-container flex column">
              <div className="icons flex j-between">
                <div className="controls flex">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Hawkins-Icon fill"
                    title="Play"
                    onClick={() => nav("/player")}
                  >
                    <path
                      d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Hawkins-Icon"
                  >
                    <title>Add To Fav</title>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  {isLiked === false ? (
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Hawkins-Icon"
                    >
                      <title>Like</title>
                      <path
                        d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                        fill="white"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Hawkins-Icon Hawkins-Icon-Standard"
                    >
                      <title>Liked</title>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.407 6.25579L13.313 5.50407C13.1342 4.07353 11.9181 3 10.4764 3C10.2133 3 10 3.21331 10 3.47644V6.7132C10 6.90062 9.94733 7.08427 9.848 7.2432L7.90742 10.3481C7.64516 10.7677 7.23665 11.0752 6.76086 11.2112L4.72528 11.7928C4.29598 11.9154 4 12.3078 4 12.7543V18.3161C4 18.6938 4.30618 19 4.68387 19C5.874 19 7.04352 19.3106 8.07684 19.9011L8.25 20C9.39679 20.6553 10.6947 21 12.0156 21H13H16H16.5C17.3284 21 18 20.3284 18 19.5C18 19.1158 17.8556 18.7654 17.6181 18.5H18C18.8284 18.5 19.5 17.8284 19.5 17C19.5 16.4601 19.2147 15.9868 18.7867 15.7226C19.478 15.5888 20 14.9804 20 14.25C20 13.4216 19.3284 12.75 18.5 12.75H18.3294C18.7336 12.4813 19 12.0217 19 11.5C19 10.6716 18.3284 10 17.5 10H13.125L13.407 7.74421C13.4688 7.24999 13.4688 6.75001 13.407 6.25579Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  )}
                </div>

                <div className="info">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="Hawkins-Icon Hawkins-Icon-Standard"
                  >
                    <title>View More</title>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="data flex">
                <span className="matchscore">{movieData.Vote}% Match</span>
                <div className="second-line">
                  <span className="mRating">
                    <span> {movieData.adult}</span>
                  </span>
                  <span className="duration">{movieData.length}</span>
                  <span className="player-feature-badge">HD</span>
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
          </>
        }
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

  &.hovered {
    transition-delay: 0.5s;
    transform: translateZ(2vw) scale(1.1);
    transition: transform 600ms ease-in;
    &.rght {
      transform: translateX(-1vw) translateZ(2vw) scale(1.1);
    }
  }

  img {
    position: relative;
    border-radius: 0.2rem;
    width: 231px;
    border-radius: 4px;
    max-width: 231px;
    height: 131px;
    z-index: -1;
  }
  .hover {
    z-index: 999;
    height: max-content;
    position: absolute;
    top: -16vh;
    border-radius: 0.3rem;
    box-shadow: #000000c4 0px 3px 10px;
    width: 262.307692px;
    height: 285px;
    background-color: #181818;

    .image-video {
      position: relative;
      height: 140px;
      img {
        width: 100%;
        height: 140px;
        object-fit: cover;
        border-radius: 0.3rem;
        top: 0;
        max-width: none !important;
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
      .name {
        position: absolute;
        z-index: 999;
        bottom: 0px;
        left: 10px;
        max-width: 75%;
      }
    }
    .info-container {
      padding: 1rem;
      gap: 1.1rem;
      font-size: 0.77vw;
    }
    .icons {
      .controls {
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
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
        gap: 0.7rem;
        li {
          padding-right: 0.7rem;
          &:first-of-type {
            list-style-type: none;
          }
        }
      }
    }
  }
  .rr {
    transition: opacity 0.4s ease-in-out;
  }
  .Hawkins-Icon {
    border-radius: 100%;
    border: 1px solid white;
    width: calc(0.7em + 10px);
    height: calc(0.7em + 10px);
    padding: 6px;
  }
  .fill {
    background: white;
    color: black;
    &:hover {
      color: rgb(0 0 0) !important;
      background: rgb(211 211 211);
    }
  }
  .svgoverlay {
    margin-left: 0.1rem;
    margin-top: -0.1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: opacity 0.1s linear,
      transform 0.35s cubic-bezier(0.5, 0, 0.1, 1), all 0.25s linear;
    opacity: 1;
    transform: translateX(-50%) translateY(-50%) scale(1) translateZ(0px);
  }
  .matchscore {
    max-width: 300px;
    opacity: 1;
    transition: max-width 0.55s cubic-bezier(0.86, 0, 0.07, 1) 1.65s,
      opacity 0.15s linear 2.2s;
    color: #46d369;
    font-size: 12px;
    font-weight: 800;
    white-space: unset;
    margin-right: 0.5em;
  }
  .second-line {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    .mRating {
      margin-right: 0.5em;
      span {
        border: 1px solid hsla(0, 0%, 100%, 0.4);
        font-family: Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu,
          sans-serif;
        overflow: hidden;
        padding: 0.1em 0.4em;
        text-overflow: ellipsis;
        text-transform: uppercase;
        unicode-bidi: normal /*!rtl:plaintext*/;
        white-space: nowrap;
      }
    }
    .duration {
      white-space: nowrap;
      margin-right: 0.5em;
    }
    .player-feature-badge {
      margin-right: 0.715em;
      border: 1px solid hsla(0, 0%, 100%, 0.4);
      border-radius: 3px;
      color: hsla(0, 0%, 100%, 0.9);
      font-size: 0.7em;
      padding: 0 0.5em;
      white-space: nowrap;
    }
  }
  .shrink {
    transition: opacity 0.5s ease-in-out;
    opacity: 0;
  }
`;
