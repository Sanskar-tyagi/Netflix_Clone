import React from "react";

import styled from "styled-components";
export default function AnimeCard({ animedata }) {
  console.log(animedata.image + "Yohohjohoohho");
  return (
    <Container>
      <img src={`${animedata.image}`} alt="hyeawfaf" />
    </Container>
  );
}
const Container = styled.div``;
