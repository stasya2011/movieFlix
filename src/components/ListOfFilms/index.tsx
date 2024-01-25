import React from "react";
import { useAppSelector } from "../../hooks";

const ListOfFilms = () => {
  const { films } = useAppSelector((state) => state.films);

  return (
    <div>
      {films.length ? (
        <ul>
          {films.map((film) => (
            <li key={film.imdbId}>
              <h3>{film.title}</h3>
              <img src={film.posterURL} alt={film.title} />
            </li>
          ))}
        </ul>
      ) : (
        "No result was found for your query."
      )}
    </div>
  );
};

export default ListOfFilms;
