import React from "react";
import AnimeCard from "./AnimeCard";

export default function AnimeCardslider({ data, title }) {
  console.log("Anime cardslider" + data);
  return (
    <div>
      {data.map((anime, index) => {
        return (
          <AnimeCard animedata={anime} index={index} key={anime.id}></AnimeCard>
        );
      })}
    </div>
  );
}
