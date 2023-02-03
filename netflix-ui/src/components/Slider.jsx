import React from "react";
import Cardslider from "./Cardslider";

export default function Slider({ movies, anime }) {
  const getmovies = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <div>
      <Cardslider title="Trending Now" data={getmovies(0, 10)}></Cardslider>
      <Cardslider title="TOP in INDIA" data={getmovies(10, 20)}></Cardslider>
      <Cardslider title="ANIME" data={getmovies(20, 30)}></Cardslider>
      <Cardslider title="NEW RELEASE" data={getmovies(30, 40)}></Cardslider>
      <Cardslider title="TOP SEARCHES" data={getmovies(40, 50)}></Cardslider>
      <Cardslider
        title="BLOCKBUSTER MOVIES"
        data={getmovies(50, 60)}
      ></Cardslider>
    </div>
  );
}
