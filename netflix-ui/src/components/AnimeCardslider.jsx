import React from "react";
import styled from "styled-components";
import AnimeCard from "./AnimeCard";

export default function AnimeCardslider({ data, title }) {
  return (
    <Container>
      {" "}
      <div class="top-picks">
        <ul class="top-picks__track flex">
          {data.map((anime, index) => {
            return (
              <li class="item top-picks__item" v-for="(ITEM, index) in ITEMS">
                <a
                  class="item__card"
                  href="{{ ITEM.link }}"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AnimeCard
                    animedata={anime}
                    index={index}
                    key={anime.id}
                  ></AnimeCard>
                </a>
              </li>
            );
          })}{" "}
        </ul>
      </div>
    </Container>
  );
}

const Container = styled.div``;
