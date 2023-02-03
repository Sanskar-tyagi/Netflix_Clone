import React from "react";
import Card from "./Card";

export default function Cardslider({ data, title }) {
  console.log(" Cardslider" + data);
  return (
    <div>
      {data.map((movie, index) => {
        return <Card movieData={movie} index={index} key={movie.id}></Card>;
      })}
    </div>
  );
}
