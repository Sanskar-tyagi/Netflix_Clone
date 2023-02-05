import React from "react";
import styled from "styled-components";
import Card from "./Card";

export default function Cardslider({ data, title }) {
  return (
    <Container className="flex">
      {data.map((movie, index) => {
        return <Card movieData={movie} index={index} key={movie.id}></Card>;
      })}
    </Container>
  );
}
const Container = styled.div`
  margin: 3vw 3vw;
`;
