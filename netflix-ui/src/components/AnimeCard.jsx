import React from "react";

import styled from "styled-components";
export default function AnimeCard({ animedata, isLiked = false }) {
  return (
    <Container>
      <img src={`${animedata.image}`} alt="Animes" />
    </Container>
  );
}
const Container = styled.div``;
