import React from "react";
import Cardslider from "./Cardslider";
import AnimeCardslider from "./AnimeCardslider";
export default function Slider({ movies, anime }) {
  const getmovies = (from, to) => {
    return movies.slice(from, to);
  };
  const getanime = (from, to) => {
    return anime.slice(from, to);
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "42vw",
        zIndex: "99",
        background: "transparent",
        backgroundImage:
          "linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, rgba(20, 20, 20, 11) 1%, rgba(20, 20, 20, 1) 29%, rgba(20, 20, 20, 1) 44%, rgba(20, 20, 20, 1) 100%)",
      }}
    >
      <Cardslider
        className={"first-card"}
        title="Trending Now"
        data={getmovies(0, 10)}
      ></Cardslider>
      <Cardslider
        title="Top Movies in India Today"
        data={getmovies(10, 20)}
      ></Cardslider>
      <AnimeCardslider title="ANIME" data={getanime(20, 40)}></AnimeCardslider>
      <Cardslider title="NEW RELEASE" data={getmovies(30, 40)}></Cardslider>
      <AnimeCardslider
        title="TOP ANIME THIS WEEK"
        data={getanime(0, 20)}
      ></AnimeCardslider>
      <Cardslider
        title="BLOCKBUSTER MOVIES"
        data={getmovies(50, 60)}
      ></Cardslider>
    </div>
  );
}
