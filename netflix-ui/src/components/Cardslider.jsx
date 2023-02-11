import React, { useRef, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
export default function Cardslider({ data, title }) {
  const [showControls, setShowcontrols] = useState(false);
  const listRef = useRef();
  const [sliderPosition, setSliderPosition] = useState(0);
  return (
    <Container
      className="flex cloumn"
      onMouseEnter={() => {
        setShowcontrols(true);
      }}
      onMouseLeave={() => {
        setShowcontrols(false);
      }}
    >
      <div className="flex">
        {data.map((movie, index) => {
          return <Card movieData={movie} index={index} key={movie.id}></Card>;
        })}
      </div>
    </Container>
  );
}
const Container = styled.div`
  margin: 3vw 3vw;
`;
