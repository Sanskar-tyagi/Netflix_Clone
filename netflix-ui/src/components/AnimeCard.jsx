import React from "react";

import styled from "styled-components";
export default function AnimeCard({ animedata, isLiked = false }) {
  return (
    <>
      <Container>
        <img src={`${animedata.image}`} alt="Animes" />
        <span>{animedata.name}</span>
      </Container>
    </>
  );
}

const Container = styled.div``;
