import React from "react";
import { MovieControls } from "./MovieControls";


export const MovieCard = ({ movie, type }) => {
  return (

    //To show image and title, publish data... at any box
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
