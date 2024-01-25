import { IFilm } from "../../store/slices/filmsSlice";

const FilmItem = ({ film }: { film: IFilm }) => {
  return (
    <li key={film.imdbId}>
      <h3>{film.title}</h3>
      <img src={film.posterURL} alt={film.title} />
    </li>
  );
};

export default FilmItem;
