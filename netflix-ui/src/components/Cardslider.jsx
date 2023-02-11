import React, { useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import Card from "./Card";
export default function Cardslider({ data, title, className }) {
  const [showControls, setShowcontrols] = useState(false);
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  const [show, hide] = useState(false);
  const handleDir = (dir) => {};
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
        className={`flex cloumn ${className === "first-card" ? "oni" : ""}`}
        onMouseEnter={() => {
          setShowcontrols(true);
        }}
        onMouseLeave={() => {
          setShowcontrols(false);
        }}
      >
        <div className="wrapper">
          <div
            className={`slider-action left ${
              !showControls ? "none" : ""
            } flex j-center a-center`}
          >
            {" "}
            <AiOutlineLeft onClick={() => handleDir("left")} />
          </div>
          <div className="flex slider" ref={listRef}>
            {data.map((movie, index) => {
              return (
                <Card movieData={movie} index={index} key={movie.id}></Card>
              );
            })}
          </div>
          <div
            className={`slider-action right ${
              !showControls ? "none" : ""
            } flex j-center a-center`}
          >
            {" "}
            <AiOutlineRight onClick={() => handleDir("right")} />
          </div>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  margin: 3vw 60px;
  margin-top: 0vw;
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
