import React, { useRef, useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import Card from "./Card";
export default function Cardslider({ data, title, className }) {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(5);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [showControlright, setShowControlright] = useState(false);
  const [showControlleft, setShowControlleft] = useState(false);
  const [showControls, setShowcontrols] = useState(false);
  const checkControls = () => {
    if (sliderPosition > 0) {
      setShowControlleft(true);
    } else {
      setShowControlleft(false);
    }

    if (sliderPosition < 4) {
      setShowControlright(true);
    } else {
      setShowControlright(false);
    }
    console.log(left, right);
  };

  // use effect to call checkControls whenever sliderPosition changes
  useEffect(() => {
    checkControls();
  }, [sliderPosition]);
  const listRef = useRef();

  const [show, hide] = useState(false);
  const handleDir = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 80;
    if (direction === "left" && sliderPosition > 0 && sliderPosition !== 4) {
      listRef.current.style.transform = `translateX(${257 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
      setLeft(left - 1);
      setRight(right - 1);
    }
    if (direction === "left" && sliderPosition === 4) {
      listRef.current.style.transform = `translateX(${221 + distance}px)`;
      setSliderPosition(sliderPosition - 1);
      setLeft(left - 1);
      setRight(right - 1);
    }
    if (direction === "right" && sliderPosition === 3) {
      listRef.current.style.transform = `translateX(${-181 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
      setLeft(left + 1);
      setRight(right + 1);
    }
    if (direction === "right" && sliderPosition < 3) {
      listRef.current.style.transform = `translateX(${-217 + distance}px)`;
      setSliderPosition(sliderPosition + 1);
      setLeft(left + 1);
      setRight(right + 1);
    }
  };
  return (
    <>
      <Div className="flex" style={{ alignItems: "center" }}>
        <h1
          style={{
            marginLeft: "60px",
            fontSize: "1.4vw",
            lineHeight: "1.25vw",
            cursor: "pointer",
          }}
        >
          {title}
        </h1>
        <Span>Explore all {" >"}</Span>
      </Div>
      <Container
        className={`flex cloumn`}
        onMouseEnter={() => {
          setShowcontrols(true);
          checkControls();
        }}
        onMouseLeave={() => {
          setShowcontrols(false);
        }}
      >
        <div className="wrapper">
          {showControlleft && (
            <div
              className={`slider-action left ${
                !showControls ? "none" : ""
              } flex j-center a-center`}
            >
              {" "}
              <AiOutlineLeft onClick={() => handleDir("left")} />
            </div>
          )}
          <div className="flex slider" ref={listRef}>
            {data.map((movie, index) => {
              return (
                <Card
                  left={left}
                  right={right}
                  movieData={movie}
                  index={index}
                  key={movie.id}
                ></Card>
              );
            })}
          </div>
          {showControlright && (
            <div
              className={`slider-action right ${
                !showControls ? "none" : ""
              } flex j-center a-center`}
            >
              {" "}
              <AiOutlineRight onClick={() => handleDir("right")} />
            </div>
          )}
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  z-index: 0;
  margin: 3vw 60px;
  position: relative;
  margin-top: 1rem;
  width: 95vw;
  .wrapper {
    .slider {
      transform: translate(0px);
      width: max-content;
      transition: 0.3s ease-in-out;
    }
    .slider-action {
      position: absolute;
      z-index: 999;
      height: 100%;
      bottom: 0;
      background: hsla(0, 0%, 8%, 0.5);
      top: 0;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: -61px;
      width: 58px;
    }
    .right {
      right: 0;
      width: 41px;
    }
  }
`;
const Span = styled.span`
  color: #54b9c5;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8vw;
  line-height: 0.8vw;
  margin-right: 4px;
  font-weight: 800;
  max-width: 0;
  opacity: 0;
  transform: translate(-4px, 2px);
  transition: max-width 1s, opacity 1s, transform 0.75s;
  vertical-align: bottom;
  white-space: nowrap;
`;
const Div = styled.div`
  &:hover Span {
    opacity: 1;
    transform: translate(12px, 2px);
  }
`;
